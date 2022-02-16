import './Produit.scss';
import BoutonAjoutPanier from './BoutonAjoutPanier';

export default function Produit(props) {
    //Si l'article est dans le panier, afficher une pastille avec sa qte, sinon elle est 0 et rien ne s'affiche
    let panier = props.panier;
    let setPanier = props.setPanier;
    let qte = 0;
    if(props.panier[props.pid]){
        qte = props.panier[props.pid].qte;
    }

    function ajouterAuPanier(){
        panier[props.pid] = {
            prix: props.prix,
            qte: 1
        };
        console.log("Panier: ", panier);
        //Notifier React que le panier à changé
        setPanier({...panier});
    }

    return(
        <article className='Produit'>
            <img src={"images-produits/" + props.pid + ".webp"} alt= {props.nom} />
            <div className="titre">{props.nom}</div>
            <div className="prix">{props.prix}</div>
            <BoutonAjoutPanier qte={qte} onClick={ajouterAuPanier}/>                    
        </article>
    )
}
