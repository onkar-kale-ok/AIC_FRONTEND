import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() sendData: EventEmitter<any> = new EventEmitter<any>();
  // pageObj: any;

  // sendDataFn(){
  //   this.sendData.emit(this.pageObj);
  // }

  constructor(private http: HttpService, private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.getTab();
    this.form();
    
    //By default or after refresh it send to root url
    this.router.navigate(['/']);
    //By default or after refresh it send to root url
  }

  ngOnChanges() {
    if (this.dataRecieved) {
      this.addTabOnPageClick();
    }
  }


  form() {
    this.tabForm = this.fb.group({
      newTabBar: ['Tab', []]
    })
  }

  addTab() {
    this.tabBarList.push({ name: "New Tab", id: null });
    this.router.navigate(['/']);
  }

  addTabOnPageClick() {
    this.tabValue = { name: this.dataRecieved['Page Name'], id: this.dataRecieved['Page ID'] };
    // console.log('tabValue', this.tabValue);

    // Check if the tabValue already exists in tabBarList
    const existingTab = this.tabBarList.find((tab: any) => tab.name === this.tabValue.name && tab.id === this.tabValue.id);

    // If tabValue already exists, exit the function
    if (existingTab) {
      return;
      // console.log('1st');
    }

    // If not, proceed with adding the tabValue
    const existingTabIndex = this.tabBarList.findIndex((tab: any) => tab.name === "New Tab" && tab.id == null);
    if (existingTabIndex !== -1 && !existingTab) {
      this.tabBarList.splice(existingTabIndex, 1, this.tabValue);
      // console.log('2nd');
    }
    // const existingTab = this.tabBarList.find((tab: any) => tab.name == this.tabValue.name);
    else {
      this.tabBarList.push(this.tabValue);
      // console.log('3rd');
    }
  }

  deleteTab(index: any) {
    this.tabBarList.splice(index, 1);
    this.router.navigate(['/']);
    // console.log('Tab When Deleted', this.tabBarList.length);
  }

  tabClick(page: any) {
    this.sendData.emit(page);
    if (page && page.id) {
      // console.log('pageName', page.name, page.id);
      this.router.navigate([page.name.replace(" ", "-"), page.id]);
    } else if (page && page.name == "New Tab" || "Default Tab") {
      this.router.navigate(['/']);
    }
  }

  getTab() {
    this.tabBarList = [
      { name: "New Tab", id: null }
    ]
  }

}