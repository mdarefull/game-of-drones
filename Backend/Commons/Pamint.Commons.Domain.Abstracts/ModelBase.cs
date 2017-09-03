using System;

namespace Pamint.Commons.Domain
{
    public abstract class ModelBase<TKey> : IEquatable<ModelBase<TKey>>
    {
        public virtual TKey Id { get; set; }

        
        #region Equals
        protected abstract bool AreEquals(ModelBase<TKey> other);
        public bool Equals(ModelBase<TKey> other)
            => other != null
            && Id.Equals(other.Id)
            && AreEquals(other);
        public override bool Equals(object obj)
            => Equals(obj as ModelBase<TKey>);
        public override int GetHashCode()
            => Id.GetHashCode();
        #endregion
    }
}