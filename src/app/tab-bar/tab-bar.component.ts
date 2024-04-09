import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.css']
})
export class TabBarComponent {

  tabForm! : FormGroup;

  tabBarList : any;

  res : any;

  tabLength : any;

  emptyTabBar : boolean = false;

  tabValue : string = ""

  tabObj : NewTabFn = new NewTabFn();

  constructor(private http : HttpService, private fb : FormBuilder, private router: Router){

  }

  ngOnInit(){
    this.form();
    this.getTab();
  }


  form(){
    this.tabForm = this.fb.group({
      newTabBar : ['Tab', []]
    })
  }

  save(){
    // const endPoint = "tabs";
    // this.http.postData(endPoint, this.tabForm.value).subscribe((resp:any)=>{
    //   console.log('formData', resp);
    //   this.tabBarList.push(resp);
    // })
    this.tabValue = "New Tab"
    this.tabBarList.push(this.tabValue);
    this.router.navigate(['/tree-grid-bbb'])
  }

  getTab(){
    const endPoint = "tabs";
    this.http.getData(endPoint).subscribe((resp:any)=>{
      this.tabBarList = resp;
      console.log(this.tabBarList);
      this.res = Math.max.apply(Math, resp.map(function(o:any) { return o.id }));
      console.log('max',this.res);
      this.tabLength = resp.length
    })
  }

  deleteTab(index : number, itemObj : any){
    const endPoint = "tabs/" + itemObj.id;
    this.http.deleteData(endPoint).subscribe((resp:any)=>{
      // if(resp.length == null){
      //   this.emptyTabBar = true;
      // }else{
        this.tabBarList.splice(index,1);
      // }
    })
  }
}

export class NewTabFn {
  tabName! : 'Tab'
}