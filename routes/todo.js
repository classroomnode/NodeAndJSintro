import * as todoController from '../controllers/todoController.js'

const route = '/todo'
/*---------------Added by Pushpak----------------*/ 
const route1 = '/todo/getuser'
/*---------------Added by Pushpak----------------*/ 

export default (app) => {
   /*---------------Added by Pushpak----------------*/ 
  // define a simple route
  app.get('/', (req, res) => {
    res.json({"message": "Welcome to ExpressMongoApp application"});
  });
   /*---------------Added by Pushpak----------------*/ 

  app.get(route, async (req, res) => {
    try {
      const dbResponse = await todoController.read()
      res.send(dbResponse)
    } catch (error) {
      res.status(400)
      res.send(error)
    }
  })
  /*---------------Added by Pushpak----------------*/ 
  app.get(route1, async (req, res) => {
    try {
      const dbResponse = await todoController.readUser()
      res.send(dbResponse)
    } catch (error) {
      res.status(400)
      res.send(error)
    }
  })  
   /*---------------Added by Pushpak----------------*/ 

  // Create a new topic
  //app.post('/topics', todoController.create());

   // Get all topics
   //app.get('/topics', todoController.getAll());
 
 app.post('/topics', (req, res) => {
    try {
      const dbResponse = todoController.create(todoController.Topic)
      console.log('inside post method in todo.js: ' + dbResponse)
      res.send(dbResponse)
    } catch (error) {
      res.status(400)
      res.send(error)
    }
  })
    
  // Get all topics
  app.get('/topics', (req, res) => {
    try {
      const dbResponse = todoController.getAll()
      console.log('inside get method in todo.js: ' + dbResponse)
      res.send(dbResponse)
    } catch (error) {
      res.status(400)
      res.send(error)
    }
  }) 
/*
  // Get all topics
  app.get('/topics', todoController.getAll);

  // Get a single topic with topicId
  app.get('/topics/:topicId', todoController.getById);

  // Update a topic with topicId
  app.put('/topics/:topicId', todoController.update);

  // Delete a Book with bookId
  app.delete('/topics/:topicId', todoController.delete);*/
} 
