import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';

import './room.scss';
import logoImg from '../../assets/images/logo.svg';

type RoomParams = {
    id: string;
}

type FirebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isHighlighted: boolean;
    isAnswered: boolean;
}>

type Questions = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isHighlighted: boolean;
    isAnswered: boolean;
}

export function Room() {
    const { user } = useAuth();
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');
    const [questions, setQuestions] = useState<Questions[]>([]);
    const [title, setTitle] = useState('');
    const roomId = params.id;

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on('value', room => {
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};
            const parsedQuestion = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered,
                }
            })

            setTitle(databaseRoom.title);
            setQuestions(parsedQuestion);
        })
    }, [roomId]);

    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault();

        if (newQuestion.trim() === '') {
            return;
        }

        if (!user) {
            throw new Error('You must be logged in');
        }

        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar,
            },
            isHighlighted: false,
            isAnswered: false
        }

        await database.ref(`rooms/${roomId}/questions`).push(question);

        setNewQuestion(''); // Limpar o campo.
    }

    return (
        <div id="room__page">
            <header>
                <div className="content__">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={roomId} />
                </div>
            </header>

            <main>
                <div className="room__title">
                    <h1> Sala {title} </h1>

                    {questions.length > 0 && <span> {questions.length} pergunta(s) </span>}
                </div>

                <form onSubmit={handleSendQuestion}>
                    <fieldset>
                        <legend></legend>

                        <textarea
                            placeholder="O que você deseja perguntar?"
                            onChange={event => setNewQuestion(event.target.value)}
                            value={newQuestion}
                        />

                        <div className="form__footer">
                            {user ?
                                (
                                    <div className="user__info">
                                        <img src={user.avatar} alt={user.name} />
                                        <span> {user.name} </span>
                                    </div>
                                ) : (
                                    <span> Para perguntar, <button> faça seu login </button></span>
                                )
                            }

                            <Button type="submit" disabled={!user}> Enviar pergunta </Button>
                        </div>
                    </fieldset>
                </form>

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