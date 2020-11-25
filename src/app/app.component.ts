import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'ptracker-landing';

  pageTitle: string;

  constructor(public translate: TranslateService, public title: Title) {}

  ngOnInit(): void {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|es/) ? browserLang : 'es');
    this.translate.get("gen.page-title").subscribe((res: string) => {
      this.title.setTitle(res);
    });
    this.translate.stream('gen.page-title').subscribe((res: string) => {
      this.title.setTitle(res);
    })
    
    
  }
}
