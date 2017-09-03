using Pamint.Commons.Domain;
using System.Linq;

namespace Pamint.Commons.DataAccess
{
    public interface IRepository<T, TKey> where T : ModelBase<TKey>
    {
        T GetById(TKey id);
        IQueryable<T> GetAll();

        T Add(T item);
        T AddAtomic(T item);

        T Update(T item);
        T UpdateAtomic(T item);

        T Remove(TKey id);
        T RemoveAtomic(TKey id);

        T Remove(T item);
        T RemoveAtomic(T item);

        void SaveChanges();
    }
}