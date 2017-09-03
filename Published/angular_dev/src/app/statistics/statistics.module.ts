import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PlayerDataSource_TKN } from './playerDataSource.abstracts.model';
import { PlayerRestClient } from './playerDataSource.model';
import { StatisticsComponent } from './statistics.component';
import { WebServiceConfig } from './webService.config';

/**
 * Angular's feature module for the statistics components.
 */
@NgModule({
  imports: [BrowserModule, RouterModule, HttpModule],
  declarations: [StatisticsComponent],
  exports: [StatisticsComponent],
  providers: [ WebServiceConfig,
    { provide: PlayerDataSource_TKN, useClass: PlayerRestClient }
  ]
})
export class StatisticsModule { }
