import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { QueryComponent } from '../query/query.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  
  constructor(public httpClient: HttpClient) { 
    
  }
  //response;
  response: any[];
  automaticClose = false;

  ionViewWillEnter() {
    this.httpClient.get('https://347ab8fd.ngrok.io/results/testId')
    .subscribe(data => {
      this.response = data['history'];
      if (this.response[0]) {
        this.response[0].open = false;
      }
    });
  }

  toggleSelection(index) {
    this.response[index].open = !this.response[index].open;
    if (this.automaticClose) {
      this.response
      .filter((item, itemIndex) => itemIndex != index)
      .map(item => item.open = false);
    }
  }
}
