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
    this.positionTheDot();
    this.drawLine( document.getElementById('#bx_a'),document.getElementById('path') );
  }

  public toolbarClass = "transp";
  @HostListener('window:scroll') onScroll(e: Event): void {
      let top = document.documentElement.scrollTop
      this.setToolbarClass(top);
      this.positionTheDot();
      this.drawLine( document.getElementById('#bx_a'),document.getElementById('path') );
  }

  //draw the line
  public drawLine(container, line) {
    var pathLength = line.getTotalLength(),
    maxScrollTop =  document.documentElement.scrollHeight - window.innerHeight,
    percentDone = (document.documentElement.scrollTop - 250) / maxScrollTop,
    length = percentDone * pathLength * 2.5;
    line.style.strokeDasharray = [ length,pathLength].join(' ');
  }

  public positionTheDot(){
    // What percentage down the page are we? 
    
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop -250) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // Get path length
    var path:any = document.getElementById("path");
    var pathLen = path.getTotalLength();
    // Get the position of a point at <scrollPercentage> along the path.
    var pt = path.getPointAtLength(scrollPercentage * pathLen * 2.5);
    
    // Position the red dot at this point
    var dot = document.getElementById("dot");		  
    var x = pt.x - 400;
    var y = (pt.y+10);
    dot.setAttribute("transform", "translate("+ x + "," + y + ")");
    console.log(x,pt.y);
  }

  public setToolbarClass(top: number){
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
