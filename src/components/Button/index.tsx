// Tem todas as propriedades que um button html aceita.
import { ButtonHTMLAttributes } from 'react';
import './styles.scss';

// Utilizando o & no final e adicionando chaves
// Indica que além de receber todas as propriedades padrão do html (ButtonHTMLAttributes<HTMLButtonElement>)
// Vai receber mais algumas propriedades informadas.
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean,
    isDanger?: boolean,
    isClear?: boolean,
    isSecond?: boolean,
};

export function Button({
    isOutlined = false,
    isDanger = false,
    isClear = false,
    isSecond = false,
    ...props
}: ButtonProps) {
    return (
        <button
            className={`button__ 
                ${isOutlined ? 'outlined__' : ''}
                ${isDanger ? 'danger__' : ''}
                ${isClear ? 'clear__' : ''}
                ${isSecond ? 'second__' : ''}
            ` }
            {...props}>
        </button>
    );
}