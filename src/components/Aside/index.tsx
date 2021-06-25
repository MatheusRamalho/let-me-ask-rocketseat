import './styles.scss';
import illustrationImg from '../../assets/images/illustration.svg';

export function Aside() {
    return (
        <aside className="aside__">
            <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
            <strong> Crie sala de Q&amp;A ao-vivo </strong>
            <p> Tire as dúvidas da sua audiência em tempo-real </p>
        </aside>
    );
}