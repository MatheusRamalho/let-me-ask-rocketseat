import { useHistory } from 'react-router-dom';

import { firebase, auth } from '../../services/firebase';

import { Aside } from '../../components/Aside';
import { Button } from '../../components/Button';

import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import { AuthPage, MainPage } from './styled';

export function Home() {
    const history = useHistory();

    function handleCreateRoom() {
        const provider = new firebase.auth.GoogleAuthProvider();

        // Faz login com a conta do google
        auth.signInWithPopup(provider).then(result => {
            console.log(result);

            // Redireciona pra tela de criar a sala
            history.push('rooms/new');
        });
    }

    return (
        <AuthPage>
            <Aside />

            <MainPage>
                <div className="main__content">
                    <img src={logoImg} alt="" />

                    <Button className="button__sec" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="" />
                        Crie sua sala com o Google
                    </Button>

                    <div className="main__separator"> Ou entre em uma sala </div>

                    <form>
                        <fieldset>
                            <legend hidden> Código da sala </legend>
                            <input type="text" placeholder="Informe o código da sala" />
                            <Button type="submit"> Entrar na sala </Button>
                        </fieldset>
                    </form>
                </div>
            </MainPage>
        </AuthPage>
    );
}