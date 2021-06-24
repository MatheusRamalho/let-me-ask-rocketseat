import { useParams } from 'react-router-dom';

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';

import logoImg from '../assets/images/logo.svg';
import '../styles/room.scss';

type RoomParams = {
    id: string; 
}

export function Room() {
    const params = useParams<RoomParams>();
    return (
        <div id="room__page">
            <header>
                <div className="content__">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={params.id}/>
                </div>
            </header>

            <main>
                <div className="room__title">
                    <h1> Sala ReactJS </h1>
                    <span> 4 perguntas</span>
                </div>

                <form>
                    <fieldset>
                        <legend></legend>

                        <textarea
                            placeholder="O que você deseja perguntar?"
                        />

                        <div className="form__footer">
                            <span> Para uma pergunta, <button> faça seu login </button></span>
                            <Button type="submit"> Enviar pergunta </Button>
                        </div>
                    </fieldset>
                </form>
            </main>
        </div>
    )
}