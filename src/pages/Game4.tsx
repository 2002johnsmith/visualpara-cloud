import { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Game4() {
    const { unityProvider, unload } = useUnityContext({
        loaderUrl: "/MateoSobreRuedas/MateoSobreRuedas.loader.js",
        dataUrl: "/MateoSobreRuedas/MateoSobreRuedas.data.br",
        frameworkUrl: "/MateoSobreRuedas/MateoSobreRuedas.framework.js.br",
        codeUrl: "/MateoSobreRuedas/MateoSobreRuedas.wasm.br",
    });

    useEffect(() => {
        return () => {
            // Cerrar contextos de audio
            try {
                const AudioCtx =
                    window.AudioContext ||
                    (window as any).webkitAudioContext;

                if (AudioCtx && AudioCtx.prototype) {
                    const instances =
                        (AudioCtx.prototype.constructor as any).instances || [];

                    instances.forEach((ctx: any) => {

                        try { ctx.close?.(); } catch {}
                        try { ctx.suspend?.(); } catch {}
                    });
                }
            } catch {}

            // Pausar audios del DOM
            try {
                document.querySelectorAll("audio").forEach(audio => {
                    audio.pause();
                    audio.currentTime = 0;
                });
            } catch {}

            // Descargar Unity
            try {
                unload();
            } catch {}
        };
    }, [unload]);

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">React + Unity / Mateo Sobre Ruedas</h1>
                <Unity unityProvider={unityProvider} className="centered-unity" />
            </div>
        </div>
    );
}
