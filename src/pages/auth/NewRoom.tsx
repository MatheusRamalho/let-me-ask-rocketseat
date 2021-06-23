import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { Aside } from '../../components/Aside';
import { Button } from '../../components/Button';

import logoImg from '../../assets/images/logo.svg';

import { AuthPage, MainPage } from './styled';

export function NewRoom() {
    const { user, signInWithGoogle } = useAuth();

    return (
        <AuthPage>
            <Aside />

            <MainPage>
                <div className="main__content">
                    <img src={logoImg} alt="" />
                    <h1> {user?.name} </h1>
                    <h2> Criar uma nova sala </h2>

                    <form>
                        <fieldset>
                            <legend hidden> Código da sala </legend>
                            <input type="text" placeholder="Nome da sala" />
                            <Button type="submit"> Criar sala </Button>
                        </fieldset>
                    </form>

                    <p> Quer entrar numa sala existente? <Link to="/"> clique aqui </Link> </p>
                </div>
            </MainPage>
        </AuthPage>
    )
}