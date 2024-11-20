import style from "./style.module.scss"
import logo from "../../../asset/logoRecruitment.png"
import { useNavigate } from "react-router-dom"
const CartRecruitment = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/recruitment/details")
    }
    return (
        <div className={style.cart}>
            <div className={style.cartHeader}>
                <img src={logo} className={style.cartLogo} alt="logo" />
                <div className={style.textHeader}>
                    <div className={style.cartTitle}>Nhân viên thiết kế đồ họa</div>
                    <div className={style.cartSubtitle}>Nhân viên chính thức</div>
                    <div className={style.textFooter}>
                        <div className={style.address}>
                            <div>CVVH Đầm Sen</div>
                            <div>2 tuần trước</div>
                        </div>
                        <div className={style.status}>Đang tuyển</div>
                    </div>
                </div>
            </div>
            <div className={style.cartDescription}>
                <div>Mô tả công việc:</div>
                <p>Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lich, QT kinh doanh, Marketing. Am hiểu tâm lý ...</p>
            </div>
            <button onClick={handleClick} className={style.cartButton}>Xem chi tiết</button>
        </div>
    )
}

export default CartRecruitment