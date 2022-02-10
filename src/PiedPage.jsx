import './PiedPage.scss';

export default function PiedPage() {
    return (
        // Les {} définissent une zone de JS, et la fonction a l'intérieur retourne l'année courante
        // &copy devient le symbole de copyright
        <footer className='PiedPage'>
            &copy;{new Date().getFullYear()} - TIM Maisonneuve - Tous droits réservés
        </footer>
    );
}