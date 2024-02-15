import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrl: './translation.component.scss',
})
export class TranslationComponent implements OnInit{

  languages: any[] = []
  formGroup!: FormGroup;


  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.languages = [ { language: 'en' },
                       { language: 'fr' }]
    this.formGroup = new FormGroup({
      selectedLanguage: new FormControl<string>('')
    });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
  }
  getLanguage(e: any){
    if(e.value.language == 'en'){
      this.useLanguage('en')
    }else {
      this.useLanguage('fr')
    }
  }
}
