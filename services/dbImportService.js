import topicdata from '../data/todoData.js';
import Topic from '../models/topicModel.js';

var _i, _len, obj;

export default function importTopicData(){
  
  const data = topicdata;  

  for (_i = 0, _len = data.length - 990; _i < _len; _i++) {
    obj = data[_i];
  // Create a Topic
    const topic = new Topic(obj);
   // Save a Topic 
    topic.save();
    console.log(obj);
    }
  // return {importTopicData} 
  } 
;

importTopicData();