
import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong> Crie sala de &amp;A ao-vivo </strong>
                <p> Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>

            <main>
                <div>
                    <img src={logoImg} alt="" />

                    <button>
                        <img src={googleIconImg} alt="" />
                        Crie sua sala com o Google
                    </button>

                    <div> Ou entre em uma sala </div>

                    <form>
                        <fieldset>
                            <legend></legend>
                            <input type="text" placeholder="Informe o código da sala" />
                            <button type="submit"> Entrar na sala </button>
                        </fieldset>
                    </form>
                </div>
            </main>
        </div>
    );
}