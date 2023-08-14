import { Schema, model, Document } from 'mongoose';
import { VideoSchema } from '../types/models';

const videoSchema = new Schema<VideoSchema>({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

videoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Video = model<VideoSchema>('Video', videoSchema);

export default Video;
