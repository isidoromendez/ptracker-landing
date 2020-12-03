import { HostListener, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lanin',
  templateUrl: './lanin.component.html',
  styleUrls: ['./lanin.component.scss'],
})
export class LaninComponent implements OnInit {
  panelOpenState1 = true;
  panelOpenState2 = false;
  panelOpenState3 = false;
  panelOpenState4 = false;
  panelOpenState5 = false;
  constructor() { }

  ngOnInit(): void {
  }

  public toolbarClass = "transp";
  @HostListener('window:scroll') onScroll(e: Event): void {
      let top = document.documentElement.scrollTop
      if(top > 200){
        this.toolbarClass = "fondo";        
      }else{
        this.toolbarClass = "transp"; 
      }
      console.log(this.toolbarClass);
  }

  getYPosition(e: Event): number {
    return (e.target as Element).scrollTop;
  }

}
