import Link from 'next/link'

export function EducationExperience() {
  return (
    <section>
      {/* Education Section */}
      <div className="mt-12">
        <h2 className="mb-4 text-stone-400 dark:text-stone-400">Education</h2>
        <div className="space-y-6">
          {/* Education Item */}
          <div className="flex flex-row space-x-24 bg-white dark:bg-zinc-900 rounded-lg p-6 ring shadow-xl ring-gray-900/5">
            {/* Dates Column */}
            <div className="text-neutral-600 dark:text-neutral-400 w-2/4">
              <p>2021 - 2022</p>
            </div>
            {/* Education Column */}
            <div className="text-neutral-900 dark:text-neutral-100 w-2/4 ml-0">
              <p>
                CAS User Research and Visioning{' '}
                <a
                  href="https://www.ost.ch/de/weiterbildung/weiterbildungsangebot/informatik/ux-human-computer-interaction/cas-ux-research"
                  target="_blank"
                  className="text-blue-500 visited:text-purple-600 hover:underline"
                >
                  Ostschweizer Fachhochschule
                </a>
              </p>
              <p>Rapperswil, Switzerland</p>
            </div>
          </div>

          {/* Another Education Item */}
          <div className="flex flex-row space-x-24 bg-white dark:bg-zinc-900 rounded-lg p-6 ring shadow-xl ring-gray-900/5 mb-16">
            {/* Dates Column */}
            <div className="text-neutral-600 dark:text-neutral-400 w-2/4">
              <p>2017 - 2020</p>
            </div>
            {/* Education Column */}
            <div className="text-neutral-900 dark:text-neutral-100 w-2/4 ml-0">
              <p>
                Higher education for communication design, focus on Interaction Desig{' '}
                <a
                  href="https://sfgz.ch/angebot/weiterbildung/hoehere-fachschule/IAD"
                  target="_blank"
                  className="text-blue-500 visited:text-purple-600 hover:underline"
                >
                  School for design Zürich
                </a>
              </p>
              <p>Zürich, Switzerland</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
