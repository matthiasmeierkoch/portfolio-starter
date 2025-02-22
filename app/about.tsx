import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Matthias Koch – UX Design." />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to our About page. Here you can learn more about our mission and values.
        </p>
      </main>
    </>
  )
}