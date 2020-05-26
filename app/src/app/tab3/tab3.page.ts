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
    let result = this.httpClient.get('http://192.168.1.169:3000/results/testId')
    .subscribe(data => {
      this.response = data;
      this.response = this.response.history;
    })
  }

}
