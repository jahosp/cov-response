import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public httpClient: HttpClient) { 
    
  }
  response;

  ionViewWillEnter() {
    let result = this.httpClient.get('https://edd99d06.ngrok.io/')
    .subscribe(data => {
      this.response = data.history;
    })
  }

}
