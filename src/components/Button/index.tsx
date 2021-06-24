// Tem todas as propriedades que um button html aceita.
import { ButtonHTMLAttributes } from 'react';
// import styled from 'styled-components';

import './styles.scss';

// export const ButtonPri = styled.button`
//     cursor: pointer;

//     height: 3.125rem;
//     padding: 0 1.2rem;
//     border: none;
//     border-radius: 0.5rem;
//     background-color: var(--purple__light);
//     transition: background-color .2s;

//     font-weight: 500;
//     color: var(--white__light);

//     display: flex;
//     align-items: center;
//     justify-content: center;

//     img {
//         margin-right: 0.5rem;
//     }

//     &:not(:disabled):hover {
//         background-color: var(--purple__dark);
//     }

//     &:disabled {
//         opacity: 0.6;
//         cursor: not-allowed;   
//     }

//     &.button__sec {
//         background-color: var(--pink__light);

//         &:not(:disabled):hover {
//             background-color: var(--pink__dark);
//         }
//     }
// `;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
    return (
        <button {...props}></button>
        // <ButtonPri {...props} />
    );
}