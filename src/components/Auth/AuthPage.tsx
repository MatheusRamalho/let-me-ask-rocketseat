import { ReactNode } from 'react';
// import styled from 'styled-components';

import './authPage.scss';

type AuthPageProps = {
    children: ReactNode;
}

// export const AuthPageContent = styled.div`
//     width: 100%;
//     height: 100vh;

//     display: flex;
//     align-items: center;
// `;

export function AuthPage(props: AuthPageProps) {
    return (
        <div className="auth__page"> {props.children} </div>
        // <AuthPageContent> {props.children} </AuthPageContent>
    );
}