import { item } from "../../store/cart-context";
import Image from "next/image";
import { urlFor } from "../../libs/sanity";
import { useCartCtx } from "../../store/cart-context";

const CartItem = ({ item }: { item: item }) => {
    const { removeFromCart, addToCart } = useCartCtx();
    return (
        <li className="flex gradient--text items-center pb-2 mb-2 border-b-2">
            <Image className='rounded-t-md' src={urlFor(item.image)!} alt={item.image} width={70} height={70} />
            <p className="w-7/8 self-center ml-2 md:ml-6 gradient--text">
                {item.name}
            </p>
            <p className="mx-2 gradient--text font-semibold self-center text-2xl md:text-4xl ml-auto">
                {item.price * item.quantity}$
            </p>
            <div className="flex justify-center items-center">
                <button onClick={removeFromCart.bind(null, item)} className="font-bold text-3xl px-1 md:px-2">
                    -
                </button>
                <div className="border translate-y-1 w-8 h-8 flex items-center justify-center mx-2 md:mx-4">
                    <p className="gradient--text cursor-default">
                        {item.quantity}
                    </p>
                </div>
                <button onClick={addToCart.bind(null, item)} className="font-bold text-3xl px-1 md:px-2">
                    +
                </button>
            </div>
        </li>
    )
}

export default CartItem;