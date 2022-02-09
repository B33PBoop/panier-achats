import './PiedPage.css';

export default function PiedPage() {
    return (
        // Les {} définissent une zone de JS, et la fonction a l'intérieur retourne l'année courante
        // &copy devient le symbole de copyright
        <footer>
            &copy;{new Date().getFullYear()} - TIM Maisonneuve - Tous droits réservés
        </footer>
    );
}