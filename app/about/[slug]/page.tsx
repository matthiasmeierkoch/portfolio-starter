import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  // Define static slugs for the "about" page
  return [
    { slug: 'team' },
    { slug: 'company' },
    { slug: 'mission' },
  ]
}

export function generateMetadata({ params }) {
  const aboutPages = {
    team: {
      title: 'About Our Team',
      description: 'Learn more about the people behind our work.',
    },
    company: {
      title: 'About Our Company',
      description: 'Discover the story of our company and what drives us.',
    },
    mission: {
      title: 'Our Mission',
      description: 'Understand our goals and the values we stand for.',
    },
  }

  const page = aboutPages[params.slug]

  // Return 404 metadata if the slug is not found
  if (!page) {
    return
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'website',
      url: `${baseUrl}/about/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
    },
  }
}

export default function AboutPage({ params }) {
  const aboutPages = {
    team: {
      title: 'About Our Team',
      content: 'Meet the talented individuals who make everything possible.',
    },
    company: {
      title: 'About Our Company',
      content: 'Our company was founded with the goal of making a difference.',
    },
    mission: {
      title: 'Our Mission',
      content: 'We strive to create meaningful impact through our work.',
    },
  }

  const page = aboutPages[params.slug]

  // Return 404 if the slug is not found
  if (!page) {
    notFound()
  }

  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {page.title}
      </h1>
      <article className="prose mt-4">
        <p>{page.content}</p>
      </article>
    </section>
  )
}