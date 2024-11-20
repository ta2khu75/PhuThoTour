import style from "./style.module.scss"
import image from "../../../asset/imageBlog.png"
import GridBlogItem from "../../element/gridBlog/gridBlogItem"
const BlogDetailsPage = () => {
  return (
    <div className={style.container}>
      <header>
        <div className={style.title}>Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022</div>
        <div className={style.titleInfo}>by tuyendung in on Tháng Năm 21, 2020</div>
      </header>
      <img src={image} alt="image blog" className={style.image} />
      <footer>
        <div className={style.title}>Bài viết liên quan</div>
        <div className={style.grid}>
          <GridBlogItem/>
          <GridBlogItem/>
          <GridBlogItem/>
          <GridBlogItem/>
        </div>
      </footer>
    </div>
  )
}

export default BlogDetailsPage