import Link from 'next/link'

const navItems = {
  '/': {
    name: 'Matthias Koch',
  },
  '/blog': {
    name: 'Blog',
  },
  '/projects': {
    name: 'Projects',
  },
  '/about': {
    name: 'About',
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex items-center justify-between px-0 pb-0 fade md:overflow-auto scroll-pr-6"
          id="nav"
        >
          {/* Left-aligned item */}
          <div>
            <Link
              href="/"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle py-1 px-2 m-1"
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
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle py-1 px-2 m-1"
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
