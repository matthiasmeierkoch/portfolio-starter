import React from 'react'
import { WorkExperience } from 'app/components/work' // Correctly import the WorkExperience component
import { EducationExperience } from 'app/components/education' // Correctly import the WorkExperience component

export const metadata = {
  title: 'About Me',
  description: 'Learn more about Matthias Koch, a user experience and interface designer.',
}

export default function Page() {
  return (
    <section className="">
      {/* Profile Section */}
      <div className="flex items-center bg-white dark:bg-zinc-900 rounded-lg p-6 ring shadow-xl ring-gray-900/5">
        {/* Image Section */}
        <div className="shrink-0">
          <img
            src="/uploads/profile.png"
            alt="Matthias Koch"
            className="w-16 h-16 md:w-24 md:h-24 rounded-full shadow-lg"
          />
        </div>
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start text-left ml-4 md:ml-8">
          <h2 className="text-xl text-neutral-900 dark:text-neutral-100 mt-2">
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
            in Zurich, Switzerland.
          </p>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-8">
        <h2 className="mb-4 text-stone-400 dark:text-stone-500">About</h2>
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
      <WorkExperience /> {/* Correctly use the WorkExperience component */}
      {/* Work Experience Section */}
      <EducationExperience /> {/* Correctly use the WorkExperience component */}
    </section>
  )
}
