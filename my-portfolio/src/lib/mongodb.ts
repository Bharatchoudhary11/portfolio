import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = process.env.MONGODB_DB || "portfolio";

let client: MongoClient;
let db: Db;

async function connectToDatabase() {
  if (client && db) {
    return { client, db };
  }

  try {
    client = new MongoClient(uri, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    await client.connect();
    db = client.db(dbName);
    
    console.log("Connected to MongoDB successfully");
    return { client, db };
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

export async function getCollection(name: string) {
  try {
    const { db } = await connectToDatabase();
    return db.collection(name);
  } catch (error) {
    console.error("Error getting collection:", error);
    throw new Error("Database connection failed");
  }
}

export async function getClient() {
  try {
    const { client } = await connectToDatabase();
    return client;
  } catch (error) {
    console.error("Error getting client:", error);
    throw new Error("Database connection failed");
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  if (client) {
    await client.close();
    console.log('MongoDB connection closed');
  }
});
