import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { HttpService } from '../services/http.service';
import { AfterLoginServiceService } from '../services/after-login-service.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  continentList : string [] = [];

  currencyList : string [] = [];

  userLoggedIn : boolean = true;

  @ViewChild('closeBtn') closeBtn! : ElementRef<any>;

  @Output() emitAction = new EventEmitter<any>();

  constructor(private http: HttpService, private afterLogin: AfterLoginServiceService){

  }

  ngOnInit(){
    this.getContinent();
    this.getCurrency();
    this.user();
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

  user(){
    if(this.afterLogin.getUser()){
      this.userLoggedIn = false
    }
    else{
      this.userLoggedIn = true;
    }
  }

  logout(){
    localStorage.clear();
  }
}
