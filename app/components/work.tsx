import Link from 'next/link'

export function WorkExperience() {
  return (
    <section>
      {/* Work Experience Section */}
      <div className="mt-12">
        <h2 className="mb-4 text-stone-400 dark:text-stone-500">Work Experience</h2>
        <div className="space-y-6">
          {/* Work Experience Item */}
          <div className="flex flex-row space-x-24 bg-white dark:bg-zinc-900 rounded-lg p-6 ring shadow-xl ring-gray-900/5">
            {/* Dates Column */}
            <div className="text-neutral-600 dark:text-neutral-400 w-2/4">
              <p>2021 - Present</p>
            </div>
            {/* Role and Company Column */}
            <div className="text-neutral-900 dark:text-neutral-100 w-2/4 ml-0">
              <p>
                Interaction Designer at{' '}
                <a
                  href="https://google.com"
                  target="_blank"
                  className="text-blue-600 visited:text-purple-600 hover:underline"
                >
                  Google
                </a>
              </p>
              <p>Zürich, Switzerland</p>
            </div>
          </div>

          {/* Another Work Experience Item */}
          <div className="flex flex-row space-x-24 bg-white dark:bg-zinc-900 rounded-lg p-6 ring shadow-xl ring-gray-900/5">
            {/* Dates Column */}
            <div className="text-neutral-600 dark:text-neutral-400 w-2/4">
              <p>2019 - 2021</p>
            </div>
            {/* Role and Company Column */}
            <div className="text-neutral-900 dark:text-neutral-100 w-2/4 ml-0">
              <p>
                Interaction Designer at{' '}
                <a
                  href="https://www.swisscom.ch/de/privatkunden.html"
                  target="_blank"
                  className="text-blue-600 visited:text-purple-600 hover:underline"
                >
                  Swisscom
                </a>
              </p>
              <p>Zürich, Switzerland</p>
            </div>
          </div>

          {/* Another Work Experience Item */}
          <div className="flex flex-row space-x-24 bg-white dark:bg-zinc-900 rounded-lg p-6 ring shadow-xl ring-gray-900/5 mb-16">
            {/* Dates Column */}
            <div className="text-neutral-600 dark:text-neutral-400 w-2/4">
              <p>2017 - 2019</p>
            </div>
            {/* Role and Company Column */}
            <div className="text-neutral-900 dark:text-neutral-100 w-2/4 ml-0">
              <p>
                Interaction Designer at{' '}
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
