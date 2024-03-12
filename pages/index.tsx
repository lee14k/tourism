import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import ExploreBox from '@/components/ExploreBox'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
     
    >
      <Navbar/>
     <Header/> 
     <ExploreBox/>
    </main>
  )
}
