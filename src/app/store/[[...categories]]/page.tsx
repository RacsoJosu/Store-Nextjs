import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { Collection } from "app/interfaces/Collection";
import { getCollectionProducts, getCollections } from "app/services/Shopify/collections";
import { getProducts } from "app/services/Shopify/products";

interface CategoryProps {
    params:{
        categories:string[],
        searchParams?: string[]
    }
}

export default async function Category(props:CategoryProps) {
    // http://localhost:3000/store/juegos-de-mesa?srreferer=twitter&param2=value2 varios parametros
    let products= []
    const {categories} = props.params || "";
    const collections = await getCollections()

    
    if (categories) {
        const selectdCollection = collections.find((collection:Collection)=> collection.handle === categories[0]).id
        
        products = await getCollectionProducts(selectdCollection) 
        
    }else{
        products = await getProducts()

    }

    return (<><ProductsWrapper products={products}/></>)
    
}