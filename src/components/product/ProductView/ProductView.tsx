import Image from "next/image"
import styles from "./ProductView.module.sass"
import { Product } from "app/interfaces/Product"
import { ProductViewItemOrder } from "./ProductViewItemOrder"
export const ProductView=({product}:{product:Product})=>{

    return (
        <>
            <main className={styles.content}>
                <section className={styles.content__containerImg}>
                    <Image
                    src={product.images[0]}
                    alt="imagen"
                    loading="eager"
                    quality={80}
                    width={700}
                    height={700}
                    className={styles.content__containerImg__img}
                    />
                </section>


                <section className={styles.content__information}>
                    
                    <h1>{product?.title}</h1>
                    <div className={styles.content__information__tags}>
                        <p>{product?.tags}</p>
                    </div>
                    <p className={styles.content__information__description}>{product?.body_html.split(/<\/?p>/)[1]}</p>
                    <p className={styles.content__information__price}>$ {product?.variants[0].price}&nbsp;&nbsp;USD</p>

                    

                    <ProductViewItemOrder maxQuantity={ product?.variants[0]?.inventory_quantity}/>

                    
                </section>
                
            </main>
        
        </>
    )
}