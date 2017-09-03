import { Component, AfterViewInit, Inject } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
declare var jquery: any;
declare var $: any;

import { PlayerInfo } from './playerInfo.model';
import { RoutesNames } from '../startup/routesNames';
import { PlayerDataSource_TKN, IPlayerDataSource } from './playerDataSource.abstracts.model';

/**
 * Represents the statistics page of the application
 */
@Component({
  templateUrl: 'statistics.component.html'
})
export class StatisticsComponent implements AfterViewInit {
  /**
   * Specifies the statistics page route link.
   */
  readonly StartPageRouterLink = `/${RoutesNames.StartPage}`;

  /**
   * Set of recorded players of the application.
   */
  playersRecord: Array<PlayerInfo>;

  loading = false;

  /**
   *
   */
  constructor(@Inject(PlayerDataSource_TKN) private _dataSource: IPlayerDataSource) {}
  /**
   * Used to apply the data table styles
   */
  ngAfterViewInit(): void {
    this.restart();
  }

  // [TODO] I don't like this approach.
  private restart() {
    this.loading = true;

    this._dataSource.getAll().subscribe(data => {
      this.playersRecord = data;

      setTimeout(() => {
        $('#dataTable').DataTable({ 'order': [[1, 'desc'], [0, 'asc']] }).draw();
        this.loading = false;

      }, 1000)
    });
  }
}
