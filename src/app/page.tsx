import Link from 'next/link'

const Home = () => {
  return (
    <main>
      <div>
        <h1>Welcome to Stuart Hicks'</h1>
        <p>
          View previous projects demonstrating my frontend experience and take
          the opportunity to <Link href="/contact">Contact Me</Link>.
        </p>
      </div>
    </main>
  )
}

export default Home
