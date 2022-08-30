import { sanityClient } from "../../../../lib/sanity.js";
import ProductsList from "../../components/Products/ProductsList";
import ProductsFilter from "../../components/Products/ProductsFilter";
import { Product } from "../../components/Products/product-type";
import { useShopCtx } from "../../store/shop-context";
import { useEffect } from "react";
import { sortProducts } from "../../components/Products/utils/sorting";

const ShopPage = ({ prod }: { prod: Product[] }) => {
    const { loadMore, loadedProducts, setActiveProducts, activeProducts, setAllProducts, sortingType, filtersTouched } = useShopCtx();

    useEffect(() => {
        if (activeProducts.length === 0 && !filtersTouched) {
            const sortedProd = sortProducts(sortingType, prod)
            setActiveProducts(sortedProd);
            setAllProducts(sortedProd);
        } else {
            const sortedProd = sortProducts(sortingType, activeProducts);
            setActiveProducts(sortedProd)
        }
    }, [prod, sortingType, activeProducts,setAllProducts,setActiveProducts, filtersTouched])

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

export default ShopPage;