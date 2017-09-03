/**
 * Model class that represents the name and
 * won round for an user on an on-going match.
 */
export class CurrentPlayer {
  private _name: string;
  private _wonRounds = 0;

  /**
   * Gets the name of the player.
   */
  get Name(): string {
    return this._name;
  }
  /**
   * Sets the name of the player.
   */
  set Name(name: string){
    this._name = name;
  }

  /**
   * Gets the amount of rounds won by the player.
   */
  get WonRounds(): number{
    return this._wonRounds;
  }
  /**
   * Sets the amount of rounds won by the player.
   */
  set WonRounds(wonRounds: number) {
    this._wonRounds = wonRounds;
  }

  /**
   * Creates a new instance of a player.
   */
  constructor() { }
}
