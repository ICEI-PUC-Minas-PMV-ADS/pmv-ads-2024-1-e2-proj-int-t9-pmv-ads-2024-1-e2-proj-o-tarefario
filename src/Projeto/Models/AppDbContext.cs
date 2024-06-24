using Microsoft.EntityFrameworkCore;

namespace Projeto.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Task> Tasks { get; set; }

        public DbSet<User> Users { get; set; }

    }
}
