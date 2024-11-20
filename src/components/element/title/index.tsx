import style from "./style.module.scss"
type Props = {
    title: string
}
const TitleElement = ({ title }: Props) => {
    return (
        <div className={style.hexagon}>{title}</div>
    )
}

export default TitleElement