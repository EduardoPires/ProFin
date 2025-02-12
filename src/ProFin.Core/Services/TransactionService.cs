﻿using ProFin.Core.Interfaces.Repositories;
using ProFin.Core.Interfaces.Services;
using ProFin.Core.Models;
using ProFin.Core.Models.Validations;

namespace ProFin.Core.Services
{
    public class TransactionService : BaseService, ITransactionService
    {
        private readonly ITransactionRepository _transactionRepository;
        private readonly ICategoryTransactionRepository _categoryTransactionRepository;

        public TransactionService(ITransactionRepository transactionRepository,
                                 ICategoryTransactionRepository categoryTransactionRepository,
                                 INotifier notifier) : base(notifier)
        {
            _transactionRepository = transactionRepository;
            _categoryTransactionRepository = categoryTransactionRepository;
        }

        public async Task Insert(Transaction transactionEntity)
        {
            if (!ExecuteValidation(new TransactionEntityValidation(), transactionEntity)) return;

            await _transactionRepository.Add(transactionEntity);
        }

        public async Task Update(Transaction transactionEntity)
        {
            if (!ExecuteValidation(new TransactionEntityValidation(), transactionEntity)) return;


            await _transactionRepository.Update(transactionEntity);
        }

        public async Task Delete(Guid id)
        {
            if (_transactionRepository.GetById(id).Result is Transaction entity && entity.CreatedDate != DateTime.MinValue)
                await _transactionRepository.Delete(entity);
            else
                Notifie("Registro não encontrado!");
        }

        public void Dispose()
        {
            _transactionRepository.Dispose();
        }
    }
}
