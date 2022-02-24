import './Entete.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

export default function Entete({panier}) {

    //obtenire les 5 infos importantes pour le sommaire
    const {articlesDifferents, articlesTotaux, sousTotal, taxes, total} = calculerInfoPanier(Object.values(panier));

    return (
        <header className='Entete'>
            <h1>Magasin général</h1>
            <nav>
                <input type="checkbox" id='cc-sommaire-panier'/>
                <div className="sommaire-panier">
                    <h3>Sommaire du panier</h3>
                    <div><span>Articles Différents</span><span>{articlesDifferents}</span></div>
                    <div><span>Articles Totaux</span>{articlesTotaux}</div>
                    <div><span>Sous-total</span><span>{sousTotal}</span></div>
                    <div><span>Taxes</span><span></span>{taxes}</div>
                    <div><span>Total</span><span></span>{total}</div>
                </div>

                <Badge badgeContent={articlesTotaux} color='primary'>
                    <label htmlFor="cc-sommaire-panier"><ShoppingCartIcon /></label>
                </Badge>
                <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}

/** 
* Calculer l'info du sommaire
* @param Array panierAchats Objet panier d'achat
* @returns Object Objet contenant les 5 info requises du panier
*/

function calculerInfoPanier(panierAchats){
    const _sousTotal = panierAchats.reduce((acc, courant) => acc+courant.qte*courant.prix, 0);
    const _taxes = _sousTotal * 0.14975;

    return{
        articlesDifferents: panierAchats.length,
        articlesTotaux: panierAchats.reduce((acc, courant) => acc + courant.qte, 0),
        sousTotal: _sousTotal.toFixed(2),
        taxes: _taxes.toFixed(2),
        total: (_sousTotal + _taxes).toFixed(2)
    }
}