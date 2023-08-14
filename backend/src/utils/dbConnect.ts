import mongoose from 'mongoose';

export const connectToDB = (url: string) => {
  mongoose.connect(url, { socketTimeoutMS: 10000 });
  const db = mongoose.connection;

  db.once('connected', () => {
    console.log('Connected to database');
  });
  db.on('error', error => {
    console.log(error);
  });
};
