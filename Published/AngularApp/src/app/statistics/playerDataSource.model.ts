import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PlayerInfo } from './playerInfo.model';
import { IPlayerDataSource } from './playerDataSource.abstracts.model';
import { WebServiceConfig } from './webService.config';

/**
 * Rest client implementation of the player data source.
 */
@Injectable()
export class PlayerRestClient implements IPlayerDataSource {
  private _baseUrl: string;

  constructor(private http: Http, webServiceConfig: WebServiceConfig) {
    this._baseUrl = `${webServiceConfig.PROTOCOL}://${location.hostname}:${webServiceConfig.PORT}/api/`
  }

  /**
   * Retrieve the list of all the players from the data source.
   */
  getAll(): Observable<PlayerInfo[]> {
    return this.sendRequest(RequestMethod.Get, 'PlayersStatistics');
  }

  /**
   * Register a new win on the data source.
   */
  registerWin(name: string): Observable<PlayerInfo> {
    return this.sendRequest(RequestMethod.Post, `PlayersStatistics?name=${name}`);
  }

  private sendRequest(verb: RequestMethod, url: string) {

    const request = new Request({
      method: verb,
      url: this._baseUrl + url,
    });
    return this.http.request(request).map(response => {
        const data = response.json();
        return data;
      });
  }
}
