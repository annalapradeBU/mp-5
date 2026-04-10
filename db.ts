// stolen from professor's example and modified

import {Collection, Db, MongoClient} from "mongodb";

const MONGO_URI = process.env.MONGO_URI as string;

if(!MONGO_URI){
    throw new Error("Something is wrong with your key");
}

const DB_NAME = "url-shortener-db";

export const LINKS_COLLECTION = "links-collection";

let client: MongoClient | null=null;
let db: Db | null=null;

async function connect(): Promise<Db> {
    // If `client` is not yet initialized, create a new MongoClient instance
    // and connect to MongoDB using the provided URI.
    if (!client) {
        client = new MongoClient(MONGO_URI);
        await client.connect();

        const database = client.db(DB_NAME);
        const collection = database.collection(LINKS_COLLECTION);

        // allows for the unique constraint 
        // once again, learned in my personal proejcts
        await collection.createIndex({ alias: 1 }, { unique: true });

        db = database;
    }

    // check for null db
    if (!db) {
        throw new Error("Database failed to initialize");
    }

    // return the database instance
    return db;

    
}


export default async function getCollection(collectionName: string): Promise<Collection> {
    // If `db` is not yet initialized, call `connect` to establish the connection.
    if (!db) {
        db = await connect();
    }
    // Return the requested collection from the database.
    return db.collection(collectionName);
}