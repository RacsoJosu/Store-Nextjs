import Link  from "next/link";
import style from "./Header.module.css"
export const Header= () => {
    return(
        <header >
        <nav >
          <ul className={style.Header__list}>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/store">
              <li>Store</li>
            </Link>
          </ul>
        </nav>
      </header>

    );  
}