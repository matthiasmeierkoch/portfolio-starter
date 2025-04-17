import Link from 'next/link'
import { formatDate, getProjects} from 'app/projects/utils'

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
            className="flex flex-col space-y-1 mb-4 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5"
            href={`/projects/${projects.slug}`}
          >
      <div className='w-full flex flex-col md:flex-row space-x-0 md:space-x-2 justify-between'>
        <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">              
            <p className=" text-xl text-neutral-900 dark:text-neutral-100 tracking-tight">
                {projects.metadata.title}
            </p>
          </div>
          <div className='w-full flex flex-col md:flex-row justify-end'>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                {formatDate(projects.metadata.publishedAt, false)}
              </p>  
          </div>
        </div>
          </Link>
        ))}
    </div>
  )
}
