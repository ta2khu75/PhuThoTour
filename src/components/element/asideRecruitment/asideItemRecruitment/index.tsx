import style from "./style.module.scss"
import TagRecruitment from "./tagRecruitment"
type Props = {
    list: { name: string, id?: string }[],
    id?: string,
    title: string,
    handleClick: (id?: string) => void

}
const AsideItemRecruitment = ({ list, id, title, handleClick }: Props) => {
    return (
        <div>
            <div className={style.title}>{title}</div>
            {
                list.map((item, index) =>
                    <div key={index} className={style.container} onClick={() => handleClick(item.id)}>
                        <TagRecruitment title={item.name} active={item.id === id} />
                    </div>
                )
            }
        </div>
    )
}

export default AsideItemRecruitment