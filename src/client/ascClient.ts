import { connectClient, createClient } from "@amityco/ts-sdk";

const apiKey = "<<Your API La>>";
const apiEndpoint = "https://api.amity.co"

export const createASC = () => createClient(apiKey, apiEndpoint)

export const connectASC = (userId: string) => connectClient({userId})