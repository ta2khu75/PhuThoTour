import style from "./style.module.scss"
import image from "../../../../asset/imageBlog.png"
import GridBlogItem from "../../../element/gridBlog/gridBlogItem"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import FirebaseUtil from "../../../../util/firebaseUtil"
import { TypeEnum } from "../../../../types/TypeEnum"
import { FunctionUtil } from "../../../../util/FunctionUtil"
import RenderPdf from "../../../element/renderPdf"
const BlogDetailsPage = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState<Blog>()
  useEffect(() => {
    getBlog()
  }, [id])
  const getBlog = () => {
    if (id)
      FirebaseUtil.readById<Blog>(TypeEnum.BLOG, id).then((response) => {
        setBlog(response)
        if (response) {
          const views = (response.views ? response.views + 1 : 1)
          FirebaseUtil.update<Blog>(TypeEnum.BLOG, id, { ...response, views })
        }
      })
  }
  return (
    <div className={style.container}>
      <header>
        <div className={style.title}>{blog?.title}</div>
        <div className={style.titleInfo}>by tuyendung in on {FunctionUtil.convertCreateDateToStringVn(blog?.createdDate)}</div>
      </header>
      <img src={blog?.imageUrl} alt={blog?.title} className={style.image} />
      <div>
        <div dangerouslySetInnerHTML={{ __html: blog?.content ?? "" }} />
      </div>
      <div className={style.pdf}>
        <RenderPdf documentUrl={blog?.documentUrl ?? ""} />
      </div>
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