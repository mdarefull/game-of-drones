import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CurrentPlayer } from './models/currentPlayer.model';
import { ICurrentPlayersServices, CurrentPlayersServices_TKN } from './models/currentPlayers.abstracts.service';
import { CurrentPlayersServices } from './models/currentPlayers.service';
import { MatchComponent } from './match/match.component';
import { ResultComponent } from './match/result.component';
import { StartPageComponent } from './startPage/startPage.component';

/**
 * Angular's featur module for the core components.
 */
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule],
  declarations: [StartPageComponent, MatchComponent, ResultComponent],
  exports: [StartPageComponent, MatchComponent, ResultComponent],
  providers: [
    { provide: CurrentPlayersServices_TKN, useClass: CurrentPlayersServices }
  ],
})
export class CoreModule { }
