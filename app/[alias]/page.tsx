import { redirect } from "next/navigation";
import getCollection, { LINKS_COLLECTION } from "@/db";

export default async function RedirectPage({ params }: { params: { alias: string } }) {
    
    // grab the alias from the parameters
    const { alias } = await params;

    const linksCollection = await getCollection(LINKS_COLLECTION);
    // look for an exact match of the alias 
    const entry = await linksCollection.findOne({ alias });

    // if it exists, redirect
    if (entry) {
       redirect(entry.url);
    } // if it does not, show error
        else {
        return <div>404 Short link not found ;-;</div>;
    }
}