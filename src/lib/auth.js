import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
// এখানে 'better-auth/adapters/mongodb' এর পরিবর্তে 
// আপনার ইনস্টল করা সঠিক প্যাকেজের নাম '@better-auth/mongo-adapter' ব্যবহার করুন
import { mongodbAdapter } from "@better-auth/mongo-adapter"; 

const client = new MongoClient(process.env.MONGO_DB_URI);
const db = client.db(process.env.AUTH_DB_NAME);

export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true, 
  }, 
  database: mongodbAdapter(db, {
    // এটি ট্রানজেকশন সচল রাখবে
    client: client
  }),
});
