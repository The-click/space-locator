import { MutableRefObject, useEffect, useRef } from "react";

export interface useInfiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({
    callback,
    triggerRef,
}: useInfiniteScrollProps) {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const triggerElement = triggerRef.current;
        if (callback) {
            const options = {
                root: null,
                rootMargin: "0px",
                threshold: 1,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [triggerRef, callback]);
}
