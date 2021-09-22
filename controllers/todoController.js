//import { getTodos } from '../services/dbService.js'
/*---------------Added by Pushpak----------------*/
//import { getUser } from '../services/dbService.js'

import Topic from '../models/topicModel.js';
/*---------------Added by Pushpak----------------*/
import logger from '../utils/logger.js'

//const log = logger();

/*
export function create(entity) {}
*/
/*
export async function read() {
  try {
    return await getTodos()
  } catch (error) {
    log.error(error)
  }
}*/
/*---------------Added by Pushpak----------------*/
export async function readUser() {
  try {
    return await getUser()
  } catch (error) {
    logger.error(error)
  }
}
/*---------------Added by Pushpak----------------*/

// Create and Save a new Topic
export function create(req,res) {  
   // Validate request because name is a mandatory attribute in the model
   if(!req.body.name) {
       logger.error("400: Please enter Topic name.") 
       return res.status(400).send({
           message: "Please enter Topic name."
       });
   }  
   
   // Create a Topic
   const topic = new Topic({
       id: req.body.id,
       name: req.body.name,
       status: req.body.status 
   });
   
   logger.log('Topic created: \n' + topic)
   // Save Topic in the database
   topic.save()
       .then(oTopic => {
           logger.log('Topic saved in database: \n' + oTopic)
           res.send(oTopic);
       }).catch(err => {
       logger.error(err)  
       res.status(500).send({
           message: err.message || "Some error occurred while creating the Topic."
       });
   });
};

export function getAll(_,res) {
  Topic.find()
      .then(oTopic => {
          logger.log('Get all topics from database: \n' + oTopic)
          res.send(oTopic);
      }).catch(err => {
      logger.error(err) 
      res.status(500).send({        
        message: err.message || "Some error occurred while retrieving the Topic."
      });
  });
};

// Get a single topic with a topicId
export function getById(req, res){
  Topic.findById(req.params.topicId)
      .then(oTopic => {
          if(oTopic) {
              logger.log('Successfully retrieved topic data from database for id: ' + req.params.topicId)
              res.send(oTopic);
          }
          /*
          return res.status(404).send({
              message: "topic does not exist with id: " + req.params.topicId
          });*/
      }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "topic does not exist with id: " + req.params.topicId
          });
      }
      return res.status(500).send({
          message: "Error retrieving topic with id: " + req.params.topicId
      });
  });
};

export function update(req,res) {
  if(!req.body.name) {
    return res.status(400).send({
        message: "Please enter topic name."
    });
  }

// Find topic and update it
  Topic.findByIdAndUpdate(req.params.topicId, {
      name: req.body.name,
      status: req.body.status
  }, {new: true})
    .then(oTopic => {
        logger.log('Successfully updated topic for id: ' + req.params.topicId);
        if(oTopic) {
            res.send(oTopic);
        } 
    }).catch(err => {
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "Topic does not exist with topicId " + req.params.topicId
        });
    }
    return res.status(500).send({
        message: "Some error occurred while retrieving the topic with topicId" + req.params.topicId
    });
});
}

export function remove(req, res) {
  Topic.findByIdAndRemove(req.params.topicId)
       .then(oTopic => {
           if(oTopic) {
	       logger.log('Successfully deleted topic id: ' + req.params.topicId);
               res.send({message: "topic has been deleted successfully!"});
           }           
       }).catch(err => {
       if(err.kind === 'ObjectId' || err.name === 'NotFound') {
           return res.status(404).send({
               message: "topic not exist with topicId: " + req.params.topicId
           });
       }
       return res.status(500).send({
           message: "Some error occurred while deleting the topic with topicId: " + req.params.topicId
       });
   });
}