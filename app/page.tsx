import { BlogPosts } from 'app/components/posts'
import { ProjectPosts } from './components/projects'

export default function Page() {
  return (
    <section className="text-stone-900 dark:text-stone-200">
        <h1>User experience and interface designer for digital products based in Switzerland</h1>
        <br></br>
      <div className='mb-16'>
        <h2 className='text-stone-400 dark:text-stone-400'>
        18.04.2025 – Zürich, Switzerland
      </h2>
      </div>
    <div className="text-lg mb-16 relaxed tracking-normal">
      <p>
        Hello – I'm Matthias Koch, user experience and interface designer currently working at <a href="https://google.com" target="_blank" className="text-blue-600 visited:text-purple-600 hover:underline">Google</a> 
        , where I focus on creating advertiser experiences that connect creators, customers and businesses
      </p>
      <p>
        Before Google, I was designing TV and cloud products at <a href="https://www.swisscom.ch/de/privatkunden.html" target="_blank" className="text-blue-600 visited:text-purple-600 hover:underline">Swisscom</a> and custom web solutions at <a href='https://www.internezzo.ch/'  target="_blank" className="text-blue-600 visited:text-purple-600 hover:underline">internezzo</a>
      </p>
    </div>

    <div className="my-8">
      <h2 className="mb-4 text-stone-400 dark:text-stone-400">
        Projects
      </h2>
        <ProjectPosts />
      </div>

      <div className="my-8">
      <h2 className="mb-4 text-stone-400 dark:text-stone-400">
        Blog posts
      </h2>
        <BlogPosts />
      </div>
    </section>
  )
}
