import Image from "next/image"
import Link from "next/link"
import styles from "app/sass/not-found.module.sass"

export default function NotFound(){
    return (
        <main className={styles.NotFound}>
            
            <h1 className={styles.NotFound__tittle}>404</h1>
            <Image
            src="/images/404.png"
            alt="Not found"

            width={500}
            height={500}
            
            />
            <h2 className={styles.NotFound__subtitle}>¡Uy, parece que el enlace no existe!</h2>
            <p className={styles.NotFound__message}>Pero nuestra tienda está abiertas las 24/7</p>
            <Link className={styles.NotFound__button} href="/store">
                ¡Vamos a compras!
            </Link>

        </main>
    )
}