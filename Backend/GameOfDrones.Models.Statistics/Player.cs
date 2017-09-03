using Pamint.Commons.Domain;

namespace GameOfDrones.Models
{
    /// <summary>
    /// Represents a record of a player's games.
    /// </summary>
    public class Player : ModelBase<long>
    {
        /// <summary>
        /// Name of the player.
        /// </summary>
        public virtual string Name { get; set; }
        /// <summary>
        /// Amount of wins of the player.
        /// </summary>
        public virtual int Wins { get; set; }


        protected override bool AreEquals(ModelBase<long> other)
            => other is Player;
    }
}
