using Microsoft.Extensions.Hosting;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Projeto.Models
{
    [Table("Users")]
    public class User
    {
        [Key]
        public int Id { get; set; }

        //[Required(ErrorMessage = "Campo obrigatório pendente!")]
        [Display(Name = "Nome")]
        public string Name { get; set; }

        //[Required(ErrorMessage = "Campo obrigatório pendente!")]
        [Display(Name = "Email")]
        public string Email { get; set; }

        //[Required(ErrorMessage = "Campo obrigatório pendente!")]
        [Display(Name = "Senha")]
        public string Password { get; set; }
        public ICollection<Task> Tasks { get; } = new List<Task>();

    }
}
