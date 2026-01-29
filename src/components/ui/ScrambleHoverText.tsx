import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * ScrambleHoverText
 * 
 * An element that scrambles its text content on hover, similar to a "decoding" effect.
 * Resolves to the original text in a highlighted color.
 */

interface ScrambleHoverTextProps {
    text: string;
    className?: string;
    scrambleSpeed?: number;
    highlightClass?: string;
    trigger?: boolean;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export const ScrambleHoverText = ({
    text,
    className,
    scrambleSpeed = 30, // ms per char switch
    highlightClass = "text-violet-600 dark:text-violet-400",
    trigger = false,
}: ScrambleHoverTextProps) => {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const [isHighlighted, setIsHighlighted] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (trigger && !isScrambling) {
            startScramble();
        } else if (!trigger && isScrambling) {
            // Optional: Reset on mouse leave or keep it? 
            // User asked "animate when hover as like type", usually means it plays once on hover.
            // Let's reset if it goes false properly.
            stopScramble();
        }
    }, [trigger]);

    const startScramble = () => {
        setIsScrambling(true);
        setIsHighlighted(true);
        let iteration = 0;

        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                stopScramble();
            }

            iteration += 1 / 2; // Slower reveal
        }, scrambleSpeed);
    };

    const stopScramble = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        // Keep setHighlighted true if hovered, but we control via prop
    };

    // Cleanup
    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <span className={cn(trigger ? highlightClass : "", className, "transition-colors duration-300")}>
            {displayText}
        </span>
    );
};
