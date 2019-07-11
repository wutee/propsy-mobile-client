using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Ef_clothes_store.Models;


namespace Ef_clothes_store.DAL
{
  public class MySqlContext : IdentityDbContext<ApplicationUser>
  {
    public MySqlContext(DbContextOptions<MySqlContext> options) : base(options)
    {
      //this.Database.EnsureCreated();
    }
    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);
    }
    public virtual DbSet<Person> Persons { get; set; }
  }
}
