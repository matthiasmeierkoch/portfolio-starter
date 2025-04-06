import { BlogPosts } from 'app/components/posts'
import { ProjectPosts } from './components/projects'

export default function Page() {
  return (
    <section>
        <h1>User experience and interface designer for digital products based in Switzerland</h1>
        <br></br>
    <div className="mb-4 text-xl/relaxed tracking-normal">
      <p>
        Hello, nice to meet you – I'm Matthias Koch, a user experience and interface designer currently working <a href="https://google.com" target="_blank" className="text-blue-600 visited:text-purple-600 bg-gray-100 dark:bg-gray-900 rounded-xl px-2 py-1">@Google</a> 
        where I focus on creating advertiser experiences that connect creators, customers and businesses
      </p>
      <p>
        Before Google, I was designing TV and cloud products <a href="https://www.swisscom.ch/de/privatkunden.html" target="_blank" className="text-blue-600 visited:text-purple-600 bg-gray-100 dark:bg-gray-900 rounded-xl px-2 py-1">@Swisscom</a> and custom web solutions <a href='https://www.internezzo.ch/'  target="_blank" className="text-blue-600 visited:text-purple-600 bg-gray-100 dark:bg-gray-900 rounded-xl px-2 py-1">@Internezzo</a>
      </p>
    </div>
    <div className="my-8">
      <h2 className="mb-8 text-lg font-semibold ">
        Projects I've enjoyed working on:
      </h2>
        <ProjectPosts />
      </div>

      <div className="my-8">
      <h2 className="mb-8 text-lg font-semibold">
        Blog posts:
      </h2>
        <BlogPosts />
      </div>
    </section>
  )
}
