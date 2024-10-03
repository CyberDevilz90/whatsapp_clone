import { Client, Account } from "appwrite";

const client = new Client();
client
   .setEndpoint("https://cloud.appwrite.io/v1")
   .setProject("66fca0ef0016b1bbf334");

const account = new Account(client);
export { client, account };
