# Desafio 01 - Bootcamp 08 Rocketseat


Aplicação criada do zero com Node JS utilizando microframework Express.

SOBRE A APLICAÇÃO:

Armazena projetos e suas respectivas tarefas.

- Rotas

    POST /projects: A rota recebe id e title dentro corpo de cadastrar um novo projeto dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', tasks: [] };

    GET /projects: Rota que lista todos projetos e suas tarefas;

    PUT /projects/:id: A rota altera apenas o título do projeto com o id presente nos parâmetros da rota;

    DELETE /projects/:id: A rota deleta o projeto com o id presente nos parâmetros da rota;
    
    DELETE /projects/:id/tasksdelete: Essa rota deleta o apenas as tarefas de um projeto com o id presente nos parâmetros da rota (Esse ítem não constava no projeto inicial e foi adicionado como uma necessidade do projeto);

    POST /projects/:id/tasks: A rota recebe um campo title e armazena uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;
    
    


I <3 CODE! 

vitalves.com
