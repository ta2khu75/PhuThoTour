import AsideItemElement from "./asideItemBlog"
import style from "./style.module.scss"
type Props = {
    blogList: Blog[]
}
const AsideItemBlog = ({ blogList }: Props) => {
    return (
        <div className={style.aside}>
            <div className={style.asideTitle}>Bài mới nhất</div>
            <div className={style.asideContent}>
                {blogList.map((blog) =>
                    <AsideItemElement key={blog.id} blog={blog} />
                )}
            </div>
        </div>
    )
}

export default AsideItemBlog