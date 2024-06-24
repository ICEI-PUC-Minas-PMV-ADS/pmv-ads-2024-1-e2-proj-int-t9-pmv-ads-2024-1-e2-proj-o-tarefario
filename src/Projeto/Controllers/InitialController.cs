using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace Projeto.Controllers
{
    public class InitialController : Controller
    {
        // GET: InitialController
        public ActionResult Index()
        {
            string idUsuario = HttpContext.Session.GetString("usuarioLogadoID");

            if (idUsuario != null && !idUsuario.IsNullOrEmpty())
            {
                

                return View();
            }
            else
            {
                return RedirectToAction("Login", "Login");
            }
            
        }

        // GET: InitialController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: InitialController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: InitialController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: InitialController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: InitialController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: InitialController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: InitialController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
