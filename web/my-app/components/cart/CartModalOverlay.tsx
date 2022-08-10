import { useCartCtx } from "../../store/cart-context";
import CartModal from "./CartModal";

const CartModalOverlay = () => {
    const { modalIsOpen, setModalIsOpen } = useCartCtx();

    return (
        <>
            {modalIsOpen && <div onClick={setModalIsOpen} className="z-20 gradient--opacity w-screen h-screen fixed inset-0">
                <CartModal />
            </div>}
        </>
    )
}

export default CartModalOverlay;