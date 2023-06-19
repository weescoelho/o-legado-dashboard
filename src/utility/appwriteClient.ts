import { Account, Appwrite, ID, Storage } from "@refinedev/appwrite";
import { v4 as uuid } from "uuid";

const APPWRITE_URL = "https://cloud.appwrite.io/v1";
const APPWRITE_PROJECT = import.meta.env.VITE_APPWRITE_PROJ;

const appwriteClient = new Appwrite();

appwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);
const account = new Account(appwriteClient);
const storage = new Storage(appwriteClient);

async function sendAvatarFile(file: any) {
  const res = await storage.createFile("avatars", uuid(), file);
  return res;
}

export { appwriteClient, account, storage, sendAvatarFile };
