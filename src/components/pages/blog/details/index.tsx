import style from "./style.module.scss"
import image from "../../../../asset/imageBlog.png"
import GridBlogItem from "../../../element/gridBlog/gridBlogItem"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import FirebaseUtil from "../../../../util/firebaseUtil"
import { TypeEnum } from "../../../../types/TypeEnum"
import { FunctionUtil } from "../../../../util/FunctionUtil"
const BlogDetailsPage = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState<Blog>()
  useEffect(() => {
    getBlog()
  }, [id])
  const getBlog = () => {
    if (id)
      FirebaseUtil.readById<Blog>(TypeEnum.BLOG, id).then(setBlog)
  }
  return (
    <div className={style.container}>
      <header>
        <div className={style.title}>{blog?.title}</div>
        <div className={style.titleInfo}>by tuyendung in on {FunctionUtil.convertCreateDateToStringVn(blog?.createdDate)}</div>
      </header>
      <img src={image} alt="image blog" className={style.image} />
      <footer>
        <div className={style.title}>Bài viết liên quan</div>
        <div className={style.grid}>
          {/* <GridBlogItem />
          <GridBlogItem />
          <GridBlogItem />
          <GridBlogItem /> */}
        </div>
      </footer>
    </div>
  )
}

export default BlogDetailsPage