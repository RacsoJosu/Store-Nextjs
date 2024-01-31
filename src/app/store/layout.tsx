import { Collection } from "app/interfaces/Collection"
import { getCollections } from "app/services/Shopify/collections"
import Link from "next/link"
import styles from "./Layout.module.sass"
export default async function Layout ({
    children,
  }: {
    children: React.ReactNode
  }){

    const collections:Collection[] = await getCollections()
    console.log({collections})

    return (
        <main>
            <nav>{
              
              collections?.map((collection)=>{
                return <Link className={styles.Navbar} key={collection.id} href={'/store/'+collection.handle}>
                  {collection.title}
                </Link>
              })
              
              }</nav>
            {children}
        </main>
    )
}