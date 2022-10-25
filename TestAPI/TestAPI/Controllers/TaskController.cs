using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestAPI.Models;
using Task = TestAPI.Models.Task;

namespace TestAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {

        Models.DatabaseContext db = new DatabaseContext();

        [Route("[action]")]
        [HttpGet]
        public void addTask(string name, string description)
        {
            Task task = new Task();
            task.TaskName = name;
            task.TaskDescription = description;
            db.Tasks.Add(task);
            db.SaveChanges();
        }

        [Route("[action]")]
        [HttpGet]

        public object getTask()
        {
            return db.Tasks;
        }

    }
}
