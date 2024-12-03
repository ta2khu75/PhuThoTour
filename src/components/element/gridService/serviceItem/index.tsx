import style from "./style.module.scss"
import image from "../../../../asset/imageBlog.png"
type Props = {
  service: { title: string, description: string, imageUrl: string }
}
const ServiceItem = ({ service }: Props) => {
  return (
    <div className={style.item}>
      <img src={service.imageUrl} className={style.image} alt={service.title} />
      <div className={style.textContainer}>
        <div className={style.title}>{service.title}</div>
        <div className={style.description}>
          {service.description}
        </div>
      </div>
    </div>
  )
}

export default ServiceItem