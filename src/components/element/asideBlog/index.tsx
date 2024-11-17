import AsideItemElement from "./asideItemBlog"
import style from "./style.module.scss"
import logoBlur from "../../../asset/logoBlur.png"
const AsideItemBlog = () => {
    return (
        <div className={style.aside}>
            <div className={style.asideTitle}>Bài mới nhất</div>
            <div className={style.asideContent}>
                <AsideItemElement />
                <AsideItemElement />
                <AsideItemElement />
                <AsideItemElement />
                <AsideItemElement />
            </div>
        </div>
    )
}

export default AsideItemBlog