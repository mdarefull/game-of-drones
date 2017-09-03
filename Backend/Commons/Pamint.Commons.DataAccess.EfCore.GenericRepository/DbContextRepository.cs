using Pamint.Commons.Domain;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Pamint.Commons.DataAccess.EfCore
{
    public class DbContextRepository<TModel, TKey> : IRepository<TModel, TKey> where TModel : ModelBase<TKey>
    {
        protected virtual DbContext DbContext { get; }
        protected virtual DbSet<TModel> DbSet { get; }
        #region Constructors
        public DbContextRepository(DbContext dbContext)
        {
            DbContext = dbContext;
            DbSet = dbContext.Set<TModel>();
        }
        #endregion

        #region Get
        public virtual TModel GetById(TKey id) => DbSet.Find(id);
        public virtual IQueryable<TModel> GetAll() => DbSet;
        #endregion

        #region Add
        public virtual TModel Add(TModel item) => DbSet.Add(item).Entity;
        public virtual TModel AddAtomic(TModel item)
        {
            item = Add(item);
            SaveChanges();
            return item;
        }
        #endregion

        #region Update
        /// <summary>
        /// Signal an update of the given item on the Db. The item is not effectively updated until a call to SaveChanges() is made.
        /// </summary>
        /// <param name="item">Item to Update</param>
        /// <returns>Updated item or null if the items does not exists.</returns>
        /// <remarks>
        /// The correct usage is to load the item first, update its properties and update it to the db later.
        /// At first this may seem a bad approach (tight coupled) and underperformant (2 queries), but it gives the user the biggest
        /// flexibility (update a subset of properties) and robustness by detecting unexistent items without exceptions.
        /// Also, this is the simpler implementation, allowing subclasses to extend (or completely hide) it.
        /// </remarks>
        public virtual TModel Update(TModel item)
        {
            var entry = DbContext.Entry(item);
            entry.State = EntityState.Modified;
            return entry.Entity;
        }
        /// <summary>
        /// Atomicly updates the given item on the Db.
        /// </summary>
        /// <param name="item">Item to Update</param>
        /// <returns>Updated item or null if the items does not exists.</returns>
        /// <remarks>This method simply calls Update(item) and then SaveChanges(). See Update(item) for remarks.</remarks>
        public virtual TModel UpdateAtomic(TModel item)
        {
            item = Update(item);
            SaveChanges();
            return item;
        }
        #endregion

        #region Remove
        public virtual TModel Remove(TKey id)
        {
            var item = DbSet.Find(id);
            if (item != null)
                DbSet.Remove(item);
            return item;
        }
        public virtual TModel RemoveAtomic(TKey id)
        {
            var item = Remove(id);
            SaveChanges();
            return item;
        }

        public virtual TModel Remove(TModel item) => DbSet.Remove(item).Entity;
        public virtual TModel RemoveAtomic(TModel item)
        {
            item = Remove(item);
            SaveChanges();
            return item;
        }
        #endregion

        #region SaveChanges
        public virtual void SaveChanges() => DbContext.SaveChanges();
        #endregion
    }
}