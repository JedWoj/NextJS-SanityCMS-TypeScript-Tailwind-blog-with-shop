import Product from './Product';
import { useShopCtx } from "../../store/shop-context";
import ProductsSort from './ProductsSort';
import { useEffect } from 'react';

const ProductsList = () => {
    const { loadedProducts, activeProducts } = useShopCtx();

    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                {activeProducts.length !== 0 ? <div className='flex justify-center'>
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                        Check our great offers
                    </h2>
                    <ProductsSort />
                </div> : <h2 className="text-2xl font-extrabold tracking-tight text-red-900">
                    0 products found! Please change your filters!
                </h2>}
                <ul className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {activeProducts.slice(0, loadedProducts).map((product) => <Product key={product._id} product={product} />)}
                </ul>
            </div>
        </div>
    )
}

export default ProductsList;