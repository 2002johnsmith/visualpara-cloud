// Features.tsx (Nuevo Archivo)

function Features() {
    return (
        <section className="container my-5">
            <h2 className="text-center mb-5 text-primary">Ventajas de Nuestro Cloud Gaming</h2>
            <div className="row text-center">
                
                {/* Característica 1: Escalabilidad/Cloud */}
                <div className="col-lg-4 mb-4">
                    <div className="p-4 border rounded shadow-sm h-100">
                        <i className="bi bi-cloud-arrow-up-fill text-success fs-1 mb-3"></i> 
                        <h4 className="fw-bold">Escalabilidad Ilimitada</h4>
                        <p className="text-muted">Aprovechamos la infraestructura cloud para soportar miles de usuarios simultáneos sin interrupciones.</p>
                    </div>
                </div>

                {/* Característica 2: Rendimiento/Baja Latencia */}
                <div className="col-lg-4 mb-4">
                    <div className="p-4 border rounded shadow-sm h-100">
                        <i className="bi bi-speedometer2 text-danger fs-1 mb-3"></i> 
                        <h4 className="fw-bold">Rendimiento Extremo</h4>
                        <p className="text-muted">Juega con la máxima calidad gráfica y la mínima latencia gracias a nuestra distribución optimizada.</p>
                    </div>
                </div>
                
                {/* Característica 3: Accesibilidad/Multiplataforma */}
                <div className="col-lg-4 mb-4">
                    <div className="p-4 border rounded shadow-sm h-100">
                        <i className="bi bi-phone-fill text-info fs-1 mb-3"></i> 
                        <h4 className="fw-bold">Acceso Universal</h4>
                        <p className="text-muted">Juega en PC, móvil o tablet. Todo lo que necesitas es un navegador y una buena conexión a internet.</p>
                    </div>
                </div>
            </div>
            {/* Si usas Bootstrap, necesitarás importar los iconos de Bootstrap (ej. 'bootstrap-icons') */}
        </section>
    );
}

export default Features;