using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Mvc50Begin.Models.Entity;
using PagedList;
using PagedList.Mvc;
namespace Mvc50Begin.Controllers
{
    public class KategoriController : Controller
    {
        // GET: Kategori
        MvcLearnDbEntities db = new MvcLearnDbEntities();
        
        public ActionResult KategoriListesi(int sayfa=1)
        {
           // var degerler = db.TBL_KATEGORILER.ToList();
            var degerler=db.TBL_KATEGORILER.ToList().ToPagedList(sayfa,4);
            return View(degerler);
        }

        [HttpGet]
        public ActionResult YeniKategori()
        {
            return View();
        }

        [HttpPost]
        public ActionResult YeniKategori(TBL_KATEGORILER p1)
        {
            if (!ModelState.IsValid)
            {
                return View("YeniKategori");
            }
            db.TBL_KATEGORILER.Add(p1);
            db.SaveChanges();
            return View();
        }
        public ActionResult SIL(int id)
        {
            var kategori = db.TBL_KATEGORILER.Find(id);
            db.TBL_KATEGORILER.Remove(kategori);
            db.SaveChanges();
            return RedirectToAction("KategoriListesi");
        }
        public ActionResult KategoriGetir(int id)
        {
            var ktg = db.TBL_KATEGORILER.Find(id);
            return View("KategoriGetir", ktg);
        }
        public ActionResult Guncelle(TBL_KATEGORILER p1)
        {
            var ktg = db.TBL_KATEGORILER.Find(p1.KATEGORIID);
            ktg.KATEGORIAD = p1.KATEGORIAD;
            db.SaveChanges();
            return RedirectToAction("KategoriListesi");
        }
    }
}