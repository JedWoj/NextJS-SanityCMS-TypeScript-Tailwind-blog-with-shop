import { useCartCtx } from "../../store/cart-context";
import CartItem from "./CartItem";

const CartModal = () => {
    const { cart } = useCartCtx();

    return (
        <div className="bg-white rounded w-11/12 lg:w-3/4 mx-auto mt-8 p-6 bg-white text-center">
            <h2 className="gradient--text font-semibold text-2xl">
                Shopping Cart
            </h2>
            <section className="mt-4">
                <ul>
                    {cart.map(itm => <CartItem key={itm.id} item={itm} />)}
                </ul>
            </section>
        </div>
    )
}

export default CartModal;