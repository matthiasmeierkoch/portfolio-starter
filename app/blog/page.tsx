import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Projects',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <div className="mb-6">
      </div>
      <BlogPosts/>
    </section>
  )
}
