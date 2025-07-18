import { useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement>(callback: ()=>void) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }
        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        }
    }, [callback])

    return ref
}