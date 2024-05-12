using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Projeto.Models
{
    [Table("Tasks")]
    public class Task
    {
        [Key]
        public int Id { get; set; }

        //[Required(ErrorMessage = "Campo obrigatório pendente!")]
        [Display(Name = "Título")]
        public string Title { get; set; }

        //[Required(ErrorMessage = "Campo obrigatório pendente!")]
        [Display(Name = "Descrição")]
        public string Description { get; set; }

        //[Required(ErrorMessage = "Campo obrigatório pendente!")]
        [Display(Name = "Data de Entrega")]
        public string DeadLineDate { get; set; }

        [Display(Name = "Horário da Entrega")]
        public string DeadLineHour { get; set; }

    }
}
