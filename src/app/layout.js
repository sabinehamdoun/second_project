import Footer from './components/footer'
import Header from './components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My App', 
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>  
      <Header /> 
      {children} 
      <Footer />
      </body>
    </html>
  )
}