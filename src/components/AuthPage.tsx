import styled from 'styled-components';

export const AuthPage = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
`;

type AuthProps = {
    children: Element[];
}

export function Auth(props: AuthProps) {
    return (
        <AuthPage>
            {props.children}
        </AuthPage>
    );
}