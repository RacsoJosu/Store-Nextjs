
import {Card} from '../../card'
import { Product } from 'app/interfaces/Product';
import styles from './MainProducts.module.sass'
import axios from 'axios';

export const MainProducts = async ()=>{
    const response= await axios.get('http://localhost:3000/api')
    // const {products} = await response.json()
    const {products} = response.data
    
      
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