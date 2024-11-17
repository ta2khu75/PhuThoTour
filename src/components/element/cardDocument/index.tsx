import style from "./style.module.scss"
import bgImage from "../../../asset/imageBlog.png"
import document from "../../../asset/document.png"
const CardDocument = () => {
    return (
        <div className={style.card} style={{ backgroundImage: `url(${bgImage})` }}>
            <img src={document} alt="tài liệu" />
            <div>
                Báo cáo Tài Chính <br />
                năm 2022-2023
            </div>
        </div>
    )
}

export default CardDocument