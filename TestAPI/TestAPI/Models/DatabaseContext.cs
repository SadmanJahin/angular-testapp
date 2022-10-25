using System.Data.Entity;

namespace TestAPI.Models
{
    public class DatabaseContext :DbContext
    {
        public DatabaseContext() : base("APIDatabase(v2)")
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Task> Tasks { get; set; }
    }
}
