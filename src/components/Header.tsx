import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 flex items-center bg-pink-200 text-white shadow-lg">
      <Link to="/">
        <img src="/logo.svg" alt="Family Tree Logo" className="h-12" />
      </Link>
    </header>
  )
}
