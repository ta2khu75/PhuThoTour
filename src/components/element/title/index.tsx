import style from "./style.module.css"
type Props = {
    title: string
}
const TitleElement = ({ title }: Props) => {
    return (
        <div className={style.container}>{title}</div>
    )
}

export default TitleElement