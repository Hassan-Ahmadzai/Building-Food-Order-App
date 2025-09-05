import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/Formatter";
import Input from "./Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";


export default function Checkout() {
    const cartCtx =  useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    function handleClose() {
        userProgressCtx.hideCart();
    };

    function handleGoToCheckout() {
        userProgressCtx.showCheckout();
    };

    return (
        <Modal open={userProgressCtx.progress === 'checkout'}>
            <form>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

                <Input 
                    id="full-name"
                    label='Full Name'
                    type="text"
                />
                <Input 
                    id="email"
                    label="E-Mail Address"
                    type="email"
                />
                <Input 
                    id="street"
                    label="Street"
                    type="text"
                />

                <div className="control-row">
                    <Input 
                        id="postal-code"
                        label="Postal Code"
                        type="text"
                    />
                    <Input 
                        id="city"
                        label="City"
                        type="text"
                    />
                </div>

                <p className="modal-actions">
                    <Button 
                        type='button'
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                    <Button>Submit Order</Button>
                </p>
            </form>
        </Modal>
    );
};