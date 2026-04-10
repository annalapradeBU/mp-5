"use server";


import getCollection, { LINKS_COLLECTION } from "@/db";
import { LinkProps } from "@/types";

export async function createShortLink(url: string, alias: string): Promise<{ success: boolean; message: string }> {
    // start with backend validation 

    try {
        // https://developer.mozilla.org/en-US/docs/Web/API/URL/URL
        // this will throw an error if it's not valid, basically validating it :]
        new URL(url);
    } catch (err) {
        return { success: false, message: "Invalid URL. Please input a valid URL"};
    }

    // only allow letters, numbers, and hyphens 
    // stole the regex :0
    // https://stackoverflow.com/questions/26857934/regular-expression-val-replace-a-za-z0-9a-za-z0-9-g
    const aliasRegex = /^[a-zA-Z0-9-]+$/;
    if (!aliasRegex.test(alias)) {
        return { 
            success: false, 
            message: "Invalid Alias: Use only letters, numbers, and hyphens." 
        };
    }

    const linksCollection = await getCollection(LINKS_COLLECTION);

    // check to see if the alias already exists
    try {
        await linksCollection.insertOne({ url, alias });
        
        // yay!!! success!
        return { success: true, message: "Link created!" };
    } catch (error: any) {
        // check for duplicate error from mongodb (learned from my own projects)
        if (error.code === 11000) {
            return { success: false, message: "Alias already taken! Please enter a new alias!" };
        }
        
        // spit out other errors if they come 
        console.error("DB Error:", error); 
        return { success: false, message: "Database error. Please try again later." };
    }


}