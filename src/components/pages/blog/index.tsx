import AsideBlog from "../../element/asideBlog"
import AsideTopic from "../../element/asideTopic"
import CartBlogLargeElement from "../../element/cartBlogLarge"
import GridBlog from "../../element/gridBlog"
import TitleElement from "../../element/title"
import style from "./style.module.scss"
const BlogPage = () => {
    return (
        <>
            <div className={style.title}>
                <TitleElement title="Bài viết" />
            </div>
            <div className={style.mainContentContainer}>
                <div className={style.mainContent}>
                    <CartBlogLargeElement />
                </div>
                <AsideBlog />
            </div>
            <div className="flex content-between">
                <AsideTopic />
                <GridBlog />
            </div>
        </>
    )
}

export default BlogPage