import logo from '../assets/logo.jpg';
import Button from './UI/Button';


export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt="Restaurant Logo" />
                <h1>ReactFood</h1>
            </div>

            <nav>
                <Button>Cart (0)</Button>
            </nav>
        </header>
    );
};