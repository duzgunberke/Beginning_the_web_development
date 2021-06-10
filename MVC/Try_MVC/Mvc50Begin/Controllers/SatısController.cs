using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Mvc50Begin.Models.Entity;
namespace Mvc50Begin.Controllers
{
    public class SatısController : Controller
    {
        // GET: Satıs
        MvcLearnDbEntities db = new MvcLearnDbEntities();
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult YeniSatis()
        {
            return View();
        }
        [HttpPost]
        public ActionResult YeniSatis(TBL_SATISLAR s)
        {
            db.TBL_SATISLAR.Add(s);
            db.SaveChanges();
            return View("Index");
        }
    }
}