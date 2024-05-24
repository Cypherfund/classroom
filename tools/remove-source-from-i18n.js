const file = require("fs");

const data = file.readFileSync(__dirname + '/../src/locale/messages.xmb');
const re = /(<source\b[^>]*>)[^<>]*(<\/source>)/ig;
const removedSource = data.toString().replace(re, "");

file.writeFile(__dirname + '/../src/locale/messages.xmb', removedSource, function(err){
  if (err) throw err;
  console.log("created");
});


