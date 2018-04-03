import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
@Component({
  selector: 'app-httptest',
  /*templateUrl: './httptest.component.html',
  styleUrls: ['./httptest.component.css']*/
  template: `
 <div class="row">
  <div class="m-t-1">
  	<button class="btn btn-primary" (click)="doGET()">GET</button>
  	<button class="btn btn-primary" (click)="doPOST()">POST</button>
  	<button class="btn btn-primary" (click)="doPUT()">PUT</button>
  	<button class="btn btn-primary" (click)="doDELETE()">DELETE</button>
	</div>
</div>

<div class="row">
  <div class="m-t-1">
  	<button class="btn btn-secondary" (click)="doGETAsPromise()">As Promise</button>
  	<button class="btn btn-secondary" (click)="doGETAsPromiseError()">Error as Promise</button>
  	<button class="btn btn-secondary" (click)="doGETAsObservableError()">Error as Observable</button>
	</div>
</div>

<div class="row">
  <div class="m-t-1">
  	<button class="btn btn-danger" (click)="doGETWithHeaders()">With Headers</button>
	</div>
</div>
 `
  
})
export class HttptestComponent implements OnInit {
  apiRoot: string = "http://httpbin.org";
  contineoRoot: string= "https://115.112.92.146:48443/contineonx-web-admin/daouda-healthyme-api"
  constructor(private http: Http) { }

  ngOnInit() {
  }
  doGET() {
    console.log("GET");
  let url = `${this.contineoRoot}/hospitals`;
  this.http.get(url).subscribe(res => console.log(res.text())); 
  }

  doPOST() {
    console.log("POST");
  }

  doPUT() {
    console.log("PUT");
  }

  doDELETE() {
    console.log("DELETE");
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
  }

}
