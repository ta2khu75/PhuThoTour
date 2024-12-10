import style from "./style.module.scss"
import image from "../../../../asset/bg.png"
import { FunctionUtil } from "../../../../util/FunctionUtil"
import { Link } from "react-router-dom"
type Props = {
    blog: Blog
}
const AsideItemElement = ({ blog }: Props) => {
    return (
        <Link to={"/blog/details/" + blog.id} className={style.card}>
            <img src={blog.imageUrl} className={style.cardImage} alt={blog.title} />
            <div className={style.cartText}>
                <div className={style.cartTitle}>{blog.title}</div>
                <div className={style.cartDescription}>{blog.views ?? 0} views * {FunctionUtil.convertCreatedDateToString(blog.createdDate)}</div>
            </div>
        </Link>
    )
}

export default AsideItemElement