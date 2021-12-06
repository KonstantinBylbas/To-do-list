import './button.scss';

export default function Button({text, handlerClick}){
    return(
        <button onClick={handlerClick}>
            {text}
        </button>
    )
}