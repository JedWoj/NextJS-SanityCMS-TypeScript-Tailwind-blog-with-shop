import Link from "next/link";
import { useCartCtx } from "../../store/cart-context";

const CheckoutForm = () => {
    const { clearCart } = useCartCtx();

    return (
        <form className="flex flex-col mx-6 sm:mx-20 rounded gradient--reversed p-4 md:px-10 md:py-6 lg:w-2/3 xl:w-1/2 lg:mx-auto shadow-2xl text-white">
            <label htmlFor="first-name">
                First name
            </label>
            <input className="outline-0 text-cyan-600 p-2 rounded" type='text' id="first-name" />
            <label htmlFor="second-name">
                Second name
            </label>
            <input className="outline-0 text-purple-600 p-2 rounded" type='text' id="second-name" />
            <label htmlFor="email">
                Your email
            </label>
            <input className="outline-0 text-pink-600 p-2 rounded" type='email' id="email" />
            <label htmlFor="city">
                Your city
            </label>
            <input className="outline-0 text-orange-600 p-2 rounded" type='text' id="city" />
            <label htmlFor="adress">
                Your adress
            </label>
            <input className="outline-0 text-red-600 p-2 rounded" type='text' id="adress" />
            <div className="flex gap-2 rounded mt-6 text-center font-bold text-lg justify-evenly">
                <div className="bg-white w-1/2 sm:w-1/4">
                    <button className="gradient--text w-full py-2 cursor-pointer">
                        Pay
                    </button>
                </div>
                <Link href='/shop'>
                    <div className="bg-white w-1/2 sm:w-1/4 cursor-pointer">
                        <p className="gradient--text py-2">
                            Cancel
                        </p>
                    </div>
                </Link>
            </div>
        </form>
    )
}

export default CheckoutForm;