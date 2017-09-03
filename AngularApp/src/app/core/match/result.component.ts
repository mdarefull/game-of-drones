import { Component, Inject } from '@angular/core';

import { CurrentPlayer } from '../models/currentPlayer.model';
import { ICurrentPlayersServices, CurrentPlayersServices_TKN } from '../models/currentPlayers.abstracts.service';
import { RoutesNames } from '../../startup/routesNames';

/**
 * Represents the result page of a finished match.
 */
@Component({
  templateUrl: 'result.component.html'
})
export class ResultComponent {
  /**
   * Specifies the start page route link.
   */
  readonly StartPageRouterLink = `/${RoutesNames.StartPage}`;

  constructor( @Inject(CurrentPlayersServices_TKN) private _playersServices: ICurrentPlayersServices) {
    this._playersServices.Player1.Name = 'Robert';
    this._playersServices.Player2.Name = 'Alex';

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
