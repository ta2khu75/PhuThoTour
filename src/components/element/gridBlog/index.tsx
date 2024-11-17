import { Pagination } from "antd"
import GridBlogItem from "./gridBlogItem"
import SearchBlog from "./searchBlog"
import style from "./style.module.scss"
const GridBlog = () => {
    return (
        <div className={style.container}>
            <div className={style.search}>
                <SearchBlog />
            </div>
            <div>
                <div className={style.listBlog} >
                    <GridBlogItem />
                    <GridBlogItem />
                    <GridBlogItem />
                    <GridBlogItem />
                    <GridBlogItem />
                    <GridBlogItem />
                    <GridBlogItem />
                    <GridBlogItem />
                    <GridBlogItem />
                    <GridBlogItem />
                    <GridBlogItem />
                    <GridBlogItem />
                </div>
                <div className={style.paginationBlog}>
                    <Pagination align="center" defaultCurrent={1} total={50} />
                </div>
            </div>
        </div>
    )
}

export default GridBlog