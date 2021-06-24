import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

import { AuthPage } from '../../components/Auth/AuthPage';
import { AuthMain } from '../../components/Auth/AuthMain';
import { Aside } from '../../components/Aside';
import { Button } from '../../components/Button';

import logoImg from '../../assets/images/logo.svg';

export function NewRoom() {
    const { user } = useAuth();
    const history = useHistory();
    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        //trim - remove os espaços tanto da direita quanto da esquerda.
        if (newRoom.trim() === '') {
            return
        }

        // Aqui começa a mexer com o firebase.
        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({ //push - joga informação para dentro de rooms.
            title: newRoom,
            authorId: user?.id,
        });

        history.push(`/rooms/${firebaseRoom.key}`);
    }

    return (
        <AuthPage>
            <Aside />

            <AuthMain>
                <div className="main__content">
                    <img src={logoImg} alt="" />
                    <h2> Criar uma nova sala </h2>

                    <form onSubmit={handleCreateRoom}>
                        <fieldset>
                            <legend hidden> Código da sala </legend>
                            <input
                                type="text"
                                placeholder="Nome da sala"
                                onChange={event => setNewRoom(event.target.value)}
                                value={newRoom}
                            />
                            <Button type="submit"> Criar sala </Button>
                        </fieldset>
                    </form>

                    <p> Quer entrar numa sala existente? <Link to="/"> clique aqui </Link> </p>
                </div>
            </AuthMain>
        </AuthPage>
    )
}