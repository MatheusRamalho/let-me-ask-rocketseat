
import './styles.scss';

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
}

// Desestruturar o objeto da props
export function Question({
    content, author,
}: QuestionProps) {
    return (
        <div className="questions">
            <p> {content} </p>

            <footer>
                <div>
                    <img src={author.avatar} alt={author.name} />
                    <span> {author.name}</span>
                </div>

                <div></div>
            </footer>
        </div>
    );
}