import Link from 'next/link'
import { formatDate, getProjects } from 'app/projects/utils'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ProjectPosts() {
  let allProjects = getProjects()

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.startDate) > new Date(b.metadata.startDate)
          ) {
            return -1
          }
          return 1
        })
        .map((projects) => (
          <Link
            key={projects.slug}
            className="flex items-center justify-between mb-4 bg-white dark:bg-zinc-900 dark:hover:bg-zinc-800 rounded-lg p-6 ring shadow-xl ring-gray-900/5"
            href={`/projects/${projects.slug}`}
          >
            {/* Left: Image and Title */}
            <div className="flex items-center space-x-4">
              {projects.metadata.image && (
                <img
                  src={projects.metadata.image}
                  alt={projects.metadata.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
              )}
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight w-4/4 truncate text-lg">
                {projects.metadata.title}
              </p>
            </div>

            {/* Right: Start Date and End Date */}
            <div className="hidden md:flex flex-col items-end">
              <p className="text-stone-400 dark:text-stone-500 w-4/4 truncate tabular-nums">
                {formatDate(projects.metadata.startDate, false)} - {formatDate(projects.metadata.endDate, false)}
              </p>
            </div>

            {/* Arrow Icon */}
            <div className="block md:hidden">
              <ArrowIcon />
            </div>
          </Link>
        ))}
    </div>
  )
}
