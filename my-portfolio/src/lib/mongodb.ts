import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017";
const dbName = process.env.MONGODB_DB || "portfolio";

const client = new MongoClient(uri);

export async function getCollection(name: string) {
  if (!client.topology) {
    await client.connect();
  }
  return client.db(dbName).collection(name);
}

export function getClient() {
  return client;
}
