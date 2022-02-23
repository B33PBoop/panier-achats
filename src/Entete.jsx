import './Entete.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

export default function Entete({panier}) {
    return (
        <header className='Entete'>
            <h1>Magasin général</h1>
            <nav>
                <Badge badgeContent={Object.values(panier).reduce((acc, article) => acc+article.qte, 0)} color='primary'>
                    <ShoppingCartIcon />
                </Badge>
                <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}