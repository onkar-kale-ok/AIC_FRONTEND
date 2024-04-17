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
    if (!this.dataRecieved) {
      // If this.dataRecieved is undefined, push a default tab
      this.tabBarList.push({ name: "New Tab", id: null });
      return; // Exit the function early
    }
  
    // Check if the default tab exists and remove it
    const defaultTabIndex = this.tabBarList.findIndex((tab:any) => tab.name == "New Tab" && tab.id == null);
    if (defaultTabIndex != -1) {
      this.tabBarList.splice(defaultTabIndex, 1);
    }
  
    // Add the tab based on received data
    this.tabValue = { name: this.dataRecieved.page_name, id: this.dataRecieved.page_id };
    const existingTab = this.tabBarList.find((tab: any) => tab.name == this.tabValue.name);
    if (!existingTab) {
      this.tabBarList.push(this.tabValue);
    }
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

}