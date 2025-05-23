'use client' // Mark this as a Client Component

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = {
  '/': {
    name: 'Matthias Koch',
  },
  '/projects': {
    name: 'Projects',
  },
  '/blog': {
    name: 'Blog',
  },
  '/about': {
    name: 'About',
  },
}

export function Navbar() {
  const pathname = usePathname() // Get the current path

  return (
    <aside className="-ml-[8px] mb-16 tracking-normal">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex items-center justify-between px-0 pb-0 fade md:overflow-auto scroll-pr-6"
          id="nav"
        >
          {/* Left-aligned item */}
          <div>
            <Link
              href="/"
              className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle py-1 px-2 m-1 ${
                pathname === '/' ? 'underline underline-offset-4' : ''
              }`}
            >
              {navItems['/'].name}
            </Link>
          </div>

          {/* Right-aligned items */}
          <div className="flex space-x-4">
            {Object.entries(navItems)
              .filter(([path]) => path !== '/')
              .map(([path, { name }]) => (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle py-1 px-2 m-1 ${
                    pathname === path ? 'underline underline-offset-4' : ''
                  }`}
                >
                  {name}
                </Link>
              ))}
          </div>
        </nav>
      </div>
    </aside>
  )
}
