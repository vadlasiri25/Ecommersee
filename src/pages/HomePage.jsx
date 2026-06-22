import HeroBanner from '../components/home/HeroBanner';
import TopCategories from '../components/home/TopCategories';
import TrendingCollection from '../components/home/TrendingCollection';
import FlashSale from '../components/home/FlashSale';
import BrandsSection from '../components/home/BrandsSection';
import NewArrivals from '../components/home/NewArrivals';
import BestSellers from '../components/home/BestSellers';
import RecommendedForYou from '../components/home/RecommendedForYou';
import FeaturedBrands from '../components/home/FeaturedBrands';
import CustomerReviews from '../components/home/CustomerReviews';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroBanner />
      <TopCategories />
      <TrendingCollection />
      <FlashSale />
      <BrandsSection />
      <NewArrivals />
      <BestSellers />
      <RecommendedForYou />
      <FeaturedBrands />
      <CustomerReviews />
    </div>
  );
}
