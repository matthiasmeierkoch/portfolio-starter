import { BlogPosts } from 'app/components/posts'
import { ProjectPosts } from './components/projects'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
        Hello – I'm a user experience and interface designer for digital products based in Switzerland.
      </h1>
    <div className="mb-4 text-xl">
      <p>
        I'm Matthias Koch, a UX designer currently working on <a href="https://ads.google.com" target="_blank">Google Ads</a> 
        &nbsp;where I focus on creating advertiser experiences that connect creators, customers and businesses.</p>
      <p>
        Before Google, I was designing TV and cloud products at Swisscom and a variety of corporate websites at Internezzo
      </p>
    </div>
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
