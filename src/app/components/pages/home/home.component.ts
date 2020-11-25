import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle: string;
  constructor(public translate: TranslateService, public title: Title) {}
  
  ngOnInit(): void {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');

    const browserLang = this.translate.getBrowserLang();
    console.debug('browserLang',browserLang);
    this.translate.use(browserLang.match(/en|es/) ? browserLang : 'es');

    let video:any = document.getElementById("myVideo"); 
    video.muted=true;
    video.play();
  }

}
