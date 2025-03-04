import { BlogPosts } from 'app/components/posts'
import { ProjectPosts } from './components/projects'

export default function Page() {
  return (
    <section>
      <div className="mb-8 text-4xl font-semibold">
        <h1 className='mb-4 text-2xl/tight tracking-wide'>Hello.</h1>
        <div className="mb-4 text-xl/tight tracking-tighter"></div>
        <h1>I'm a user experience and interface designer for digital products based in Switzerland</h1>
      </div>
    <div className="mb-4 text-xl/relaxed tracking-normal">
      <p>
        I'm Matthias Koch, a user experience and interface designer currently working <a href="https://google.com" target="_blank" className="text-blue-600 visited:text-purple-600 bg-gray-100 dark:bg-gray-900 rounded-xl px-2 py-1">@Google</a> 
        &nbsp;where I currently focus advertiser experiences to connect creators, customers and businesses
      </p>
      <br></br>
      <p>
        Before Google, I was designing TV and cloud products <a href="https://www.swisscom.ch/de/privatkunden.html" target="_blank" className="text-blue-600 visited:text-purple-600 bg-gray-100 dark:bg-gray-900 rounded-xl px-2 py-1">@Swisscom</a> and corporate websites <a href='https://www.internezzo.ch/'  target="_blank" className="text-blue-600 visited:text-purple-600 bg-gray-100 dark:bg-gray-900 rounded-xl px-2 py-1">@Internezzo</a>
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
