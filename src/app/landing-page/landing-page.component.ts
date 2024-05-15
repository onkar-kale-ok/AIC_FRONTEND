import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import { HttpService } from '../services/http.service';
import { TabulatorService } from '../services/tabulator.service';

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

  sortButtonsEnabled: boolean = false;

  table_def = [
    { title: 'Row ID', field: 'Row ID', headerSort: this.sortButtonsEnabled },
    { title: 'Page Name', field: 'Page Name', headerSort: this.sortButtonsEnabled },
    { title: 'Page Type', field: 'Page Type', headerSort: this.sortButtonsEnabled },
    { title: 'Page Edition', field: 'Page Edition', headerSort: this.sortButtonsEnabled },
    { title: 'Page Owner', field: 'Page Owner', headerSort: this.sortButtonsEnabled },
    { title: 'Page URL', field: 'Page URL', headerSort: this.sortButtonsEnabled },
    { title: 'Page SEO', field: 'Page SEO', headerSort: this.sortButtonsEnabled },
    { title: 'Page Status', field: 'Page Status', headerSort: this.sortButtonsEnabled },
    { title: 'Page Comment', field: 'Page Comment ', headerSort: this.sortButtonsEnabled },
    { title: 'Row Type', field: 'Row Type', headerSort: this.sortButtonsEnabled },
    { title: 'Row Status', field: 'Row Status', headerSort: this.sortButtonsEnabled },
    { title: 'Page ID', field: 'Page ID', headerSort: this.sortButtonsEnabled },
  ];

  constructor(private actRoute: ActivatedRoute, private http: HttpService, private tabSrv: TabulatorService) { }

  ngOnInit() {
    // Other initialization code...

    // Subscribe to refresh events
    this.tabSrv.onRefresh().subscribe(() => {
      this.refreshTabulatorData();
    });

    this.tabSrv.onSort().subscribe(() => {
      this.toggleSortButton();
    });

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

  refreshTabulatorData() {
    //Used pop to check whether data removes or not
    this.pageList.pop();
    //Used pop to check whether data removes or not
    this.exTable?.setData(this.pageList);
  }

  toggleSortButton() {
    this.sortButtonsEnabled = !this.sortButtonsEnabled;
    this.table_def.forEach(column => {
      column.headerSort = this.sortButtonsEnabled;
    });
    this.exTable?.setColumns(this.table_def);
  }
}