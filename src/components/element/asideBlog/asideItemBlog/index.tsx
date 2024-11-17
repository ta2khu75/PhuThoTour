import style from "./style.module.scss"
import image from "../../../../asset/bg.png"
const AsideItemElement = () => {
    return (
        <div className={style.card}>
            <img src={image} className={style.cardImage} alt="image item" />
            <div className={style.cartText}>
                <div className={style.cartTitle}>Thông báo đấu giá giữ xe tại CVHH Đầm Sen</div>
                <div className={style.cartDescription}>10k views . 20/02/2022</div>
            </div>
        </div>
    )
}

export default AsideItemElement