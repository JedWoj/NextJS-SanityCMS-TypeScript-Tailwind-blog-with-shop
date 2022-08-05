import Link from "next/link";
import { useCartCtx } from "../../store/cart-context";
import CartItem from "./CartItem";

const CartModal = () => {
    const { cart, setModalIsOpen } = useCartCtx();

    return (
        <div className="bg-white rounded w-11/12 lg:w-3/4 2xl:w-1/2 relative mx-auto mt-8 p-6 bg-white text-center">
            <div onClick={setModalIsOpen} className="absolute text-red-700 font-bold text-2xl top-4 right-8 cursor-pointer">
                X
            </div>
            {cart.length > 0 && <section>
                <h2 className="gradient--text font-semibold text-2xl">
                    Shopping Cart
                </h2>
                <ul className="mt-4">
                    {cart.map(itm => <CartItem key={itm.id} item={itm} />)}
                </ul>
                <button onClick={setModalIsOpen} className="gradient text-white mt-6 rounded px-8 py-3 font-semibold">
                    Checkout
                </button>
            </section>}
            {cart.length === 0 && <>
                <h2 className="text-5xl font-semibold gradient--text pb-10">
                    Your cart is empty!
                </h2>
                <button onClick={setModalIsOpen} className="gradient rounded py-4 px-2 mt-20 text-white font-semibold">
                    Continue shopping
                </button>
            </>}
        </div>
    )
}

export default CartModal;