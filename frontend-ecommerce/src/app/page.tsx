import BannerDiscount from '@/components/banner-discount'
import BannerProducts from '@/components/banner-products'
import CaroucelTextBanner from '@/components/caroucel-text-banner'
import ChooseCategory from '@/components/choose-category'
import FeacturedProducts from '@/components/feactured-products'

export default function Home() {
  return (
    <div>
      <CaroucelTextBanner />
      <FeacturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerProducts />
    </div>
  )
}
