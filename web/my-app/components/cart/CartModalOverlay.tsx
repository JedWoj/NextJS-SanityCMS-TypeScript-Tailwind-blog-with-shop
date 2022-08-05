import { useCartCtx } from "../../store/cart-context";
import CartModal from "./CartModal";

const CartModalOverlay = () => {
    const { modalIsOpen, setModalIsOpen } = useCartCtx();

    return (
        <>
            {modalIsOpen && <div className="gradient--opacity w-screen h-screen fixed inset-0">
                <CartModal />
            </div>}
        </>
    )
}

export default CartModalOverlay;