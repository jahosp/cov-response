import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueryComponent } from './query.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [QueryComponent],
  exports: [QueryComponent]
})
export class QueryComponentModule {}
