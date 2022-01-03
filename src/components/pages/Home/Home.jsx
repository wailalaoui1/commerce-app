import BCarousel  from './BCarousel';
import BestSellers from './BestSellers';
import FeaturedProducts from './FeaturedProducts';
import Testimonials from './Testimonials';
import './Home.css';

const Home = ({ products, onAddToCart }) => {
    return (
        <>
            <BCarousel />
            <BestSellers products={products} />
            <FeaturedProducts onAddToCart={onAddToCart} products={products} />
            <Testimonials />
        </>
    )
}

export default Home



