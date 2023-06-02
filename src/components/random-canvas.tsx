import React, {useEffect, useRef} from "react";

export const RandomCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const drawShape = (ctx: CanvasRenderingContext2D) => {
    const startX = Math.floor(Math.random() * 1200);
    const startY = Math.floor(Math.random() * 800);
    const endX = Math.floor(Math.random() * 1200);
    const endY = Math.floor(Math.random() * 800);

    const colors = ['#f0f8ff', '#faebd7', '#00ffff', '#7fffd4', '#f0ffff', '#f5f5dc', '#ffe4c4', '#000000', '#ffebcd'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    ctx.beginPath();
    const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "#ffffff");
    ctx.strokeStyle = gradient;

    const shapeType = Math.floor(Math.random() * 3);
    switch(shapeType) {
      case 0: // Draw Line
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        break;
      case 1: // Draw Circle
        const radius = Math.sqrt(Math.pow(startX - endX, 2) + Math.pow(startY - endY, 2));
        ctx.arc(startX, startY, radius, 0, Math.PI * 2, true);
        ctx.stroke();
        break;
      case 2: // Draw Rectangle
        ctx.rect(startX, startY, endX - startX, endY - startY);
        ctx.stroke();
        break;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (context) {
      for (let i = 0; i < 1000; i++) {
        drawShape(context);
      }
    }
  }, []);

  return <canvas className="canvas" ref={canvasRef} width={1200} height={800} />;
}
