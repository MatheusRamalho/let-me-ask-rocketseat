import { ReactNode } from 'react';
import styled from 'styled-components';

type AuthMainProps = {
    children: ReactNode;
}

export const MainPage = styled.main`
    flex: 9;

    height: inherit;
    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    .main__content {
        width: 100%;
        max-width: 20rem;

        text-align: center;

        display: flex;
        flex-direction: column;
        align-items: stretch;

        > img { // ">" Para pegar somente a imagem dentro do main__content.
            align-self: center;
        }

        .btn__create__room {
            background-color: var(--pink__light);
            
            &:hover {
                background-color: var(--pink__dark);
            }
        }

        .main__separator {
            margin: 2rem 0;

            display: flex;
            align-items: center;

            font-size: 0.875rem;
            color: var(--gray__medium);

            &::before,
            &::after {
                content: '';
                flex: 1;

                height: 0.063rem;
                background-color: var(--gray__light);
            }

            &::before {
                margin-right: 1rem;
            }

            &::after {
                margin-left: 1rem;
            }
        }

        h2 {
            margin: 4rem 0 1.5rem;

            font-family: var(--font__poppins);
            font-size: 1.5rem;
        }

        form {
            fieldset {
                padding: 0;
                border: none;

                input, button {
                    width: 100%;
                }

                input { 
                    height: 3.125rem;
                    padding: 0 1rem;
                    border-radius: 0.5rem;
                    border: 0.063rem solid var(--gray__light);
                    background-color: var(--white__light);
                }

                button {
                    margin-top: 1rem;
                }
            }
        }

        p {
            margin-top: 1rem;

            font-size: 0.875rem;
            color: var(--gray__dark);

            a {
                color: var(--pink__light);
            }
        }
    }  
`;

export function AuthMain(props: AuthMainProps) {
    return (
        <MainPage>
            {props.children}
        </MainPage>
    )
}