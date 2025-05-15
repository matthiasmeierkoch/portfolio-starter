import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Projects',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <div className="mb-6">
       <h1 className="font-semibold text-2xl tracking-tighter">Blog</h1>
      </div>
      <BlogPosts/>
    </section>
  )
}
