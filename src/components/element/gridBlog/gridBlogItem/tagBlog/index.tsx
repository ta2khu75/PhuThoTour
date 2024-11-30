import style from "./style.module.scss"
type Props = {
    name: string
}
const TagBlog = ({ name }: Props) => {
    return (
        <div className={style.tag}>{name}</div>
    )
}

export default TagBlog