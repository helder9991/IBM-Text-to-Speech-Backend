# Versões dos softwares utilizados:  
  node v12.18.2  
  npm v6.14.5  
  
# Como utilizar
1 -  Crie o banco de dados com o nome ``ibm``  
  Obs: No teste foi utilizado o MySQL 8  
  
  
2 - Altere o arquivo .env conforme a necessidade  
  - ```API_PORT``` - Porta onde rodará o servidor.  
  - ```API_URL``` - Dominio da API.  
  - ```IBM_API_KEY``` - API KEY da conta para utilizar a API da IBM.  
  - ```IBM_API_URL``` - API URL da conta para utilizar a API da IBM.  
  
  
3 - Rode o comando na pasta raiz do projeto:  
  - ```npm```  
  
  Nota: Este comando irá baixar as dependencias das bibliotecas (node_modules)  
  
  
4 - Rode o commando na pasta raiz do projeto:  
  - ```npm run typeorm migration:run```  
  
  Nota: Este comando irá criar a tabela no banco de dados que salvará os comentarios  
  
  
5 - Rode o commando na pasta raiz do projeto:  
  - ```npm run dev```  
  
  Nota: Este comando irá iniciar o backend  

