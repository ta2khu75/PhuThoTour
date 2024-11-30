import { useEffect, useState } from "react"
import AsideBlog from "../../element/asideBlog"
import AsideTopic from "../../element/asideTopic"
import CartBlogLargeElement from "../../element/cartBlogLarge"
import GridBlog from "../../element/gridBlog"
import TitleElement from "../../element/title"
import style from "./style.module.scss"
import FirebaseUtil from "../../../util/firebaseUtil"
import { TypeEnum } from "../../../types/TypeEnum"
import { where } from "firebase/firestore"
// import { Blog } from "../../../types/Blog"
const BlogPage = () => {
    const [topicId, setTopicId] = useState<string>()
    const [topicList, setTopicList] = useState<Topic[]>([])
    const [blogList, setBlogList] = useState<Blog[]>([])
    useEffect(() => {
        if (topicId)
            getBlogList(topicId)
    }, [topicId])
    useEffect(() => {
        getTopicList()
    }, [])
    const getTopicList = () => {
        FirebaseUtil.readAll<Topic>(TypeEnum.TOPIC).then((response) => {
            setTopicList(response)
            if (response.length > 0) {
                setTopicId(response[0].id)
                console.log(response[0]);

                if (response[0].id)
                    getBlogList(response[0].id)
            }
        })
    }
    const getBlogList = (topicId: string) => {
        FirebaseUtil.queryData<Blog>(TypeEnum.BLOG, where("topicIds", "array-contains"  , topicId)).then(setBlogList)
    }
    return (
        <div className={style.container}>
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
                <AsideTopic topicList={topicList} topicId={topicId} setTopicId={setTopicId} />
                <GridBlog blogList={blogList} />
            </div>
        </div>
    )
}

export default BlogPage