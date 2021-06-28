using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Assignment.Models;
using Assignment.Extensions;

namespace Assignment.Data
{
    public class Context : DbContext
    {
        public Context (DbContextOptions<Context> options)
            : base(options)
        {
            this.CreateDatabaseIfNotExist();
        }

        public bool CreateDatabaseIfNotExist()
        {
            try
            {
                return base.Database.EnsureCreated();
            }
            catch
            {
                throw;
            }
        }

        public DbSet<Assignment.Models.Patient> Patient { get; set; }
    }
}
