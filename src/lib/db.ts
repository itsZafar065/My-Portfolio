import "server-only";
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

type Cached = { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };

const globalForMongoose = globalThis as typeof globalThis & { mongooseCache?: Cached };
const cached = globalForMongoose.mongooseCache ?? { conn: null, promise: null };
globalForMongoose.mongooseCache = cached;

export async function connectDb() {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }
  if (cached.conn) return cached.conn;
  cached.promise ??= mongoose.connect(uri, {
    bufferCommands: false,
    maxPoolSize: 10
  });
  cached.conn = await cached.promise;
  return cached.conn;
}

export function hasDatabase() {
  return Boolean(uri);
}

export function toPlain<T>(doc: unknown): T {
  return JSON.parse(JSON.stringify(doc)) as T;
}
