import style from "./style.module.scss"
import document from "../../../asset/document.png"
type Props = {
    image: string
}
const CardDocument = ({ image }: Props) => {
    return (
        <div className={style.card} style={{ backgroundImage: `url(${image})` }}>
            <div className={style.content}>
                <img src={document} alt="tài liệu" />
                <div>
                    Báo cáo Tài Chính <br />
                    năm 2022-2023
                </div>
            </div>
        </div>
    )
}

export default CardDocument