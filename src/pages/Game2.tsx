import { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Game2() {
    const { unityProvider, unload } = useUnityContext({
        loaderUrl: "/ArtOfSoul/Art Of Soul.loader.js",
        dataUrl: "/ArtOfSoul/Art Of Soul.data.br",
        frameworkUrl: "/ArtOfSoul/Art Of Soul.framework.js.br",
        codeUrl: "/ArtOfSoul/Art Of Soul.wasm.br",
    });

    useEffect(() => {
        return () => {
            try {
                const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
                const instances = (AudioCtx.prototype.constructor as any).instances || [];

                instances.forEach((ctx: any) => {
                    try { ctx.close?.(); } catch {}
                    try { ctx.suspend?.(); } catch {}
                });
            } catch {}

            try {
                document.querySelectorAll("audio").forEach(audio => {
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
                <h1 className="centered-title">React + Unity / Game2</h1>
                <Unity unityProvider={unityProvider} className="centered-unity" />
            </div>
        </div>
    );
}
