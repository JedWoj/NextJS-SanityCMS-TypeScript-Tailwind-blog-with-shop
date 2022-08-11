import { useState } from "react";
import CheckoutForm from "../../../components/Checkout/CheckoutForm";
import CheckoutSummary from "../../../components/Checkout/CheckoutSummary";
import CheckoutPopup from "../../../components/Checkout/CheckoutPopup";

const CheckoutPage = () => {
    const [popupIsOpen, setPopupIsOpen] = useState(false);

    return (
        <section className="gradient min-h-screen py-8">
            <CheckoutSummary />
            <CheckoutForm popupHandler={setPopupIsOpen} />
            {popupIsOpen && <CheckoutPopup popupHandler={setPopupIsOpen} />}
        </section>
    )
}

export default CheckoutPage;