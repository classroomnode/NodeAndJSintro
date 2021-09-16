import mongoose from 'mongoose';

const topicSchema = mongoose.Schema({
   id: String,
   name: {
    type: String,
    required: true  
   },
   status: String
  });

export default mongoose.model('Topic', topicSchema);