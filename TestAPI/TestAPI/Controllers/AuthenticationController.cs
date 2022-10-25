using Microsoft.AspNetCore.Mvc;
using TestAPI.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        Models.DatabaseContext db = new DatabaseContext();

        [Route("[action]")]
        [HttpGet]
        public void AddUser(string email, string password)
        {
            User user = new User();
            user.Email = email;
            user.Password = password;
            db.Users.Add(user);
            db.SaveChanges();
        }


        [Route("[action]")]
        [HttpPost]
        public bool ValidateUser(User user)
        {

            var myUser = db.Users
          .FirstOrDefault(u => u.Email == user.Email
                       && u.Password == user.Password);
            if (myUser == null)
            {
                return false;
            }
            else
            {
                return true;
            }

        }




        // GET: api/<AuthenticationController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<AuthenticationController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return id.ToString();
        }

        // POST api/<AuthenticationController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<AuthenticationController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AuthenticationController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
