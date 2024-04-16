import { Component, Input } from '@angular/core';
import { HttpService } from '../services/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent {

  tabForm!: FormGroup;

  tabValue: string = "";
  tabBarList: any ;
  res: any;
  tabLength: number = 1;
  lastElement: any;
  indexOfLastElement: any;

  @Input() dataRecieved: any;

  constructor(private http: HttpService, private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.getTab();
    this.form();
  }

  ngOnChanges() {
    this.addTab();
  }

  form() {
    this.tabForm = this.fb.group({
      newTabBar: ['Tab', []]
    })
  }

  addTab() {
    this.tabValue = this.dataRecieved;
    if (this.tabValue == undefined) {
      this.tabValue = "New Tab";
    }
    if (this.tabValue != undefined) {
      if (this.tabBarList.includes(this.tabValue)) {
        if (!(this.tabBarList.includes("New Tab"))) {
          this.tabBarList.push("New Tab");
          this.router.navigate(['/'])
        }
      }
      else {
        // this.tabBarList.push(this.tabValue);
        const newTabIndex = this.tabBarList.indexOf("New Tab");
        if (newTabIndex !== -1) {

          this.tabBarList[newTabIndex] = this.tabValue;
        } else {

          this.tabBarList.push(this.tabValue);
        }
      }
    }
  }

  deleteTab(index: any) {
    this.tabBarList.splice(index, 1);
    console.log('Tab When Deleted', this.tabBarList.length);
  }

  tabClick(pageName: any) {
    if (pageName) {
      console.log('pageName', pageName);
      this.router.navigate([`${pageName}`]);
    }
    if (pageName == "New Tab") {
      // This Is Default Tab If We Want To Keep Page Details Blank In "New Tab"
      this.router.navigate(['/']);
    }
  }

  getTab() {
    this.tabBarList = ["Default Tab"]
  }

}