import { getTodos } from '../services/dbService.js'
/*---------------Added by Pushpak----------------*/
import { getUser } from '../services/dbService.js'

import Topic from '../models/topicModel.js';
/*---------------Added by Pushpak----------------*/
import log from '../utils/logger.js'

/*
export function create(entity) {}
*/

export async function read() {
  try {
    return await getTodos()
  } catch (error) {
    log.error(error)
  }
}
/*---------------Added by Pushpak----------------*/
export async function readUser() {
  try {
    return await getUser()
  } catch (error) {
    log.error(error)
  }
}
/*---------------Added by Pushpak----------------*/

// Create and Save a new Topic
export function create(_Topic) {(req, res) => {  
   // Validate request because in model we required the name
   console.log('inside create method in todoController.js:')
   if(!req.body.name) {
       return res.status(400).send({
           message: "Please enter Topic name."
       });
   }
   
   // Create a Topic
   const Topic = new Topic({
       id: req.body.id,
       name: req.body.name,
       status: req.body.status 
   });
   
   console.log('Topic created in todoController.js: \n' + Topic)
   // Save Topic in the database
   Topic.save()
       .then(oTopic => {
           console.log('Topic saved in todoController.js: \n' + oTopic)
           res.send(oTopic);
       }).catch(err => {
       res.status(500).send({
           message: err.message || "Some error occurred while creating the Topic."
       });
   });
}};

export function getAll() {(req, res) => {
  Topic.find()
      .then(oTopic => {
          res.send(oTopic);
      }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving the Topic."
      });
  });
}};
export function update(id) {}
export function remove(id) {}