using back.Model;
using System;

namespace back.Repositories
{
    public class UserRepository
    {
        private static List<KeyValuePair<int, string>> userListName = new List<KeyValuePair<int, string>>();
        private static List<UserGet> userList = new List<UserGet>();

        public static decimal calcularTotal(UserPost userPost)
        {
            try
            {
                var total = (userPost.Valor * userPost.Parcelas) * 1.05m;

                return total;

            } catch (Exception ex)
            {
                throw ex;
            }

        }

        public static string buscarNome(long id)
        {
            try
            {
                if ((userListName == null || userListName.Count == 0) && (userList == null || userList.Count == 0))
                    listarNome();

                KeyValuePair<int, string> nome = userListName.FirstOrDefault(x => x.Key == id);


                return nome.Value;

            } catch (Exception ex)
            {
                throw ex;
            }
        }

        public static List<UserGet> listarNome()
        {
            try
            {
                if ((userListName == null || userListName.Count == 0) && (userList == null || userList.Count == 0))
                {
                    string[] nomes = { "João", "Maria", "Ana" };
                    int id = 1;

                    foreach (string nome in nomes)
                    {
                        UserGet user = new UserGet(id, nome);
                        userListName.Add(new KeyValuePair<int, string>(id, nome));
                        userList.Add(user);

                        id++;
                    }
                }

                return userList;

            } catch (Exception ex) 
            {
                throw ex;
            }
        }
    }
}
