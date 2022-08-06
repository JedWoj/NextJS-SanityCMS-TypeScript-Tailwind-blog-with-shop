import CheckoutForm from "../../../components/Checkout/CheckoutForm";
import CheckoutSummary from "../../../components/Checkout/CheckoutSummary";

const checkoutPage = () => {
    return (
        <section className="gradient min-h-screen py-8">
            <CheckoutSummary />
            <CheckoutForm />
        </section>
    )
}

export default checkoutPage;