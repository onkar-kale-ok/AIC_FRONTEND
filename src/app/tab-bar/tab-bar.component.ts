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
  tabBarList: string[] = [];
  res: any;
  tabLength: any;

  @Input() dataRecieved: any;

  constructor(private http: HttpService, private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.getTab();
    this.form();
  }

  form() {
    this.tabForm = this.fb.group({
      newTabBar: ['Tab', []]
    })
  }

  save() {
    const endPoint = "tabs";
    this.tabValue = this.dataRecieved;
    if (this.tabValue == undefined) {
      this.tabValue = "New Tab"
    }
    console.log('tabValue', this.tabValue)
    this.tabBarList.push(this.tabValue);
    console.log('tabBarList', this.tabBarList)
  }

  pageClick(pageName: any) {
    console.log('pagenName', pageName);
    this.router.navigate([`${pageName}`]);
  }

  getTab() {
    const endPoint = "tabs";
    this.http.getData(endPoint).subscribe((resp: any) => {
      this.tabBarList = resp;
      console.log(this.tabBarList);
      this.res = Math.max.apply(Math, resp.map(function (o: any) { return o.id }));
      console.log('max', this.res);
      this.tabLength = resp.length
    })
  }

  deleteTab(index: any) {
    this.tabBarList.splice(index, 1)
  }

}