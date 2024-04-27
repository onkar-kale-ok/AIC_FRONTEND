import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {

  userPageId: any | null = null;

  pageList: any[] = [];

  filteredUser: any[] = [];

  constructor(private actRoute: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.userPageId = params.get('page_id');
      this.getPageName();
    });
  }

  // getPageName() {
  //   const endPoint = "getAllPages";
  //   this.http.getData(endPoint).subscribe(
  //     (resp: any) => {
  //       this.pageList = resp || [];
  //       this.filteredUser = this.pageList.filter((user: any) => user['Page ID'] == this.userPageId);
  //     }
  //   );
  // }

  getPageName() {
    const endPoint = "getPageData?pageId=" + this.userPageId;
    this.http.getData(endPoint).subscribe(
      (resp: any) => {
        this.pageList = resp;
        // console.log('getPageResp',this.pageList);
      }
    );
  }

}