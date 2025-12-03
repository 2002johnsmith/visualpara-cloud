import { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Game3() {
    const { unityProvider, unload } = useUnityContext({
        loaderUrl: "/Machupicchu/machupicchu.loader.js",
        dataUrl: "/Machupicchu/machupicchu.data.br",
        frameworkUrl: "/Machupicchu/machupicchu.framework.js.br",
        codeUrl: "/Machupicchu/machupicchu.wasm.br",
    });

    useEffect(() => {
        return () => {
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

            try {
                document.querySelectorAll("audio").forEach((audio) => {
                    audio.pause();
                    audio.currentTime = 0;
                });
            } catch {}

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
