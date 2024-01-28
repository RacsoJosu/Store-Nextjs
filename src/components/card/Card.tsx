import Image from 'next/image'
import styles from './Card.module.sass'
export const Card =(
    {title, description, tags, urlImage}:
    {title:string, description:string, tags:string, urlImage:string})=>
    {
    return (
        <div className={styles.content}>
            <article>
            
                <p>{title}</p>
                <Image
                src={urlImage}
                alt={title}
                fill
                sizes="width: 10px, height: 7px"
                loading='eager'/>
        
                
            </article>

        </div>
    )
}