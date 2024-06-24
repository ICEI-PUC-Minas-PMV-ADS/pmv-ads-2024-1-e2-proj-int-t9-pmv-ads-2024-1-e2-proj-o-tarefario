using Projeto.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Microsoft.IdentityModel.Tokens;
using System.Threading.Tasks;
using System.Linq;


namespace Projeto.Controllers
{
    public class TasksController : Controller
    {
        private readonly AppDbContext _context;
        public TasksController(AppDbContext context)
        {
            _context = context;
        }

        // Método para retornar as tarefas em formato JSON
        [HttpGet]
        public async Task<IActionResult> JsGetTasks()
        {
            string idUsuario = HttpContext.Session.GetString("usuarioLogadoID");

            if (idUsuario != null && !idUsuario.IsNullOrEmpty() && Convert.ToInt32(idUsuario) > 0)
            {
                var tasks = await _context.Tasks.Where(m => m.User.Id == Convert.ToInt32(idUsuario)).ToListAsync();
                return Json(tasks);
            }
            else 
            {

                return RedirectToAction("Login", "Login");

            }

        }

        public async Task<IActionResult> Index()
        {
            string idUsuario = HttpContext.Session.GetString("usuarioLogadoID");

            if (idUsuario != null && !idUsuario.IsNullOrEmpty())
            {
                var dados = await _context.Tasks.ToListAsync();

                return View(dados);
            }
            else
            {
                return RedirectToAction("Login", "Login");
            }


        }

        [HttpPost]
        public async Task<IActionResult> JsCreate([FromBody] Models.Task task)
        {
            if (ModelState.IsValid)
            {
                //VAMOS SETAR O USUARIO LOGADO
                string idUsuario = HttpContext.Session.GetString("usuarioLogadoID");

                if (idUsuario != null && !idUsuario.IsNullOrEmpty())
                {
                    User user = await _context.Users.FirstOrDefaultAsync(m => m.Id == Convert.ToInt32(idUsuario));

                    if (user != null && user.Id > 0)
                        task.User = user;
                }

                // Insert the users into the database
                _context.Tasks.Add(task);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index");



            }
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> JsEdit([FromBody] Models.Task task)
        {
            if (ModelState.IsValid)
            {
                _context.Tasks.Update(task);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> JsDelete([FromBody] int? id)
        {
            if (id == null)
                return NotFound();

            var dados = await _context.Tasks.FindAsync(id);

            if (dados == null)
                return NotFound();

            _context.Tasks.Remove(dados);
            await _context.SaveChangesAsync();

            return RedirectToAction("index");
        }
    }
}
