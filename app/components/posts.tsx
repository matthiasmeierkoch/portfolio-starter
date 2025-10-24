import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div>
      <h2 className="mb-6 mt-10 text-stone-400 dark:text-stone-400 text-lg">
        Sometimes I write about things 
      </h2>
      
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex items-center justify-between mb-4 bg-white dark:bg-neutral-950 dark:hover:bg-neutral-800 rounded-lg p-6 ring shadow-xl ring-gray-900/5"
            href={`/blog/${post.slug}`}
          >
            {/* Title on the left */}
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight text-lg w-2/4 truncate">
              {post.metadata.title}
            </p>

            {/* Date on the right */}
            <p className="text-neutral-600 dark:text-neutral-400 w-2/4 truncate text-right tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </p>
          </Link>
        ))}
    </div>
  )
}
