import { Link } from "react-router-dom"
import image from "../../../../asset/imageBlog.png"
import style from "./style.module.scss"
import TagBlog from "./tagBlog"
type Props = {
  showDescription?: boolean,
  width?: string,
  height?: string
  itemWidth?: string
}
const GridBlogItem = ({ showDescription = false, itemWidth = "265px", width = "265px", height = "146px" }: Props) => {
  return (
    <div className={style.item} style={{ width: itemWidth }}>
      <img src={image} className={style.itemImage} style={{ width, height }} alt="Blog Image" />
      <div className={style.itemText}>
        <div className={style.itemTextDescription}>Admin</div>
        <Link to={"/blog/details"} className={style.itemTitle}>Thông báo: đấu giá giữ xe tại CVHH Đầm Sen</Link>
        {showDescription &&
          <div className={style.description}>
            Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn...
          </div>
        }
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