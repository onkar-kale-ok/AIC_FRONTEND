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
    this.getPages();
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

  pageClick(name: string) {
    if (name != "New Tab") {
      this.closePopup();
      console.log('nameValue', name);
      this.router.navigate([`${name}`]);
      this.parentMsg = name;
      // this.tabList.push('Tab');
    }
    // if (name == "New Tab") {
    //   console.log('VerifyNewTab', name)

    //   this.router.navigate(['/tree-grid-ccc']);
    //   this.parentMsg = name;
    //   console.log('tabNot', this.parentMsg)
    // }
  }

  getPages() {
    const endPoint = "pages";
    this.http.getData(endPoint).subscribe((resp: any) => {
      this.pageList = resp;
      console.log('pageList', this.pageList)
    })
  }
}