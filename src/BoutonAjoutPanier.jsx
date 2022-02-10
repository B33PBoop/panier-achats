import './BoutonAjoutPanier.scss';
import Badge from '@mui/material/Badge';


export default function BoutonAjoutPanier(){
return (
    <Badge badgeContent={12} color='primary'>
        <button className='BoutonAjoutPanier'>Ajouter au panier</button>
    </Badge>
    )
}