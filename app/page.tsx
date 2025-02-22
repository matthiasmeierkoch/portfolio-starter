import { BlogPosts } from 'app/components/posts'
import { ProjectPosts } from './components/projects'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello – I'm a user experience and interface designer for digital products based in Switzerland.
      </h1>
      <p className="mb-4">
        I'm Matthias Koch, a UX designer currently working on <a href="https://ads.google.com" target="_blank">Google Ads</a> 
        where I focus on creating advertiser exoeriences that connect creators, customers and businesses.
        Before Google, I was designing TV and cloud products at Swisscom and a variety of corporate websites at Internezzo
      </p>

    <div className="my-8">
      <h2 className="mb-8 text-lg font-semibold tracking-tighter ">
        Projects I've enjoyed working on:
      </h2>
        <ProjectPosts />
      </div>

      <div className="my-8">
      <h2 className="mb-8 text-lg font-semibold tracking-tighter">
        Blog posts:
      </h2>
        <BlogPosts />
      </div>
    </section>
  )
}
