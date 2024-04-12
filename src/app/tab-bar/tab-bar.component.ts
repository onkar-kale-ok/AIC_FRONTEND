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
  tabLength: number = 1;
  lastElement : any;
  indexOfLastElement : any;

  @Input() dataRecieved: any;

  constructor(private http: HttpService, private fb: FormBuilder, private router: Router) {

  }

  ngOnInit() {
    this.getTab();
    this.form();
  }

  ngOnChanges(){
    this.addTab();
  }

  form() {
    this.tabForm = this.fb.group({
      newTabBar: ['Tab', []]
    })
  }

  addTab() {
    // const endPoint = "tabs";
    this.tabValue = this.dataRecieved;
    if (this.tabValue == undefined) {
      this.tabValue = "New Tab";
      // this.router.navigate(['/'])
    }
    // if(this.tabValue = "New Tab"){
    //   this.tabBarList.splice(this.indexOfLastElement,1, this.tabValue);
    //   console.log('lastElVal',this.indexOfLastElement);
    //   console.log('lastEl',this.lastElement);
    // }
    if (this.tabValue != undefined) {
      if(this.tabBarList.includes(this.tabValue)){
        if(!(this.tabBarList.includes("New Tab"))){
          this.tabBarList.push("New Tab");
          this.router.navigate(['/'])
        }
      }
      else{
        this.tabBarList.push(this.tabValue);
      }
    }
    // if(this.lastElement = this.tabBarList[this.tabBarList.length-1] || "Default Tab"){
    //   this.indexOfLastElement = this.tabBarList.indexOf(this.lastElement);
    //   console.log('lastElVal',this.indexOfLastElement);
    //   console.log('lastEl',this.lastElement);
    //   if(this.lastElement == 'Default Tab' ){
    //     this.tabBarList.splice(this.lastElement,1,this.tabValue);
    //   }
    // }
  }

  deleteTab(index: any) {
    this.tabBarList.splice(index, 1);
    console.log('Tab When Deleted', this.tabBarList.length);
  }

  pageClick(pageName: any) {
    if(pageName){
      console.log('pageName', pageName);
      this.router.navigate([`${pageName}`]);
    }
    if(pageName == "New Tab"){
      // This Is Default Tab If We Want To Keep Page Details Blank In "New Tab"
      this.router.navigate(['/']);
    }
  }

  getTab() {
    const endPoint = "tabs";
    this.http.getData(endPoint).subscribe((resp: any) => {
      this.tabBarList = resp;
      // console.log(this.tabBarList);
      // this.res = Math.max.apply(Math, resp.map(function (o: any) { return o.id }));
      // console.log('max', this.res);
      // this.tabLength = resp.length
    })
  }

}