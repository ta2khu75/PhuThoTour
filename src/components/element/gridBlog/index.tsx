import { Pagination } from "antd"
import GridBlogItem from "./gridBlogItem"
import SearchBlog from "./searchBlog"
import style from "./style.module.scss"
type Props = {
    blogList: Blog[]
}
const GridBlog = ({ blogList }: Props) => {
    return (
        <div className={style.container}>
            <div className={style.search}>
                <SearchBlog />
            </div>
            <div>
                <div className={style.listBlog} >
                    {blogList.map((blog, index) =>
                        <GridBlogItem key={index} blog={blog} />
                    )}
                </div>
                <div className={style.paginationBlog}>
                    <Pagination align="center" defaultCurrent={1} total={blogList.length} />
                </div>
            </div>
        </div>
    )
}

export default GridBlog