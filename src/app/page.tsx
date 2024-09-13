import Link from 'next/link'
import HeroImage from '../components/hero-image'
import InfoCard from '../components/info-card'

const Home = () => {
  return (
    <main>
      <div>
        <h1>Welcome to Stuart Hicks`apos;`</h1>
        <p>
          View previous projects demonstrating my frontend experience and take
          the opportunity to <Link href="/contact">Contact Me</Link>.
        </p>
        <HeroImage />
        <div>
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </div>
    </main>
  )
}

export default Home
