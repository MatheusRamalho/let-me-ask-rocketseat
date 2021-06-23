import { ReactNode } from 'react';
import styled from 'styled-components';

type AuthPageProps = {
    children: ReactNode;
}

export const AuthPageContent = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
`;

export function AuthPage(props: AuthPageProps) {
    return (
        <AuthPageContent>
            {props.children}
        </AuthPageContent>
    )
}