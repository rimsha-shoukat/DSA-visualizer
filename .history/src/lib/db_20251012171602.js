import mongoose from 'mongoose';

if(!process.env.user_uri){
    throw new Error('Mongo URI not found');
}

const user = new MongoCl