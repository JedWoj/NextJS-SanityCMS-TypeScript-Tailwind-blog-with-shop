import { useCartCtx } from "../../store/cart-context";

const CheckoutSummary = () => {
    const { totalAmount, cart } = useCartCtx();

    return (
        <div className="bg-white mx-6 sm:mx-20 rounded gradient--rotated p-4 md:px-10 md:py-6 lg:w-2/3 xl:w-1/2 lg:mx-auto shadow-2xl text-white mb-8 text-center">
            <h1 className="font-semibold text-3xl sm:text-4xl">
                Checkout Summary
            </h1>
            <div className="flex mt-6 font-semibold text-xl">
                <p className="ml-auto">
                    Total price: {totalAmount}$
                </p>
                <p className="ml-6 mr-auto">
                    Items: {cart.map(item => item.quantity).reduce((a, b) => a + b, 0)}
                </p>
            </div>
        </div>
    )
}

export default CheckoutSummary;