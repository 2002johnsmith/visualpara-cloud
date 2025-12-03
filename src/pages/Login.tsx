import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect } from "react";

function Login() {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "/LoginUnity/Loginunity.loader.js",
        dataUrl: "/LoginUnity/Loginunity.data",
        frameworkUrl: "/LoginUnity/Loginunity.framework.js",
        codeUrl: "/LoginUnity/Loginunity.wasm",
    });

    useEffect(() => {
        console.log("Estado Unity:", { isLoaded, loadingProgression });
    }, [isLoaded, loadingProgression]);

    return (
        <div className="centered-container">
            {!isLoaded && (
                <div style={{ padding: "20px", textAlign: "center", color: "#fff", minHeight: "600px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <p>Cargando... {(loadingProgression * 100).toFixed(0)}%</p>
                </div>
            )}
            {isLoaded && (
                <Unity 
                    unityProvider={unityProvider} 
                    className="centered-unity"
                    style={{ width: "100%", maxWidth: "800px", height: "600px" }}
                />
            )}
        </div>
    );
}

export default Login;
