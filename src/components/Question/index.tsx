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
}

// Desestruturar o objeto da props
export function Question({
    content, author, children
}: QuestionProps) {
    return (
        <div className="questions__">
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