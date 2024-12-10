import { Link } from "react-router-dom"
import image from "../../../../asset/imageBlog.png"
import style from "./style.module.scss"
import TagBlog from "./tagBlog"
import dayjs from "dayjs";
import { Timestamp } from "firebase/firestore";
import { FunctionUtil } from "../../../../util/FunctionUtil";
// import { Blog } from "../../../../types/Blog";
type Props = {
  blog: Blog;
  showDescription?: boolean,
  width?: string,
  height?: string
  itemWidth?: string
  topicMap: Map<string, string>
}
const GridBlogItem = ({ blog, showDescription = false, topicMap, itemWidth = "265px", width = "265px", height = "146px" }: Props) => {
  return (
    <Link to={`/blog/details/${blog.id}`} className={style.item} style={{ width: itemWidth }}>
      <img src={blog.imageUrl} className={style.itemImage} style={{ width, height }} alt="Blog Image" />
      <div className={style.itemText}>
        <div className={style.itemTextDescription}>Admin</div>
        <div className={style.itemTitle}>{blog?.title}</div>
        {showDescription &&
          <div className={style.description} dangerouslySetInnerHTML={{ __html: blog.content }}>

            {/* Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn... */}
          </div>
        }
        <div className={style.containerTag}>
          {blog.topicIds.map((topicId, index) =>
            <TagBlog key={index} name={topicMap.get(topicId) ?? ""} />
          )}
        </div>
        <div className={style.itemTextDescription}>
          {blog.views} lượt xem * {FunctionUtil.convertCreatedDateToString(blog.createdDate)}
        </div>
      </div>
    </Link>
  )
}

export default GridBlogItem