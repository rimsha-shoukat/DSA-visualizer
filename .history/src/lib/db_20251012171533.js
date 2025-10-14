import mongoose from 'mongoose';
if(!process.env.user_uri){
    throw new error ('Mongo URI not found');
}