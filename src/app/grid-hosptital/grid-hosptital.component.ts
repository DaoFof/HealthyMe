import { Component, OnInit } from '@angular/core';
import { HospitalsService } from '../hospitals.service';
@Component({
  selector: 'app-grid-hosptital',
  /*templateUrl: './grid-hosptital.component.html',*/
  template: `
    <div class='container'>
      <h3>
        Bootstrap Theme
        <small>
          <a href="https://github.com/swimlane/ngx-datatable/blob/master/demo/basic/bootstrap.component.ts" target="_blank">
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        class="bootstrap"
        [rows]="rows"
        [loadingIndicator]="loadingIndicator"
        [columns]="columns"
        [columnMode]="'force'"
        [headerHeight]="40"
        [footerHeight]="40"
        [limit]="10"
        [rowHeight]="'auto'"
        [reorderable]="reorderable">
      </ngx-datatable>
    </div>
  `,
  styleUrls: ['./grid-hosptital.component.css']
})
export class GridHosptitalComponent implements OnInit {
  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  columns = [
    { prop: 'name' },
    { name: 'city' },
    { name: 'state'},
    { name: 'country' }
  ];
  /*columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];*/

  constructor(private hospitalsService : HospitalsService) {
    /*this.fetch((data) => {
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });*/
  }
  /*hospitals;*/

  /*fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `https://raw.githubusercontent.com/swimlane/ngx-datatable/master/assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }*/

  ngOnInit() {
    this.getHospitals();
  }
  async getHospitals(){
    this.rows = await this.hospitalsService.getHospitals();
  }
}
