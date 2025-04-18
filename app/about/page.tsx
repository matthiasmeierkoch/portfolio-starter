export const metadata = {
  title: 'About Me',
  description: 'Learn more about Matthias Koch, a user experience and interface designer.',
}

export default function Page() {
  return (
    <section className="">
      {/* Profile Section */}
      <div className="flex flex-row items-center space-x-8 bg-white dark:bg-gray-800 rounded-lg p-4 ring shadow-xl ring-gray-900/5">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src="/uploads/profile.png"
            alt="Matthias Koch"
            className="w-40 h-40 md:w-24 md:h-24 rounded-full shadow-lg"
          />
        </div>
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start text-left">
          <h2 className="text-xl tracking-tight text-neutral-900 dark:text-neutral-100 mt-2">
            Matthias Koch
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            UX Designer at{' '}
            <a
              href="https://google.com"
              target="_blank"
              className="text-blue-600 visited:text-purple-600 hover:underline"
            >
              Google
            </a>{' '}
            in Zurich, Switzerland
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-8">
        <h2 className="text-xl text-neutral-900 dark:text-neutral-100">About</h2>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Hi there 👋 I love solving problems with creativity and I do this everyday as a user experience and interface designer. Currently I'm working at{' '}
          <a
            href="https://google.com"
            target="_blank"
            className="text-blue-600 visited:text-purple-600 hover:underline"
          >
            Google
          </a>{' '}
          where I focus on creating advertiser experiences that connect creators, customers, and businesses.
        </p>
      </div>

      {/* Work Experience Section */}
      <div className="mt-12">
        <h2 className="text-xl text-neutral-900 dark:text-neutral-100 mb-4">Work Experience</h2>
        <div className="space-y-6">
          {/* Work Experience Item */}
          <div className="flex flex-row space-x-24 bg-white dark:bg-gray-800 rounded-lg p-6 ring shadow-xl ring-gray-900/5">
            {/* Dates Column */}
            <div className="text-neutral-600 dark:text-neutral-400 w-2/4">
              <p>2021 - Present</p>
            </div>
            {/* Role and Company Column */}
            <div className="text-neutral-900 dark:text-neutral-100 w-2/4 ml-0">
              <p>Interaction Designer at{' '}
                <a
                  href="https://google.com"
                  target="_blank"
                  className="text-blue-600 visited:text-purple-600 hover:underline"
                >
                  Google
                </a>
              </p>
              <p>Zurich, Switzerland</p>
            </div>
          </div>

          {/* Another Work Experience Item */}
          <div className="flex flex-row space-x-24 bg-white dark:bg-gray-800 rounded-lg p-6 ring shadow-xl ring-gray-900/5">
            {/* Dates Column */}
            <div className="text-neutral-600 dark:text-neutral-400 w-2/4">
              <p>2017 - 2020</p>
            </div>
            {/* Role and Company Column */}
            <div className="text-neutral-900 dark:text-neutral-100 w-2/4 ml-0">
              <p>Interaction Designer at{' '}
                <a
                  href="https://www.swisscom.ch/de/privatkunden.html"
                  target="_blank"
                  className="text-blue-600 visited:text-purple-600 hover:underline"
                >
                  Swisscom
                </a>
              </p>
              <p>Zurich, Switzerland</p>
            </div>
          </div>

          {/* Another Work Experience Item */}
          <div className="flex flex-row space-x-24 bg-white dark:bg-gray-800 rounded-lg p-6 ring shadow-xl ring-gray-900/5 mb-16">
            {/* Dates Column */}
            <div className="text-neutral-600 dark:text-neutral-400 w-2/4">
              <p>2015 - 2017</p>
            </div>
            {/* Role and Company Column */}
            <div className="text-neutral-900 dark:text-neutral-100 w-2/4 ml-0">
              <p>Interaction Designer at{' '}
                <a
                  href="https://www.internezzo.ch/"
                  target="_blank"
                  className="text-blue-600 visited:text-purple-600 hover:underline"
                >
                  Internezzo
                </a>
              </p>
              <p>Rotkreuz, Switzerland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
