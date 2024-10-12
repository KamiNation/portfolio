import React, { useEffect, useRef } from 'react';

const MatrixEffect: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return; // Check if canvas is null

        const ctx = canvas.getContext('2d');

        if (!ctx) return; // Check if the context is null

        // Set the canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const name = 'Israel Adedamola Kami'; // Replace with your name
        const fontSize = 2;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(0);

        const drawMatrix = () => {
            // Semi-transparent black background to create trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Set text color and font style
            ctx.fillStyle = '#0F0'; // Matrix green color
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = name[Math.floor(Math.random() * name.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset the drop to the top once it reaches the bottom
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const intervalId = setInterval(drawMatrix, 50);

        // Resize canvas when the window is resized
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(intervalId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default MatrixEffect;
