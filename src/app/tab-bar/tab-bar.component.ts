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

  tabValue: any;
  tabBarList: any;
  res: any;
  tabLength: number = 1;
  lastElement: any;
  indexOfLastElement: any;
  pageList: any;

  @Input() dataRecieved: any;

  constructor(private http: HttpService, private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.getTab();
    this.form();
    // this.getPageName();
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
    console.log('tabBarList', this.tabBarList)
    if (this.dataRecieved.page_name && this.dataRecieved.page_id) {
      // Created new object with page_name and page_id
      this.tabValue = { name: this.dataRecieved.page_name, id: this.dataRecieved.page_id };
  
      // Checking if tab is already in the tabBarList[] array
      const existingTab = this.tabBarList.find((tab:any) => tab.name == this.tabValue.name);
  
      // If the tab is not already in the list, push it
      if (!existingTab) {
        this.tabBarList.push(this.tabValue);
      }
    } else {
      // If either name or id is undefined, push a New Tab
      this.tabBarList.push({ name: "New Tab", id: null });
    }


    // this.tabValue = this.dataRecieved.page_name;
    // if (this.tabValue == undefined) {
    //   this.tabValue = "New Tab";
    // }
    // if (this.tabValue != undefined) {
    //   if (this.tabBarList.includes(this.tabValue)) {
    //     if (!(this.tabBarList.includes("New Tab"))) {
    //       this.tabBarList.push("New Tab");
    //       this.router.navigate(['/'])
    //     }
    //   }
    //   else {
    //     // this.tabBarList.push(this.tabValue);
    //     const newTabIndex = this.tabBarList.indexOf("New Tab");
    //     if (newTabIndex !== -1) {

    //       this.tabBarList[newTabIndex] = this.tabValue;
    //     } else {

    //       this.tabBarList.push(this.tabValue);
    //     }
    //   }
    // }
  }
  

  deleteTab(index: any) {
    this.tabBarList.splice(index, 1);
    this.router.navigate(['/']);
    console.log('Tab When Deleted', this.tabBarList.length);
  }

  tabClick(page: any) {
    if (page && page.id) {
      console.log('pageName', page.name, page.id);
      this.router.navigate(['/pages', page.id]);
    } else if (page && page.name == "New Tab" || "Default Tab") {
      this.router.navigate(['/']);
    }
  }

  getTab() {
    this.tabBarList = [{ name: "Default Tab", id: null }]
  }

  // getPageName() {
  //   const endPoint = "pages";
  //   this.http.getData(endPoint).subscribe((resp: any) => {
  //     this.pageList = resp.users;
  //     // console.log('pageList', this.pageList);
  //   })
  // }

}