import { useHistory, useParams } from 'react-router-dom';

import { database } from '../../services/firebase';
import { useRoom } from '../../hooks/useRoom';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import './room.scss';

type RoomParams = {
    id: string;
}

export function AdminRoom() {
    const history = useHistory();
    const params = useParams<RoomParams>();
    const roomId = params.id;

    const { title, questions } = useRoom(roomId);

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}/`).update({
            endedAt: new Date(),
        });

        history.push('/');
    }

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    return (
        <div id="room__page">
            <header>
                <div className="content__">
                    <img src={logoImg} alt="Letmeask" />

                    <div>
                        <RoomCode code={roomId} />
                        <Button
                            isDanger
                            onClick={handleEndRoom}
                        > Encerrar sala </Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room__title">
                    <h1> Sala {title} </h1>
                    {questions.length > 0 && <span> {questions.length} pergunta(s) </span>}
                </div>

                {/* Listando as questions */}
                <div className="questions__list">
                    {/* Todo map precisa ter um valor key */}
                    {questions.map(question => {
                        return (
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                            >

                                <button
                                    type="button"
                                    onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <img src={deleteImg} alt="Remover pergunta" />
                                </button>
                            </Question>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}