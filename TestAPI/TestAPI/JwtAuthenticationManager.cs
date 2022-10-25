using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TestAPI.Models;

namespace TestAPI
{
    public class JwtAuthenticationManager
    {
        private readonly string key;
        private readonly IDictionary<string, string> users = new Dictionary<string, string>() { { "test", "password" }, { "test1", "pwd" } };

        Models.DatabaseContext db = new DatabaseContext();

        public JwtAuthenticationManager(string key)
        {
            this.key=key;

        }

        public string Authenticate (User user)
        {
            var myUser = db.Users
        .FirstOrDefault(u => u.Email == user.Email
                     && u.Password == user.Password);
            if (myUser == null)
            {
                return null;
            }
            else
            {

                return "true";

            }

        }



    }
}


/*  JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();

                var tokenKey = Encoding.ASCII.GetBytes(key);

                SecurityTokenDescriptor tokenDescriptor= new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim(ClaimTypes.Name,user.Email)


                    }
                    
                    )


                }*/