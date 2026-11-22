import type { ReactNode } from 'react';

type Props = {
    title: string;
    children: ReactNode;
    actions?: ReactNode;
};

export function Panel({ title, children, actions }: Props) {
    return (
        <section style={{ border: '1px solid #999', padding: 12, marginBottom: 12 }}>
            <header
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 12,
                    alignItems: 'flex-start',
                }}
            >
                <h3 style={{ margin: 0, minWidth: 0, overflowWrap: 'anywhere' }}>
                    {title}
                </h3>
                {actions && <div style={{ flexShrink: 0 }}>{actions}</div>}
            </header>
            <div>{children}</div>
        </section>
    );
}