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
  }
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
 <div className="lg:sticky lg:top-20">
      {/* Removed inner div, apply flex directly to nav */}
      <nav
        // Use justify-evenly for even distribution across the container width
        className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 justify-between"
        id="nav"
      >
        {/* Map directly inside the nav element */}
        {Object.entries(navItems).map(([path, { name }]) => {
          return (
            <Link
              key={path}
              href={path}
              // Kept original link styling, ensure it works without the inner div context
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle py-1 px-2 m-1"
            >
              {name}
            </Link>
          );
        })}
      </nav>
    </div>
    </aside>
  )
}
