const request = require("request");
const fs = require("fs");

['nl', 'fr', 'de', 'ru', 'it', 'es', 'ro', 'hu', 'pt', 'zh-cn', 'tr', 'en-gb', 'pl', 'sv', 'da', 'nb'].map((item) => {

  const object = {
    api_token: '3ae59049536469c1f10fa36a7f2dfb89',
    id: '115853',
    language: item,
    type: 'xtb'
  };

  request.post({
    url: 'https://api.poeditor.com/v2/projects/export',
    form: object,
    'content-type': 'application/json'
  }, (err, httpResponse, body) => {
    const json = JSON.parse(body);

    // initiate the download
    const req = request.get(json.result.url)
      .on('response', (res) => {

        // create file write stream
        const fws = fs.createWriteStream(__dirname + `/../src/locale/messages.${item}.xtb`);

        // setup piping
        res.pipe(fws);

        res.on('end', function () {
          // go on with processing
          console.log(`finished ${item}`);
        });
      });
  });
});



