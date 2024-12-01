import clsx from "clsx";
import style from "./style.module.scss"
type Props = {
    title: string;
    active?: boolean;
}
const TagRecruitment = ({ title, active = false }: Props) => {
    return (
        <div className={clsx(style.tag, { [style.active]: active })}>{title}</div>
    )
}

export default TagRecruitment