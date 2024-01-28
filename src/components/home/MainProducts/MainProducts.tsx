import {Card} from '../../card'
import { Product } from 'app/interfaces/Product';
import styles from './MainProducts.module.sass'
const getProducts = async ()=>{

    try {
        const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-01/products.json`, {
            headers: new Headers({
                "X-Shopify-Access-Token": process.env.SHOPIFY_APY_KEY as string,
            })
        })
    
        const data = await response.json();
        return data.products;
        
    } catch (error) {
        console.log({error})
    }
}

export const MainProducts = async ()=>{
    const products =await getProducts(); 


    return (
        <section className={styles.MainProducts} >
            <h1>Main Products</h1>
            <div className={styles.MainProducts__grid}>
                {products?.map((product:Product)=>{
                    console.log({product})
                    return (<Card key={product.id} title={product.title} urlImage={product.image.src} description="" tags={product.tags}/>)
                })}

            </div>
        </section>
    )
}