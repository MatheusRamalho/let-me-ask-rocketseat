import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

import { AuthPage } from '../../components/Auth/AuthPage';
import { AuthMain } from '../../components/Auth/AuthMain';
import { Aside } from '../../components/Aside';
import { Button } from '../../components/Button';

import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();
    const [roomCode, setRoomCode] = useState('');

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle();
        }
        history.push('rooms/new'); // Redireciona pra tela de criar a sala
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert('Room does not exists');
            return
        }

        if (!roomRef.val().endedAt) {
            alert('Room already closed.');
            return;
        }

        history.push(`/rooms/${roomCode}`);
    }

    return (
        <AuthPage>
            <Aside />

            <AuthMain>
                <div className="main__content">
                    <img src={logoImg} alt="Letmeask" />

                    <Button
                        isSecond
                        onClick={handleCreateRoom}
                    >
                        <img src={googleIconImg} alt="" />
                        Crie sua sala com o Google
                    </Button>

                    <div className="main__separator"> Ou entre em uma sala </div>

                    <form onSubmit={handleJoinRoom}>
                        <fieldset>
                            <legend hidden> Código da sala </legend>
                            <input
                                type="text"
                                placeholder="Informe o código da sala"
                                onChange={event => setRoomCode(event.target.value)}
                            />
                            <Button type="submit"> Entrar na sala </Button>
                        </fieldset>
                    </form>
                </div>
            </AuthMain>
        </AuthPage>
    );
}