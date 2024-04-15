import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { HttpService } from '../services/http.service';
import { AfterLoginServiceService } from '../services/after-login-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  title = 'Tab';

  pageList: any;

  pageNames : any;

  userPageId : any;

  parentMsg!: string;

  inputForm!: FormGroup;

  key: string = '';

  tabList: any;

  continentList: string[] = [];

  currencyList: string[] = [];

  userLoggedIn: boolean = true;

  @ViewChild('closeBtn') closeBtn: ElementRef<any>;

  constructor(private http: HttpService, private afterLogin: AfterLoginServiceService, private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.getContinent();
    this.getCurrency();
    this.user();
    this.getPageName();
    this.getTab();

    this.inputForm = this.fb.group({
      keySearched: ['', []]
    })
  }

  getContinent() {
    const endPoint = "continent";
    this.http.getData(endPoint).subscribe((resp: any) => {
      this.continentList = resp;
      console.log(this.continentList);
    })
  }

  getCurrency() {
    const endPoint = "currency";
    this.http.getData(endPoint).subscribe((resp: any) => {
      this.currencyList = resp;
      console.log(this.currencyList);
    })
  }

  closePopup() {
    if (this.closeBtn && this.closeBtn.nativeElement) {
      this.closeBtn.nativeElement.click();
    }
  }

  user() {
    if (this.afterLogin.getUser()) {
      this.userLoggedIn = false
    }
    else {
      this.userLoggedIn = true;
    }
  }

  logout() {
    localStorage.clear();
  }

  getTab() {
    const endPoint = "tabs";
    this.http.getData(endPoint).subscribe((resp: any) => {
      this.tabList = resp;
      console.log('tabList', this.tabList)
    })
  }

  async pageClick(pageId: number) {
    const endPoint = "pages";
    console.log('pageId', pageId)

  }

  getPageName() {
    const endPoint = "pages";
    this.http.getData(endPoint).subscribe((resp: any) => {
      this.pageList = resp.users;
      console.log('pageList', this.pageList);
    })
  }
  
}