import { CurrentPlayer } from '../models/currentPlayer.model';
import { PossibleMoves } from './possibleMoves.model';

/**
 * Represents a move performed by a Player.
 */
export class PlayerMove {
  constructor(private _player: CurrentPlayer, private _move?: PossibleMoves) {};

  /**
   * Gets the player that performed the move.
   */
  get Player(): CurrentPlayer {
    return this._player;
  }

  /**
   * Gets/Sets the move performed.
   */
  get Move(): PossibleMoves {
    return this._move;
  }
  set Move(move: PossibleMoves) {
    this._move = move;
  }
}
