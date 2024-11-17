import style from "./style.module.scss"
type Props = {
    title: string;
    className?: string;
    active?: boolean
}
const AsideItemTopic = ({ title, className, active = false }: Props) => {
    return (
        <div className={`${style.item} ${className} ${active ? style.active : ""}`}>
            {title}
        </div>
    )
}

export default AsideItemTopic