function weekdayGreeting() {
  const weekdays = [
    'Sunday 🧘',
    'Monday 🚀',
    'Tuesday ✨',
    'Wednesday 🙃',
    'Thursday 🥳',
    'Friday 🎉',
    'Saturday 🎊',
  ]
  const today = new Date().getDay()
  return `Happy ${weekdays[today]}`
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Left: Weekday Greeting */}
        <p className="text-neutral-600 dark:text-neutral-300">
          {weekdayGreeting()}
        </p>

        {/* Right: Social Links */}
        <div className="mb-8 flex flex-col items-start md:items-end">
          <ul className="font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/matthiasmkoch/"
              >
                <ArrowIcon />
                <p className="ml-2 h-7">LinkedIn</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/matthiasmeierkoch"
              >
                <ArrowIcon />
                <p className="ml-2 h-7">Github</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://unsplash.com/de/@matthiasmeierkoch/"
              >
                <ArrowIcon />
                <p className="ml-2 h-7">Unsplash</p>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Center-Aligned MIT License */}
      <p className="text-center mb-2 text-stone-400 dark:text-stone-500 ">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  )
}
