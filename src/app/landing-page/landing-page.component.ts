import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import { HttpService } from '../services/http.service';

const persons = [
  {
    name: 'Oli Bob',
    location: 'United Kingdom',
    gender: 'male',
    col: 'red',
    dob: '14/04/1984',
    _children: [
      {
        name: 'Mary May',
        location: 'Germany',
        gender: 'female',
        col: 'blue',
        dob: '14/05/1982',
        minus: '',
      },
      {
        name: 'Christine Lobowski',
        location: 'France',
        gender: 'female',
        col: 'green',
        dob: '22/05/1982',
      },
      {
        name: 'Brendon Philips',
        location: 'USA',
        gender: 'male',
        col: 'orange',
        dob: '01/08/1980',
        _children: [
          {
            name: 'Margret Marmajuke',
            location: 'Canada',
            gender: 'female',
            col: 'yellow',
            dob: '31/01/1999',
            minus: '',
          },
          {
            name: 'Frank Harbours',
            location: 'Russia',
            gender: 'male',
            col: 'red',
            dob: '12/05/1966',
            minus: '',
          },
        ],
      },
    ],
  },
  {
    name: 'Jamie Newhart',
    location: 'India',
    gender: 'male',
    col: 'green',
    dob: '14/05/1985',
  },
  {
    name: 'Gemma Jane',
    location: 'China',
    gender: 'female',
    col: 'red',
    dob: '22/05/1982',
    _children: [
      {
        name: 'Emily Sykes',
        location: 'South Korea',
        gender: 'female',
        col: 'maroon',
        dob: '11/11/1970',
        minus: '',
      },
    ],
  },
  {
    name: 'James Newman',
    location: 'Japan',
    gender: 'male',
    col: 'red',
    dob: '22/03/1998',
  },
];

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  userPageId: any | null = null;
  pageList: any[] = [];
  exTable: any;
  filterParam: string = '';
  tab = document.createElement('div');

  table_def = [
    // { title: 'Name', field: 'name' }, //never hide this column
    { title: 'Row ID', field: 'Row ID' },
    { title: 'Page Name', field: 'Page Name' }, //hide this column first
    { title: 'Page Type', field: 'Page Type' },
    { title: 'Page Edition', field: 'Page Edition' },
    { title: 'Page Owner', field: 'Page Owner' },
    { title: 'Page URL', field: 'Page URL' },
    { title: 'Page SEO', field: 'Page SEO' },
    { title: 'Page Status', field: 'Page Status' },
    { title: 'Page Comment', field: 'Page Comment ' },
    { title: 'Row Type', field: 'Row Type' },
    { title: 'Row Status', field: 'Row Status' },
    { title: 'Page ID', field: 'Page ID' },
  ];

  constructor(private actRoute: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.userPageId = params.get('page_id');
      this.getPageName();
    });

    // Initialize Tabulator
    this.exTable = new Tabulator(this.tab, {
      height: 'fit',
      layout: 'fitColumns',
      columns: this.table_def,
      movableColumns: false,
      dataTree: true,
      dataTreeChildField: '_children',
      dataTreeFilter: false,
      dataTreeSort: false,
      // dataTreeCollapseElement: "<i class='fas fa-minus-square'></i>",
      dataTreeElementColumn: 'Page Name',
    });

    // Append the table to the DOM
    document.getElementById('product-details')?.appendChild(this.tab);
  }

  ngAfterViewInit() {
    // this.exTable?.setData(this.pageList);
    // No need to call setData here as it will be called after fetching data;
  }

  getPageName() {
    const endPoint = "getPageData?pageId=" + this.userPageId;
    this.http.getData(endPoint).subscribe(
      (resp: any) => {
        // Assuming resp is an array of objects similar to the `persons` array
        this.pageList = resp;
        // Update Tabulator data with fetched data
        this.exTable?.setData(this.pageList);
      },
      (error: any) => {
        console.error("Error fetching page data:", error);
      }
    );
  }
}
