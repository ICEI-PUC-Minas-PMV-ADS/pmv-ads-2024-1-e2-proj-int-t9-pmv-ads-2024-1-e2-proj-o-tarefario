using Projeto.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;


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
            var tasks = await _context.Tasks.ToListAsync();
            return Json(tasks);
        }

        public async Task<IActionResult> Index()
        {
            var dados = await _context.Tasks.ToListAsync();

            return View(dados);
        }

        [HttpPost]
        public async Task<IActionResult> JsCreate([FromBody] Models.Task task)
        {
            if (ModelState.IsValid)
            {
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
