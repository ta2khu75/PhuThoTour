import imageBlog from "../../../asset/imageBlog.png"
import style from "./style.module.scss"
import left from "../../../asset/left.svg"
import right from "../../../asset/right.svg"
import LogoElement from "../logo"
import AroundButton from "./aroundButton"
const CartBlogLargeElement = () => {
    return (
        <div className={style.cart}>
            <img src={imageBlog} className={style.cartImage} alt="image blog" />
            <div className={style.cartContainer}>
                <div className={style.cartContainerText}>
                    <div className={style.cartTitle}>Thông báo mời chào giá cạnh tranh cung cấp nước đá chế tác Băng Đăng</div>
                    <div className={style.cartDescription}>THÔNG BÁO MỜI CHÀO GIÁ CẠNH TRANH CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ tổ chức chào giá cạnh tranh lựa chọn đơn vị Cung cấp nước đá để chế tác tại Công viên Văn hóa Đầm Sen.</div>
                </div>
                <div className={style.cartContainerAction}>
                    <div>
                        <img className={style.leftAction} src={left} alt="left" />
                        <img src={right} alt="right" />
                    </div>
                    <div className="flex">
                        <LogoElement className={style.cartActionLogo} />
                        <AroundButton />
                        <AroundButton />
                        <AroundButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartBlogLargeElement