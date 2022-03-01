import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pix-progress-bar',
  templateUrl: './pix-progress-bar.component.html',
  styleUrls: ['./pix-progress-bar.component.scss']
})
export class PixProgressBarComponent implements OnInit {

  constructor() { }
  public isShow:boolean=false
  ngOnInit(): void {
  }
    progressBar() { 
        this.isShow=!this.isShow
    }
}
