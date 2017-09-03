import { Component, Inject } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CurrentPlayer } from '../models/currentPlayer.model';
import { ICurrentPlayersServices, CurrentPlayersServices_TKN } from '../models/currentPlayers.abstracts.service';
import { RoutesNames } from '../../startup/routesNames';

/**
 * Represents the start page of our application.
 */
@Component({
  templateUrl: 'startPage.component.html',
})
export class StartPageComponent {
  /**
   * Specifies the statistics page route link.
   */
  readonly StatisticsRouterLink = `/${RoutesNames.StatisticsPage}`;
  /**
   * Specify wether the form has been submitted or not.
   */
  submitted: boolean;

  constructor( @Inject(CurrentPlayersServices_TKN) private _playersServices: ICurrentPlayersServices,
    private _router: Router) {

    this._router.events.subscribe(
      (event: Event) => {
        if (event instanceof NavigationEnd && event.urlAfterRedirects === `/${RoutesNames.StartPage}`) {
          this.restart();
        }
      });
  }

  /**
   * Gets the First player.
   */
  get Player1(): CurrentPlayer {
    return this._playersServices.Player1;
  }
  /**
   * Gets the Second player.
   */
  get Player2(): CurrentPlayer {
    return this._playersServices.Player2;
  }
  /**
   * Convenience property to know whether both names have been entered the same.
   */
  get HaveSameNames(): boolean {
    return this.Player1.Name != null
      && this.Player1.Name !== ''
      && this.Player1.Name === this.Player2.Name;
  }

  /**
   * Validates the entered player's information and, if valid, redirect to the match component.
   * @param form The template's form.
   */
  submit(form: NgForm) {
    this.submitted = true;
    if (!form.valid || this.HaveSameNames) {
      return;
    }

    this._router.navigateByUrl(`/${RoutesNames.MatchPage}`);
  }

  /**
   * Used to restart the component to an initial state.
   */
  restart() {
    this.submitted = false;
    this._playersServices.reset();

    // [TODO] I don't like this:
    const form = document.getElementById('startPageForm') as HTMLFormElement;
    form.reset();
  }
}
