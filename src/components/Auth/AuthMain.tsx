import { ReactNode } from 'react';

import './authMain.scss';

type AuthMainProps = {
    children: ReactNode;
}

export function AuthMain(props: AuthMainProps) {
    return (
        <main className="auth__main"> {props.children} </main>
    );
}