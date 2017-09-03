import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StatisticsComponent } from './statistics.component';

/**
 * Angular's feature module for the statistics components.
 */
@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [StatisticsComponent],
})
export class StatisticsModule { }
