import Link from 'next/link'
import { formatDate, getProjects } from 'app/projects/utils'

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
            className="flex items-center justify-between mb-4 bg-white dark:bg-zinc-900 dark:hover:bg-zinc-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5"
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
            <div className="flex flex-col items-end">
              <p className="text-stone-400 dark:text-stone-500 w-4/4 truncate tabular-nums">
              {formatDate(projects.metadata.startDate, false)} - {formatDate(projects.metadata.endDate, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
