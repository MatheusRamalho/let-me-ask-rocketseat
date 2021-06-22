
import styled from 'styled-components';
import illustrationImg from '../assets/images/illustration.svg';

export const AsideWrapper = styled.aside`
    flex: 6;

    height: inherit;
    padding: 7.5rem 5rem;
    background-color: var(--purple__light);
    color: var(--white__light);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        max-width: 20rem;
    }

    strong {
        font-family: var(--font__poppins);
        font-weight: 700;
        font-size: 2.25rem;
        line-height: 2.625rem;

        margin-top: 1rem;
    }

    p {
        font-size: 1.5rem;
        line-height: 2rem;
        color: var(--white__dark);

        margin-top: 1rem;
    }
`;

export function Aside() {
    return (
        <AsideWrapper>
            <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
            <strong> Crie sala de Q&amp;A ao-vivo </strong>
            <p> Tire as dúvidas da sua audiência em tempo-real </p>
        </AsideWrapper>
    );
}