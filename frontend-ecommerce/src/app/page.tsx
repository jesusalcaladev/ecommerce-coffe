import BannerDiscount from '@/components/banner-discount'
import CaroucelTextBanner from '@/components/caroucel-text-banner'
import FeacturedProducts from '@/components/feactured-products'

export default function Home() {
  return (
    <div>
      <CaroucelTextBanner />
      <FeacturedProducts />
      <BannerDiscount />
    </div>
  )
}
