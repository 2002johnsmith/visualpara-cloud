// Game.jsx
import { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
    const { unityProvider, unload } = useUnityContext({
        loaderUrl: "/Cartas/Cartas.loader.js",
        dataUrl: "/Cartas/Cartas.data.br",
        frameworkUrl: "/Cartas/Cartas.framework.js.br",
        codeUrl: "/Cartas/Cartas.wasm.br",
    });

    useEffect(() => {
        return () => {
            // Detener reproducción de audio antes de descargar
            try {
                const AudioCtx = (window as any).AudioContext || (window as any).webkitAudioContext;
                if (AudioCtx && AudioCtx.prototype) {
                    const instances = (AudioCtx.prototype.constructor as any).instances || [];
                    instances.forEach((ctx: any) => {
                        if (ctx && typeof ctx.close === 'function') {
                            try { ctx.close(); } catch {}
                        }
                        if (ctx && typeof ctx.suspend === 'function') {
                            try { ctx.suspend(); } catch {}
                        }
                    });
                }
            } catch {}

            // Detener todos los sonidos antes de descargar
            try {
                const allAudio = document.querySelectorAll('audio');
                allAudio.forEach(audio => {
                    audio.pause();
                    audio.currentTime = 0;
                });
            } catch {}

            // Descargar Unity al salir
            try {
                unload();
            } catch {}
        };
    }, [unload]);

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">React + Unity / Cartas</h1>
                <Unity unityProvider={unityProvider} className="centered-unity" />
            </div>
        </div>
    );
}

export default Game;
