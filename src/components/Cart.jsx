import { createContext, useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from '../store/CartContext';
import Button from './UI/Button';
import { currentFormatter } from '../util/Formatter';


export default function Cart() {
    const cartCtx = useContext(CartContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    return (
        <Modal className='cart'>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.quantity}
                    </li>
                ))}
            </ul>

            <p className="cart-total">{currentFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button>Close</Button>
                <Button>Go to Checkout</Button>
            </p>
        </Modal>
    );
};