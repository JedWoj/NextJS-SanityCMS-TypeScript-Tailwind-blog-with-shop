import { sanityClient } from "../../../../lib/sanity";
import ProductsList from "../../components/Products/ProductsList";
import { product } from "../../components/Products/product-type";

const shopPage = ({ products }: { products: product[] }) => {
    return (
        <section className="text-center">
            <ProductsList products={products} />
            <button className="gradient text-white px-6 py-4 rounded mb-4">
                Load more
            </button>
        </section>

    )
}

export const getStaticProps = async () => {
    const productsQuery = `*[_type == 'product'] {
        price,
        _id,
        description,
        slug,
        image,
        Name
      }`;

    const products = await sanityClient.fetch(productsQuery);
    return { props: { products } }
}

export default shopPage;