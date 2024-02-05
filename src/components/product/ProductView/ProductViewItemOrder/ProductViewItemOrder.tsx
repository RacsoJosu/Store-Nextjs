"use client";
import { SyntheticEvent, useState } from "react";
import { FaCartShopping } from 'react-icons/fa6';
import styles from "./ProductViewItemOrder.module.sass";

interface ProductViewItemsOrderProps {
    maxQuantity: number,
  }
export const ProductViewItemOrder = ({maxQuantity}:ProductViewItemsOrderProps)=>{
    
    const [counter, setCounter] = useState(1);
    const handleSubmit = (event:SyntheticEvent)=>{
        event.preventDefault();
    }

    const handleAdd=(event:SyntheticEvent)=>{
        event.preventDefault();
        if (counter===maxQuantity) {
            return
        }
        setCounter(counter + 1)
    }

    const handleSubtract=(event:SyntheticEvent)=>{
        event.preventDefault();
        if (counter===1) {
            return
            
        }

        
        setCounter(counter - 1)
    }

    
    
    return (<>
        <div className={styles.ProductViewItemsOrder}>
            <div className={styles.ProductViewItemsOrder__itemsCount}>
            <button onClick={handleSubtract}>-</button>
            <p>{counter}</p>
            <button onClick={handleAdd}>+</button>
            </div>
            <form
            onSubmit={handleSubmit}
            className={styles.ProductViewItemsOrder__form}
            >
            <button
                className={styles.ProductViewItemsOrder__submit}
                type="submit"
            >
                <FaCartShopping />
                <span>Agregar Al Carrito</span>
            </button>
            </form>
        </div>  
    </>)
}