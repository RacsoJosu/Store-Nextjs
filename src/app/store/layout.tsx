import { Collection } from "app/interfaces/Collection"
import { getCollections } from "app/services/Shopify/collections"
import Link from "next/link"
import styles from "./Layout.module.sass"
// eslint-disable-next-line @next/next/no-async-client-component
export default async function Layout ({
    children,
  }: {
    children: React.ReactNode
  }){

    const collections:Collection[] = await getCollections()
   
  
  
    return (
        <main>
            <nav className={styles.Navbar}>{
              
              collections?.map((collection)=>{
                return <Link  className={styles.NavbarLink} key={collection.id} href={'/store/'+collection.handle}>
                  {collection.title}
                </Link>
              })
              
              }</nav>
            {children}
        </main>
    )
}