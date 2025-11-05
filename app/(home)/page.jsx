import HeroSection from './components/HeroSection'
import HomeItem from './components/HomeItem'

export default async function Home() {
  return (
    <>
      <div className='px-4'>
        <HeroSection />

        <HomeItem />
      </div>
    </>
  )
}
