import image from "../../../../asset/imageBlog.png"
import style from "./style.module.scss"
import TagBlog from "./tagBlog"
const GridBlogItem = () => {
  return (
    <div className={style.item}>
      <img src={image} className={style.itemImage} alt="Blog Image" />
      <div className={style.itemText}>
        <div className={style.itemTextDescription}>Admin</div>
        <div className={style.itemTitle}>Thông báo: đấu giá giữ xe tại CVHH Đầm Sen</div>
        <div className="flex">
          <TagBlog />
          <TagBlog />
          <TagBlog />
        </div>
        <div className={style.itemTextDescription}>
          10N lượt xem * 20/02/2022
        </div>
      </div>
    </div>
  )
}

export default GridBlogItem