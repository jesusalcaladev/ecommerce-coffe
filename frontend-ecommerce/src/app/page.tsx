import BannerDiscount from '@/components/banner-discount'
import BannerProducts from '@/components/banner-products'
import ChooseCategory from '@/components/choose-category'
import FeacturedProducts from '@/components/feactured-products'
import HeroSection from '@/components/hero-section'

export default function Home() {
  return (
    <div className='bg-white dark:bg-neutral-950'>
      <HeroSection />
      <div id='featured'>
        <FeacturedProducts />
      </div>
      <BannerDiscount />
      <div className='bg-gray-50 dark:bg-neutral-950 py-8'>
        <ChooseCategory />
      </div>
      <BannerProducts />
    </div>
  )
}
