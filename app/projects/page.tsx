import { BlogPosts } from 'app/components/posts'
import { ProjectPosts } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'Projects I have enjoyed working on.',
}

export default function Page() {
  return (
    <section>
      <div className="mb-6">
      <h1 className="font-semibold text-2xl tracking-tighter">Projects</h1>
      </div>
      <ProjectPosts/>
    </section>
  )
}
