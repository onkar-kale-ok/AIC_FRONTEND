import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {

  userPageId : any;

  constructor(private actRoute: ActivatedRoute){
    actRoute.snapshot.paramMap.get('page_id');
  }
}