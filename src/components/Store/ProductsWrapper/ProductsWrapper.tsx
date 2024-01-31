import { Product } from "app/interfaces/Product"
import { ProductsCard } from "../ProductCard/ProductCard"
import styles from "./ProductsWrapper.module.sass"

interface ProductsWrapperProps {
    products: Product[]
}

export const ProductsWrapper = ({products}:ProductsWrapperProps)=>{
    return (
        <>
            <div className={styles.container}>
                {
                    products.map((product)=>(
                        <ProductsCard key= {product.id} product={product}/>
                    ))
                }


            </div>
        </>
    )
}
