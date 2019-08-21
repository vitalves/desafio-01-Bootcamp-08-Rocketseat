const express = require('express');

const server = express();
server.use(express.json());

let countRequests = 0;

function requestsNum(req, res, next) {
  countRequests++;
  console.log(`Número de requisções: ${countRequests}`);
  return next();
}

server.use(requestsNum);

function projectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(p => p.id == id);
  if (!project) {
    return res.status(400).json({ error: "Erro! Projeto não cadastrado" })
  }
  next();
  res.json({ time: "tempo decorrido" })
}

const projects = [
  { id: "1", title: "Desenvolver site WorsPress", tasks: ["Plugins", "Host"] },
  { id: "2", title: "Desenvolver sistema php", tasks: ["Banco", "MySql"] },
];

server.get('/projects', (req, res) => {
  return res.json({ projects })
});

server.post('/projects', (req, res) => {
  const { id, title } = req.body;
  const project = {
    id,
    title,
    tasks: []
  };
  projects.push(project);
  return res.json(projects);
});

server.put('/projects/:id', projectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.title = title;

  return res.json(project);
});

server.delete('/projects/:id', projectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex(p => p.id == id);

  projects.splice(projectIndex, 1);

  return res.send();
});

server.post('/projects/:id/tasks', projectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(title);

  return res.json(project);
})

server.delete('/projects/:id/taskdelete', projectExists, (req, res) => {
  const { id } = req.params;
  const projectIndex = projects.findIndex(p => p.id == id);
  projects[projectIndex].tasks = [];
  return res.json(projects);
})

server.listen(4000);