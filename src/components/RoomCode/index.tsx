
import './styles.scss';
import copyImg from '../../assets/images/copy.svg';

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeClipboard() {
        navigator.clipboard.writeText(props.code) // nâo funciona em navegadores antigos.
    }
    return (
        <button className="room__code" onClick={copyRoomCodeClipboard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>

            <span> Sala #{props.code} </span>
        </button>
    )
}