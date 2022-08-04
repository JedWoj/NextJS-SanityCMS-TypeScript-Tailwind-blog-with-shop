import { urlFor } from '../../../../lib/sanity';
import { product } from './product-type';
import Link from 'next/link';

const Product = ({ product }: { product: product }) => {
    return (
        <Link href={`shop/products/${product.slug.current}`}>
            <li className="group relative cursor-pointer">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                        src={urlFor(product.image.asset._ref).url()}
                        alt={product.Name}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.Name}
                        </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}$</p>
                </div>
            </li>
        </Link>
    )
}

export default Product;