import Image from 'next/image'
import { Inter } from 'next/font/google'
import { JSXElementConstructor } from 'react'
import { PopularMovies } from '@/components/PopularMovies'

const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (
    <>
      <PopularMovies />
    </>
  )
}
