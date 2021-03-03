import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

export class ContactMsg {

  constructor(
    public name: string,
    public mail: string,
    public mensaje: string,
    public key: string = '392285cdd94767f8cd6e7249103270d30f3cd2a6'
  ) {  }

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle: string;
  
  constructor(private http: HttpClient,public translate: TranslateService, public title: Title) {}
  
  public model = new ContactMsg('', '', '');

  submitted = false;
  success = false;
  mailerr =  false;
  error = false;
  
  onSubmit(form) {
    this.submitted = false;
    this.success = false;
    this.mailerr =  false;
    this.error = false; 
    console.log('send to https',this.model);
    this.http.post('https://201.220.160.59/sendmail', this.model).subscribe(
      (response) => {
        console.log('ok',response);
        this.submitted = true;
        this.formReset(form);      
        this.success = true;  
        this.mailerr = false;
      },
      (error) => {        
        this.submitted = true;
        this.success = false;
        if(error.status == 400){          
          this.mailerr = true;
        }else{
          this.error = true;
        }
        console.log(this.success,this.mailerr,this.error,error)
      }
    )
  }   

  ngOnInit(): void {
    

    let video:any = document.getElementById("myVideo"); 
    video.muted=true;
    video.play();
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  formReset(form) {

    form.reset();

    Object.keys(form.form.controls).forEach(key => {
      form.form.get(key).setErrors(null) ;
    });
}

}
