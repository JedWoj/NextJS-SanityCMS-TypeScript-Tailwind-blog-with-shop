import { sanityClient } from "../../../../lib/sanity";
import ProductsList from "../../components/Products/ProductsList";
import ProductsFilter from "../../components/Products/ProductsFilter";
import { product } from "../../components/Products/product-type";
import { useShopCtx } from "../../store/shop-context";
import { useEffect } from "react";
import { sortProducts } from "../../components/Products/utils/sorting";

const shopPage = ({ prod }: { prod: product[] }) => {
    const { loadMore, loadedProducts, setActiveProducts, activeProducts, setAllProducts, sortingType } = useShopCtx();

    useEffect(() => {
        const sortedProd = sortProducts(sortingType, prod)
        setActiveProducts(sortedProd);
        setAllProducts(sortedProd);
    }, [prod])

    return (
        <section className="text-center">
            <ProductsFilter />
            <ProductsList />
            {activeProducts.length > loadedProducts && <button onClick={loadMore} className="gradient text-white px-6 py-4 rounded mb-4">
                Load more
            </button>}
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
        Name,
        gender,
        category
      }`;

    const prod = await sanityClient.fetch(productsQuery);
    return { props: { prod }, revalidate: 120 }
}

export default shopPage;