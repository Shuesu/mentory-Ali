import { useEffect, useRef } from 'react';

type Props = { title: string };

let activeObservers = 0;

export function Child({ title }: Props) {
    console.log('[Child] render, title =', title);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new MutationObserver((records) => {
            console.log(
                '[DOM] mutations:',
                records.length,
                records.map((r) => r.type),
            );
        });

        observer.observe(node, {
            childList: true,
            characterData: true,
            attributes: true,
            subtree: true,
        });

        activeObservers++;
        console.log('[Child] observer connected, active =', activeObservers);

        return () => {
            observer.disconnect();
            activeObservers--;
            console.log('[Child] observer disconnected, active =', activeObservers);
        };
    }, []);

    return (
        <div ref={ref}>
            <h2>{title}</h2>
            <p>Постоянный текст ребёнка</p>
        </div>
    );
}