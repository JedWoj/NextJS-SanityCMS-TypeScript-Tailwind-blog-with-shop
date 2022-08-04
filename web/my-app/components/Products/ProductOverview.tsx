import { product } from "./product-type";
import { urlFor } from "../../../../lib/sanity";
import Image from "next/image";

const ProductOverview = ({ product }: { product: product }) => {
    return (
        <section className="container mx-auto text-center border p-6 lg:px-96 my-4 shadow-2xl">
            <h1 className="text-4xl gradient--text">
                {product.Name}
            </h1>
            <figure className='h-96 relative m-12'>
                <Image layout='fill' objectFit='contain' className='rounded-t-md' src={urlFor(product.image.asset._ref).url()} alt={product.Name} />
            </figure>
            <div className="flex flex-col-reverse gap-8">
                <div className="font-bold text-5xl gradient--text">
                    Price: {product.price}$
                </div>
                <p className="text-justify gradient--text font-semibold">
                    {product.description[0].children[0].text}
                </p>
            </div>
            <button className="bg-emerald-400 text-white rounded py-4 px-6 mt-12">
                Add to cart
            </button>
        </section>
    )
}

export default ProductOverview;