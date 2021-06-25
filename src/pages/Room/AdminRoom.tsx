import { useParams } from 'react-router-dom';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';

import './room.scss';
import logoImg from '../../assets/images/logo.svg';
import { useRoom } from '../../hooks/useRoom';

type RoomParams = {
    id: string;
}

export function AdminRoom() {
    const params = useParams<RoomParams>();
    const roomId = params.id;

    const { title, questions } = useRoom(roomId);

    return (
        <div id="room__page">
            <header>
                <div className="content__">
                    <img src={logoImg} alt="Letmeask" />

                    <div>
                        <RoomCode code={roomId} />
                        <Button isDanger> Encerrar sala </Button>
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
                            />
                        );
                    })}
                </div>
            </main>
        </div>
    );
}