import style from './HomePage.module.css'


export default function HomePage() {

    return (
        <>
             <div className={style['home-style']}>
            <h1>Bienvenue sur TravelDream 🌍 </h1>
            <p> Découvrez le monde avec nos voyages sur mesure !</p>
            </div>
        </>
    )
}