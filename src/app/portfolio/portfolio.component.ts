import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  constructor(private titleService:Title){
    titleService.setTitle("portfolio ")
  }
  getSrc: string = ""
  openDisplay(event: any) {
    this.getSrc = event.srcElement.id
    document.getElementById("display")?.classList.remove("d-none")
  }
  closeDisplay(event: any) {
    if (event.srcElement.id != "imgDisplay") {
      document.getElementById("display")?.classList.add("d-none")
    }
  }

}










