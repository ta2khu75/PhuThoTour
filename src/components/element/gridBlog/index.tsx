import { Pagination } from "antd"
import GridBlogItem from "./gridBlogItem"
import style from "./style.module.scss"
// import { NoUndefinedRangeValueType } from "rc-picker/lib/PickerInput/RangePicker"
import dayjs from "dayjs"
import FilterBlog from "./filterBlog"
import { useEffect, useState } from "react"
type Props = {
    blogList: Blog[],
    topicMap: Map<string, string>,
    setSearch: (value: string) => void,
    setRangeDate: (value: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null) => void
}
const GridBlog = ({ blogList, topicMap, setSearch, setRangeDate }: Props) => {
    const size = 12
    const [page, setPage] = useState(1)
    const [blogShow, setBlogShow] = useState<Blog[]>([])
    useEffect(() => {
        const startIndex = (page - 1) * size
        const endIndex = startIndex + size
        setBlogShow(blogList.slice(startIndex, endIndex))
    }, [page, blogList])
    useEffect(() => {
        setPage(1)
    }, [blogList])
    return (
        <div className={style.container}>
            <div className={style.search}>
                <FilterBlog setSearch={setSearch} setRangeDate={setRangeDate} />
            </div>
            <div>
                <div className={style.listBlog} >
                    {blogShow.map((blog, index) =>
                        <GridBlogItem topicMap={topicMap} key={index} blog={blog} />
                    )}
                </div>
                <div className={style.paginationBlog}>
                    <Pagination align="center" onChange={(value) => setPage(value)} pageSize={size} current={page} total={blogList.length} />
                </div>
            </div>
        </div>
    )
}

export default GridBlog