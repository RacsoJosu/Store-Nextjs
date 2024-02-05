import { envm } from "app/config/env";
import { shopifyUrls } from "./urls";
import axios from "axios";
import { Collection } from "app/interfaces/Collection";

export const getCollections = async ()=>{
    try {
        const response = await axios.get(shopifyUrls.collection.all,
            {
                headers:{
                    "X-Shopify-Access-Token": envm.SHOPIFY_APY_KEY,
                }
            }    
        )



        const {smart_collections} = response.data
        const collections = smart_collections.map((collection:Collection)=>{
            return {
                id: collection.id,
                handle: collection.handle,
                title: collection.title,
            }
        })

        return collections
        
    } catch (error) {
        console.log({error})
        return error
        
    }

}

export const getCollectionProducts = async (id:string)=>{
    try {
        const response = await axios.get(shopifyUrls.collection.products(id),
            {
                headers:{
                    "X-Shopify-Access-Token": envm.SHOPIFY_APY_KEY,
                }
            }    
        )



        return response.data.products
        
        
    } catch (error) {
        console.log({error})
        
        
    }

}

