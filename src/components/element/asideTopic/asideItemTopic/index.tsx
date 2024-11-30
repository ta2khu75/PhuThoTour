import style from "./style.module.scss"
type Props = {
    title: string;
    className?: string;
    active?: boolean;
    onClick: () => void
}
const AsideItemTopic = ({ title, className, active = false, onClick }: Props) => {
    return (
        <div className={`${style.item} ${className} ${active ? style.active : ""}`} onClick={onClick}>
            {title}
        </div>
    )
}

export default AsideItemTopic