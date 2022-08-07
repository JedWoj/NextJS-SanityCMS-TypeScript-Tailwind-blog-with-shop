import Link from "next/link";
import { Popup } from "./CheckoutForm";

const CheckoutPopup = ({ popupHandler }: Popup) => {
    return (
        <div className="fixed inset-0 gradient">
            <div className="bg-white mx-6 sm:mx-20 rounded p-4 md:px-10 md:py-6 lg:w-2/3 xl:w-1/2 xl:w-1/3 lg:mx-auto shadow-2xl text-center mt-52">
                <p className="gradient--text mb-12 text-3xl">
                    Thank you for your purchase!
                </p>
                <Link href="/">
                    <div className="text-white gradient--rotated w-20 text-center font-bold rounded py-2 mx-auto cursor-pointer" onClick={() => popupHandler(false)}>
                        Ok
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CheckoutPopup;