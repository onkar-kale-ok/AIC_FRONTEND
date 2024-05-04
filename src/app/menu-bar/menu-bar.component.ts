import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { HttpService } from '../services/http.service';
import { AfterLoginServiceService } from '../services/after-login-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  title = 'Tab';

  pageList: any;

  pageNames: any;

  userPageId: any;

  parentMsg!: string;

  inputForm!: FormGroup;

  key: string = '';

  tabList: any;

  continentList: string[] = [];

  currencyList: string[] = [];

  userLoggedIn: boolean = true;

  checkBoxShow : boolean = true;

  @ViewChild('closeBtn') closeBtn: ElementRef<any>;

  constructor(private http: HttpService, private afterLogin: AfterLoginServiceService, private fb: FormBuilder, private router: Router, private Translate: TranslateService) {
    this.Translate.setDefaultLang('en')
  }

  switchLanguageToHindi(language:string){
    this.Translate.use(language);
    this.checkBoxShow = false;
  }

  switchLanguageToEnglish(language:string){
    this.Translate.use(language);
    this.checkBoxShow = true;
  }

  ngOnInit() {
    this.user();
    this.getPageName();

    this.inputForm = this.fb.group({
      keySearched: ['', []]
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

  async pageClick(page: any, pageName: any) {
    this.closePopup();
    this.parentMsg = page;
    // console.log('onPageClick', this.parentMsg);
  }

  getPageName() {
    const endPoint = "getAllPages";
    this.http.getData(endPoint).subscribe((resp: any) => {
      this.pageList = resp;
      // console.log('pageList', this.pageList);
    })
  }

}