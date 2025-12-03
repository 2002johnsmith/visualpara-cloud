import './HomeHero.css';

function HomeHero() {
    return (
        <section className="home-hero">
            <div className="container hero-content">
                <h1 className="hero-title">Bienvenido al Portal VR</h1>
                <p className="hero-subtitle">
                    Explora experiencias inmersivas, videojuegos en la nube y soluciones modernas
                    desarrolladas por estudiantes de Tecsup.
                </p>
                <a href="#games-section" className="hero-button">
                    Explorar Juegos
                </a>
            </div>
        </section>
    );
}

export default HomeHero;
