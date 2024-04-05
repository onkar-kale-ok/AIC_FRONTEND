import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TabulatorFull as Tabulator } from 'tabulator-tables';

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
  exTable: any;
  filterParam: string = '';

  tab = document.createElement('div');

  table_def = [
    { title: 'Name', field: 'name' }, //never hide this column
    { title: 'Location', field: 'location' },
    { title: 'Gender', field: 'gender' }, //hide this column first
    { title: 'Favourite Color', field: 'col' },
    { title: 'Date Of Birth', field: 'dob' },
  ];
  constructor() {}

  ngOnInit() {
    this.exTable = new Tabulator(this.tab, {
      height: 220,
      layout: 'fitColumns',
      columns: this.table_def,
      movableColumns: false,
      data: persons,
      dataTree: true,
      dataTreeChildField: '_children',
      dataTreeFilter: false,
      dataTreeSort: false,
      //  dataTreeCollapseElement: "<i class='fas fa-minus-square'></i>",
      dataTreeElementColumn: 'name',
    });

    document.getElementById('product-details')?.appendChild(this.tab);
  }
  ngAfterViewInit() {
    this.exTable?.setData(persons);
  }
}
