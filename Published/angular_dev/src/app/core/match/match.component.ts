import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CurrentPlayer } from '../models/currentPlayer.model';
import { ICurrentPlayersServices, CurrentPlayersServices_TKN } from '../models/currentPlayers.abstracts.service';
import { PlayerMove } from './playerMove.model';
import { PossibleMoves } from './possibleMoves.model';
import { RoutesNames } from '../../startup/routesNames';

/**
 * Represents the match component of our application.
 */
@Component({
  templateUrl: 'match.component.html'
})
export class MatchComponent implements OnInit {
  /**
   * Specifies wether the form has been submitted or not.
   */
  submitted: boolean;
  /**
   * Specifies wether the player has selected a move or not.
   */
  invalid: boolean;
  /**
   * Specifies the current round number.
   */
  roundNumber: number;
  /**
   * Specifies the current turn number within the round.
   */
  turnNumber: number;
  /**
   * Represents the current turn's move for the player 1.
   */
  player1Move: PlayerMove;
  /**
   * Represents the current turn's move for the player 1.
   */
  player2Move: PlayerMove;
  /**
   * Represents the result of the previous rounds by storing the name of the winner or [TIE] in case of a tie.
   */
  roundsScores: Array<string>;
  /**
   * Represents the list of possible moves to perform by a player.
   */
  possibleMoves = [
    PossibleMoves[PossibleMoves.Rock],
    PossibleMoves[PossibleMoves.Paper],
    PossibleMoves[PossibleMoves.Scissors]
  ];

  constructor( @Inject(CurrentPlayersServices_TKN) private _playersServices: ICurrentPlayersServices,
    private _router: Router) { }
  ngOnInit(): void {
    this.reset();
  }

  /**
   * Process the move selected by the player and, if necessary, proclames a winer.
   */
  submit(form: NgForm) {
    this.submitted = true;

    // [TODO] I don't like this approach
    const element = document.getElementById('currentPlayerMove') as HTMLSelectElement;
    const value = element.value;

    this.invalid = value == null || value === '';
    if (this.invalid) {
      return;
    }

    if (this.turnNumber === 1) {
      this.player1Move.Move = PossibleMoves[value];
      this.setNextTurn();
    } else {
      this.player2Move.Move = PossibleMoves[value];
      this.processRound();
    }

    this.submitted = false;
    this.resetForm();
  }
  private setNextTurn() {
    this.turnNumber++;
  }
  private processRound() {
    const winner = this.calculateRoundWinner();
    if (winner == null) {
      this.roundsScores.push('[TIE]');
    } else {
      this.roundsScores.push(winner.Name);

      winner.WonRounds++;
      if (winner.WonRounds === 3) {
        this._router.navigateByUrl(`/${RoutesNames.ResultsPage}`);
      }
    }

    this.roundNumber++;
    this.resetTurn();
  }
  private calculateRoundWinner(): CurrentPlayer {

    if (this.player1Move.Move === this.player2Move.Move) {
      return null;
    }

    const winByRock = this.player1Move.Move === PossibleMoves.Rock && this.player2Move.Move === PossibleMoves.Scissors;
    const winByPaper = this.player1Move.Move === PossibleMoves.Paper && this.player2Move.Move === PossibleMoves.Rock;
    const winByScissors = this.player1Move.Move === PossibleMoves.Scissors && this.player2Move.Move === PossibleMoves.Paper;

    return (winByRock || winByPaper || winByScissors) ? this.player1Move.Player : this.player2Move.Player;
  }

  private reset() {
    this.roundNumber = 1;
    this.roundsScores = new Array<string>();

    this.resetTurn();
  }
  private resetTurn() {
    this.turnNumber = 1;

    this.player1Move = new PlayerMove(this._playersServices.Player1, null);
    this.player2Move = new PlayerMove(this._playersServices.Player2, null);

    this.resetForm();
  }
  private resetForm() {
    // [TODO] I don't like this:
    const form = document.getElementById('matchForm') as HTMLFormElement;
    form.reset();
  }
}
