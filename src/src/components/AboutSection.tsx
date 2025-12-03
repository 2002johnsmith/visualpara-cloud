import "./AboutSection.css";

function AboutSection() {
    return (
        <section className="about-section">
            <div className="container about-content">
                <div className="about-text">
                    <h2 className="about-title">Sobre el Proyecto</h2>
                    <p className="about-description">
                        Este portal reúne experiencias interactivas, videojuegos en la nube y
                        proyectos desarrollados por estudiantes de Tecsup, integrando tecnologías
                        modernas como Unity, Realidad Virtual y despliegue web en soluciones cloud.
                    </p>
                </div>

                <div className="about-card">
                    <h3 className="card-title">Tecsup</h3>
                    <p className="card-text">
                        Institución líder en tecnología, innovación y desarrollo digital.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
