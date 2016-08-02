using System.Web.Mvc;

namespace GraltechGulp.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Dev()
        {
            return View();
        }

        // GET: Home
        public ActionResult Prod()
        {
            return View();
        }
    }
}