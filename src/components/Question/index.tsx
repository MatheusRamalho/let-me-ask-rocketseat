// ReactNode pode ser qualquer conteúdo JSX.
// Usado muito para a propriedade children.
import { ReactNode } from 'react';

import './styles.scss';

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
    children?: ReactNode;
    isAnswered?: boolean;
    isHighlighted?: boolean;
}

// Desestruturar o objeto da props
export function Question({
    content,
    author,
    isAnswered = false,
    isHighlighted = false,
    children,
}: QuestionProps) {
    return (
        <div className={`
            questions__ 
            ${isAnswered  ? 'answered__' : ''} 
            ${isHighlighted && !isAnswered ? 'highlighted__' : ''} 
        `}>
            <p> {content} </p>

            <footer>
                <div className="user__info">
                    <img src={author.avatar} alt={author.name} />
                    <span> {author.name}</span>
                </div>

                <div> {children} </div>
            </footer>
        </div>
    );
}