import { Component, Inject, AfterViewInit } from '@angular/core';

import { CurrentPlayer } from '../models/currentPlayer.model';
import { ICurrentPlayersServices, CurrentPlayersServices_TKN } from '../models/currentPlayers.abstracts.service';
import { RoutesNames } from '../../startup/routesNames';
import { PlayerDataSource_TKN, IPlayerDataSource } from '../../statistics/playerDataSource.abstracts.model';
import { PlayerInfo } from '../../statistics/playerInfo.model';

/**
 * Represents the result page of a finished match.
 */
@Component({
  templateUrl: 'result.component.html'
})
export class ResultComponent implements AfterViewInit {
  /**
   * Specifies the start page route link.
   */
  readonly StartPageRouterLink = `/${RoutesNames.StartPage}`;

  constructor( @Inject(CurrentPlayersServices_TKN) private _playersServices: ICurrentPlayersServices,
    @Inject(PlayerDataSource_TKN) private _dataSource: IPlayerDataSource) {
  }

  ngAfterViewInit(): void {
    this._dataSource.registerWin(this.Winner.Name).subscribe();
  }

  /**
   * Gets the player with most rounds won.
   */
  get Winner() {
    return this._playersServices.Player1.WonRounds > this._playersServices.Player2.WonRounds
      ? this._playersServices.Player1
      : this._playersServices.Player2;
  }
}
