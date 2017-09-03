import { Injectable } from '@angular/core';
import { CurrentPlayer } from './currentPlayer.model';
import { ICurrentPlayersServices } from './currentPlayers.abstracts.service';

/**
 * Basic implementation of the defined services for the Current Player model.
 */
@Injectable()
export class CurrentPlayersServices implements ICurrentPlayersServices {
  private _player1: CurrentPlayer;
  private _player2: CurrentPlayer;

  /**
   * Creates a new instance of CurrentPlayersServices.
   */
  constructor() {
    this.reset();
  }

  /**
   * Gets the Player1.
   */
  get Player1(): CurrentPlayer {
    return this._player1;
  };
  /**
   * Gets the Player2.
   */
  get Player2(): CurrentPlayer {
    return this._player2;
  }

  /**
   * Restar the models by creating new instances of them,
   * withouth a name and with 0 wins.
   */
  reset(): void {
    this._player1 = new CurrentPlayer();
    this._player2 = new CurrentPlayer();
  }
}
