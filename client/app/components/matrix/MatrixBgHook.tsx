import { useEffect, useRef } from 'react';

const useMatrixBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set the canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const name = 'YOURNAME'; // Replace with your name
        const fontSize = 20;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(0);

        const drawMatrix = () => {
            // Clear the canvas with a slight opacity to create the trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0'; // Green color for Matrix code
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = name[Math.floor(Math.random() * name.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to the top after it falls past the screen
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const intervalId = setInterval(drawMatrix, 50);

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

    return canvasRef;
};

export default useMatrixBackground;
