
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { Header } from '../components/shared/Header'
import { Footer } from '../components/shared/Footer'
import styles from "./Global.module.sass"
const inter = Inter({ subsets: ['latin'] })
export const metadata:Metadata ={
  title:'Future World',
  description: 'Generate by Me xD'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
        <body  suppressHydrationWarning={true} className={`${inter.className} ${styles.body}` }>
            <Header/>    
              
            {children}
                
            <Footer/>   
        </body>
  
    </html>
  )
}
