using back.Model;
using back.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace back.Controllers
{
    public static class UserController
    {
        public static void UserEndpointController(this WebApplication app)
        {
            app.MapPost("/", (UserPost userPost) =>
            {
                try
                {
                    if ((userPost.Valor == null || userPost.Valor == 0) || (userPost.Parcelas == null || userPost.Parcelas == 0))
                        return Results.BadRequest("Verifique os dados enviados.");

                    decimal total = UserRepository.calcularTotal(userPost);

                    return Results.Created("/", total);

                } catch(Exception ex)
                {
                    return Results.Problem(detail: "Ocorreu um erro no servidor.", statusCode: 500);
                }
                
            });

            app.MapGet("/{id}", ([FromRoute] long id) =>
            {
                try {
                    if(id < 0)
                        return Results.BadRequest("Id inválido.");

                    string nome = UserRepository.buscarNome(id);

                    if (nome != null && nome != "")
                        return Results.Ok(nome);

                    return Results.NoContent();

                } catch(Exception ex)
                {
                    return Results.Problem(detail: "Ocorreu um erro no servidor.", statusCode: 500);
                }
            });

            app.MapGet("/listar", () =>
            {
                try
                {
                    List<UserGet> users = UserRepository.listarNome();

                    if (users != null && users.Count > 0)
                        return Results.Ok(users);

                    return Results.NoContent();

                } catch(Exception ex)
                {
                    return Results.Problem(detail: "Ocorreu um erro no servidor.", statusCode: 500);
                }
            });
        }
    }
}
