import style from "./style.module.scss"
import image from "../../../../asset/imageBlog.png"
const ServiceItem = () => {
  return (
    <div className={style.item}>
      <img src={image} className={style.image} alt="" />
      <div className={style.textContainer}>
        <div className={style.title}>Vui chơi giải trí</div>
        <div className={style.description}>Với 2 khu giải trí nổi tiếng TP.HCM là Công viên văn hóa Đầm Sen, và khu du lịch sinh thái Vàm Sát (H.Cần Giờ)...</div>
      </div>
    </div>
  )
}

export default ServiceItem