import MainBanner from "../common/MainBanner.tsx";
import Features from "./Features.tsx";
import Register from "./Register.tsx";

function Home() {

    return (
        <>
            <MainBanner/>
            
            {/* INSERCIÓN DEL NUEVO COMPONENTE DE CARACTERÍSTICAS */}
            <Features/> 

            <Register/>
        </>
    );
}

export default Home