import style from "./style.module.scss"
import logoVertical from "../../../asset/logo-vertical.png"
import { useEffect, useState } from "react"
import FirebaseUtil from "../../../util/firebaseUtil"
import { TypeEnum } from "../../../types/TypeEnum"
import { limit, orderBy } from "firebase/firestore"
import GridBlogItem from "../gridBlog/gridBlogItem"
import { useNavigate } from "react-router-dom"
const GridBlogNew = () => {
    const [blogList, setBlogList] = useState<Blog[]>([])
    const navigate = useNavigate()
    const [topicMap, setTopicMap] = useState<Map<string, string>>(new Map<string, string>())
    useEffect(() => {
        getTopicList()
        getBlogList()
    }, [])
    const getTopicList = () => {
        FirebaseUtil.readAll<Topic>(TypeEnum.TOPIC).then(response => {
            const topicsMap = response.reduce((topic, item) => {
                if (item.id)
                    topic.set(item.id, item.name)
                return topic
            }, new Map<string, string>())
            setTopicMap(topicsMap)
        })
    }
    const getBlogList = () => {
        FirebaseUtil.queryData<Blog>(TypeEnum.BLOG, limit(3), orderBy("createdDate", "desc")).then(setBlogList)
    }
    const handleSeeMoreClick = () => {
        navigate("/blog")
    }
    return (
        <div className={style.container}>
            <img className={style.logo} src={logoVertical} alt="" />
            <div className={style.header}>
                <div className={style.subTitle}>CHIA SẺ THÔNG TIN</div>
                <div className={style.title}>Bài viết mới</div>
                <div className={style.hr}></div>
                <div className={style.textDescription}>Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch</div>
            </div>
            <div className={style.grid}>
                {blogList.map(blog =>
                    <GridBlogItem topicMap={topicMap} blog={blog} itemWidth="362px" width="362px" showDescription height="197px" />
                )}
            </div>
            <div className="flex content-center">
                <button onClick={handleSeeMoreClick} className={style.button}>Xem thêm bài viết</button>
            </div>
        </div>
    )
}

export default GridBlogNew