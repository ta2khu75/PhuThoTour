import style from "./style.module.scss"
import image from "../../../../asset/imageBlog.png"
type Props = {
    width: string
    height: string
    zIndex: number
    top: string,
    right: string,
}
const AboutImage = ({ width, height, zIndex, top, right }: Props) => {
    return (
        <img src={image} className={style.image} style={{ width, height, zIndex, top, right, position: "absolute" }} alt="image" />
    )
}

export default AboutImage