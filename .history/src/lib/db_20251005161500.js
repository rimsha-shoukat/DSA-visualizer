if(!process.env.DB_URI){
    throw new Error('Mongo URI not fount');
}

const client = new Mon