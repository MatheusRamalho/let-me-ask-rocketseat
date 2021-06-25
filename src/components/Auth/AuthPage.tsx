import { ReactNode } from 'react';

import './authPage.scss';

type AuthPageProps = {
    children: ReactNode;
}

export function AuthPage(props: AuthPageProps) {
    return (
        <div className="auth__page"> {props.children} </div>
    );
}