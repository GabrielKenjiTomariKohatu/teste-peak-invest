namespace back.Model
{
    public class UserPost
    {
        public decimal Valor { get; private set; }
        public short Parcelas { get; private set; }

        public UserPost(decimal valor, short parcelas) 
        {
            Valor = valor;
            Parcelas = parcelas;
        }
    }
    public class UserGet
    {
        public long Id { get; private set; }
        public string Nome { get; private set; }

        public UserGet(int id, string nome) 
        {
            Id = id;
            Nome = nome; 
        }
    }

}
