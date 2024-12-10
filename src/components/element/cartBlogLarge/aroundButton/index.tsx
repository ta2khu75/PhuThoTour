import style from "./style.module.scss"
type Props = {
    handleClick: () => void
}
const AroundButton = ({ handleClick }: Props) => {
    return (
        <button onClick={handleClick} className={style.button}></button>
    )
}

export default AroundButton