import { Product } from "app/interfaces/Product"
import Image from "next/image"
import Link from "next/link"
import styles from "./ProductCard.module.sass"

export const ProductsCard= ({product}:{product:Product})=>
{
    return (<>

        <Link className={styles.card__link} href={`/articulo/${product?.handle}?id=${product?.id}`}>
            <article className={styles.card}>
            
                <Image
                src={product?.image?.src}
                alt={product?.title}
                quality={80}
                height={320}
                width={320}
                loading='eager'/>
                <div className={styles.card__title}>
                    <p >{product?.title}</p>
                </div>
                <span className={styles.card__price}>precio USD</span>
        
            </article>

        </Link >
    
        
    
    </>)
} 