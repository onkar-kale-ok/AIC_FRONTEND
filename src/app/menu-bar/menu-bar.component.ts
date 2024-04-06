import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { HttpService } from '../servies/http.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  continentList : string [] = [];

  currencyList : string [] = [];

  @ViewChild('closeBtn') closeBtn! : ElementRef<any>;

  @Output() emitAction = new EventEmitter<any>();

  constructor(private http: HttpService){

  }

  ngOnInit(){
    this.getContinent();
    this.getCurrency();
  }

  getContinent(){
    const endPoint = "continent";
    this.http.getData(endPoint).subscribe((resp:any)=>{
      this.continentList = resp;
      console.log(this.continentList);
    })
  }

  getCurrency(){
    const endPoint = "currency";
    this.http.getData(endPoint).subscribe((resp:any)=>{
      this.currencyList = resp;
      console.log(this.currencyList);
    })
  }

  ngAfterViewInit() {
    console.log("Close Btn", this.closeBtn.nativeElement.click());
  }

  closePopup() {
    if (this.closeBtn && this.closeBtn.nativeElement) {
      this.closeBtn.nativeElement.click();
    }
  }
}
