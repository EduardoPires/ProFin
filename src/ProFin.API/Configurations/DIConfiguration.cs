﻿using ProFin.Core.Interfaces.Repositories;
using ProFin.Data.Repositories;

namespace ProFin.API.Configurations
{
    public static class DIConfiguration
    {
        public static WebApplicationBuilder AddDIConfig(this WebApplicationBuilder builder)
        {
            builder.Services.AddScoped<ITransactionRepository, TransactionRepository>();

            return builder;
        }
    }
}
