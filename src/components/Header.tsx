import Image from 'next/image'
import Link from 'next/link'
import { CartWidget } from './Cart-widget'
import { SearchForm } from './SearchForm'

export function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <SearchForm />
      </div>

      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/thiagokachi.png"
            alt="Thiago Kachi avatar image"
            className="w-6 h-6 rounded-full"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  )
}
