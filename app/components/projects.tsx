import Link from 'next/link'
import { formatDate, getProjects } from 'app/projects/utils'

export function ProjectPosts() {
  let allProjects = getProjects()

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((projects) => (
          <Link
            key={projects.slug}
            className="flex items-center justify-between mb-4 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5"
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
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight text-lg">
                {projects.metadata.title}
              </p>
            </div>

            {/* Right: Date */}
            <div>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                {formatDate(projects.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
