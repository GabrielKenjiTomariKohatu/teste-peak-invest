# TESTE PEAK INVEST

## Descrição do teste

Montar uma aplicação básica com duas camadas: front-end em angular e o back-end deve ser uma API em .NET C#.

Tela de Cadastro
Desenvolver uma Tela de Cadastro que tenha dois campos onde o usuário possa digitar o valor para parcelas (short) e valor (decimal).

Ao clicar em um botão Salvar, os dados devem ser enviados através de uma requisição POST para a API no back-end que deve realizar o seguinte cálculo: (valor \* parcelas) + 5%.

Após realizado o cálculo o resultado deve ser enviado novamente para o front-end que deve exibir o valor no formato currency (ex: R$ 99,999).

Tela de Consulta
Desenvolver uma Tela de Consulta onde seja possível digitar um número de 1 a 3 e ao clicar em buscar, o front-end faz uma requisição no formato GET para a API no back-end.

O back-end deve consultar por esse ID em uma lista KeyValuePair (ver exemplo) e retornar para o front-end o nome encontrado.

## Requisitos

- Versão do dotnet 8.0.204

Verificação da versão:

```
    dotnet --version
```

- Versão do node 10.21.0

Verificação da versão:

```
    node --version
```

- Versão do Angular 9.1.15

Verificação da versão:

```
    ng version
```

## Passo a passo

1. Clonar o projeto localmente.

```
    git clone https://github.com/GabrielKenjiTomariKohatu/teste-peak-invest.git
```

2. Entrar na pasta /front e abra o projeto com o vs code.

   - Abra o bash na pasta e de um code . para abrir direto pelo vs code.
   - Abra o vs code vá em File > Open Folder para abrir pelo vs code.

3. Baixar os pacotes na pasta do /front.

```
    npm install
```

4. Rodar a aplicação

```
    ng s -o
```

5. Abrir o Visual Studio e abrir o projeto ./back/back.csproj.

6. Rodar a aplicação do /back.

7. Testar a aplicação com ambos rodando.
