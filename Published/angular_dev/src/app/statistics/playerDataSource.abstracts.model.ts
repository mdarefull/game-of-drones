import { OpaqueToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PlayerInfo } from './playerInfo.model';

/**
 * Used to allow SOLID and Angular's DI.
 */
export const PlayerDataSource_TKN = new OpaqueToken('IPlayerDataSource')

/**
 * Represents the data access to the player's web services.
 */
export interface IPlayerDataSource {

  /**
   * Retrieve the list of all the players from the data source.
   */
  getAll(): Observable<PlayerInfo[]>;

  /**
   * Register a new win on the data source.
   */
  registerWin(name: string): Observable<PlayerInfo>;
}
