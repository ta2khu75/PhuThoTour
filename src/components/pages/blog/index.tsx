import { useEffect, useState } from "react"
import AsideBlog from "../../element/asideBlog"
import AsideTopic from "../../element/asideTopic"
import CartBlogLargeElement from "../../element/cartBlogLarge"
import GridBlog from "../../element/gridBlog"
import TitleElement from "../../element/title"
import style from "./style.module.scss"
import FirebaseUtil from "../../../util/firebaseUtil"
import { TypeEnum } from "../../../types/TypeEnum"
import { limit, orderBy, where } from "firebase/firestore"
import dayjs from "dayjs"
const BlogPage = () => {
    const [search, setSearch] = useState<string>("");
    const [rangeDate, setRangeDate] = useState<[dayjs.Dayjs | null, dayjs.Dayjs | null] | null>();
    const [blogList, setBlogList] = useState<Blog[]>([])
    const [blogListNew, setBlogListNew] = useState<Blog[]>([])
    const [topicId, setTopicId] = useState<string>()
    const [topicList, setTopicList] = useState<Topic[]>([])
    const [topicMap, setTopicMap] = useState<Map<string, string>>(new Map<string, string>())
    useEffect(() => {
        if (topicId)
            getBlogList(topicId)
    }, [topicId, rangeDate])
    useEffect(() => {
        getBlogListNew()
        getTopicList()
    }, [])
    const getBlogListNew = () => {
        FirebaseUtil.queryData<Blog>(TypeEnum.BLOG, limit(5), orderBy("createdDate", "desc")).then(setBlogListNew)
    }
    const getTopicList = () => {
        FirebaseUtil.readAll<Topic>(TypeEnum.TOPIC).then((response) => {
            setTopicList(response)
            setTopicId(response[0].id)
            const topicsMap = response.reduce((topic, item) => {
                if (item.id)
                    topic.set(item.id, item.name)
                return topic
            }, new Map<string, string>())
            setTopicMap(topicsMap)
        })
    }
    const getBlogList = (topicId: string) => {
        if (rangeDate?.[0] && rangeDate?.[1]) {
            FirebaseUtil.queryData<Blog>(TypeEnum.BLOG, where("createdDate", ">=", rangeDate[0].toDate()), where("createdDate", "<=", rangeDate[1].toDate()), where("topicIds", "array-contains", topicId)).then(setBlogList)
        } else {
            FirebaseUtil.queryData<Blog>(TypeEnum.BLOG, where("topicIds", "array-contains", topicId)).then(setBlogList)
        }
    }
    return (
        <div className={style.container}>
            <div className={style.title}>
                <TitleElement title="Bài viết" />
            </div>
            <div className={style.mainContentContainer}>
                <div className={style.mainContent}>
                    <CartBlogLargeElement blogList={blogListNew} />
                </div>
                <AsideBlog blogList={blogListNew} />
            </div>
            <div className="flex content-between">
                <AsideTopic topicList={topicList} topicId={topicId} setTopicId={setTopicId} />
                <GridBlog setRangeDate={setRangeDate} setSearch={setSearch} blogList={blogList.filter(blog => blog.title.includes(search))} topicMap={topicMap} />
            </div>
        </div>
    )
}

export default BlogPage