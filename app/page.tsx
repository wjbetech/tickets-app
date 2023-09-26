import Image from 'next/image'
import Link from "next/link"
import ProductCard from "./components/ProductCard"

export default function Home() {
  return (
    <main className="">
      <h1>Hello World!</h1>
      <div>
        <Link href="/users">Users</Link>
      </div>
      <ProductCard />
    </main>
  )
}
