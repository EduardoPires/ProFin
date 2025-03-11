using ProFin.Core.Models;

namespace ProFin.Core.Interfaces.Repositories
{
    public interface IBudgetRepository : IRepository<Budget>
    {
        Task<Budget> ExistsByUserAndCategory(Guid userId, Guid categoryFinancialTransactionId);
        Task<Budget> GetByCategoryId(Guid categoryId);
    }
}
