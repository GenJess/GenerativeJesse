import { useEffect, useRef } from "react";

interface AuroraShaderProps {
  className?: string;
}

const AuroraShader = ({ className = "" }: AuroraShaderProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    const blobs = Array.from({ length: 4 }, (_, idx) => ({
      x: Math.random(),
      y: Math.random(),
      radius: 260 + Math.random() * 180,
      hue: 220 + idx * 35,
      speed: 0.001 + Math.random() * 0.0008,
      offset: Math.random() * Math.PI * 2,
    }));

    let animationId: number;
    let frame = 0;

    const render = () => {
      frame += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#040406";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter";

      blobs.forEach((blob) => {
        const t = frame * blob.speed;
        const x = (0.5 + Math.cos(t + blob.offset) * 0.25 + blob.x * 0.1) * canvas.width;
        const y = (0.5 + Math.sin(t * 0.85 + blob.offset) * 0.25 + blob.y * 0.1) * canvas.height;

        const gradient = ctx.createRadialGradient(
          x,
          y,
          blob.radius * 0.25,
          x,
          y,
          blob.radius
        );

        const hue = blob.hue + Math.sin(t * 2) * 16;
        gradient.addColorStop(0, `hsla(${hue}, 85%, 65%, 0.65)`);
        gradient.addColorStop(1, `hsla(${hue + 24}, 90%, 52%, 0.04)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(x, y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";
      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={`absolute inset-0 h-full w-full ${className}`} />;
};

export default AuroraShader;
