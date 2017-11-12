using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using dpapanek.Models;

namespace dpapanek.Controllers
{
    public class projectsController : ApiController
    {
        private Entities db = new Entities();

        // GET: api/projects
        public IQueryable<project> Getprojects()
        {
            return db.projects;
        }
        
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}