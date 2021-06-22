
// import { Auth } from '../../components/AuthPage';
// import { Aside } from '../../components/Aside';
import { Button } from '../../components/Button';

import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import { HomeMain } from './styled';

export function Home() {
    return (
        <HomeMain>
            <div className="main__content">
                <img src={logoImg} alt="" />

                <Button className="btn__create__room">
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
        </HomeMain>
    );
}