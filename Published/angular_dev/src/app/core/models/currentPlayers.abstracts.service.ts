import { OpaqueToken } from '@angular/core';
import { CurrentPlayer } from './currentPlayer.model';

/**
 * Used to allow SOLID and Angular's DI.
 */
export const CurrentPlayersServices_TKN = new OpaqueToken('ICurrentPlayersServices')

/**
 * Defines the set of services defined over the Current Player model.
 */
export interface ICurrentPlayersServices {
  /**
   * Gets the Player1.
   */
  Player1: CurrentPlayer;
  /**
   * Gets the Player2.
   */
  Player2: CurrentPlayer;

  /**
   * Restar the models by creating new instances of them,
   * withouth a name and with 0 wins.
   */
  reset(): void;
}
