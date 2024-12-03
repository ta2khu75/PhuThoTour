import { Pagination } from "antd"
import GridBlogItem from "./gridBlogItem"
import SearchBlog from "./filterBlog"
import style from "./style.module.scss"
// import { NoUndefinedRangeValueType } from "rc-picker/lib/PickerInput/RangePicker"
import dayjs from "dayjs"
type Props = {
    blogList: Blog[],
    topicMap: Map<string, string>,
    setSearch: (value: string) => void,
    setRangeDate: (value: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null) => void
}
const GridBlog = ({ blogList, topicMap, setSearch, setRangeDate }: Props) => {
    return (
        <div className={style.container}>
            <div className={style.search}>
                <SearchBlog setSearch={setSearch} setRangeDate={setRangeDate} />
            </div>
            <div>
                <div className={style.listBlog} >
                    {blogList.map((blog, index) =>
                        <GridBlogItem topicMap={topicMap} key={index} blog={blog} />
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