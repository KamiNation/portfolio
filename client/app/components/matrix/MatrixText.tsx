import React, { useEffect, useState } from 'react';
import './MatrixEffectText.css';

interface MatrixEffectTextProps {
    text: string;
    speed?: number; // Speed in milliseconds
}

const MatrixEffectText: React.FC<MatrixEffectTextProps> = ({ text, speed = 150 }) => {
    const [visibleText, setVisibleText] = useState<string[]>(Array(text.length).fill(' '));

    useEffect(() => {
        let charIndex = 0;

        // Function to reveal characters one by one
        const revealNextChar = () => {
            if (charIndex < text.length) {
                setVisibleText((prevText) => {
                    const newText = [...prevText];
                    newText[charIndex] = text[charIndex]; // Reveal the next character in sequence
                    return newText;
                });
                charIndex++;
                setTimeout(revealNextChar, speed); // Recursive timeout to control speed
            }
        };

        revealNextChar(); // Start revealing the text

        return () => {
            charIndex = text.length; // Cleanup if component unmounts
        };
    }, [text, speed]);

    return (
        <div className="matrix-effect">
            {visibleText.map((char, index) => (
                <span key={index} className="matrix-char">
                    {char === ' ' ? '\u00A0' : char} {/* Handle spaces */}
                </span>
            ))}
        </div>
    );
};

export default MatrixEffectText;
