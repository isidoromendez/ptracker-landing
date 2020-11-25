import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-select',
  templateUrl: './lang-select.component.html',
  styleUrls: ['./lang-select.component.scss']
})
export class LangSelectComponent implements OnInit {

  constructor(public translate: TranslateService) {}

  public get lang() : string {
    return this.translate.currentLang;
  }
  
  
  public set lang(v : string) {
    this.translate.use(v);
  }

  ngOnInit(): void {
  }

}
