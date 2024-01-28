"use client"
import Image from 'next/image'
import styles from 'app/sass/global-error.module.sass'
import ErrorPageProps from 'app/interfaces/ErrorPageProps'
export default function GlobalError ({reset}: ErrorPageProps){
    return(<>
        
        <main className={styles.Error}>
            <h1 className={styles.Error__title}>Algo salio mal</h1>
            <Image
            
            src='/images/error.png'
             width={500}
             height={500}
            alt='Error image'
             
             />
            <p className={styles.Error__message}>Al parecer ha ocurrido un error</p>
            <button className={styles.Error__button} onClick={reset}> Vuelve a intentar</button>

        </main>
    
    
    
    </>)
}
