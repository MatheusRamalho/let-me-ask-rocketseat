import { Link } from 'react-router-dom';

import { Aside } from '../../components/Aside';
import { Button } from '../../components/Button';

import logoImg from '../../assets/images/logo.svg';

import { AuthPage, MainPage } from './styled';

export function NewRoom() {
    return (
        <AuthPage>
            <Aside />

            <MainPage>
                <div className="main__content">
                    <img src={logoImg} alt="" />

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