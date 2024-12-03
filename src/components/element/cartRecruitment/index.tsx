import style from "./style.module.scss"
import logo from "../../../asset/logoRecruitment.png"
import { useNavigate } from "react-router-dom"
import clsx from "clsx"
type Props = {
    recruitment: Recruitment,
    asideMap: Map<string, string>
}
const CartRecruitment = ({ recruitment, asideMap }: Props) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/recruitment/details/" + recruitment.id)
    }
    return (
        <div className={style.cart}>
            <div className={style.cartHeader}>
                <img src={logo} className={style.cartLogo} alt="logo" />
                <div className={style.textHeader}>
                    <div className={style.cartTitle}>{recruitment.title}</div>
                    <div className={style.cartSubtitle}>{asideMap.get(recruitment.formOfWorkId)}</div>
                    <div className={style.textFooter}>
                        <div className={style.address}>
                            <div>{asideMap.get(recruitment.workplaceId)}</div>
                            <div>2 tuần trước</div>
                        </div>
                        <div className={clsx(style.status, { [style.true]: recruitment.status, [style.false]: !recruitment.status })}>{recruitment.status ? "Đang tuyển" : "Đã hết hạn"}</div>
                    </div>
                </div>
            </div>
            <div className={style.cartDescription}>
                <div className={style.titleDescription}>Mô tả công việc:</div>
                <div className={style.description}>{recruitment.description}</div>
            </div>
            <button onClick={handleClick} className={style.cartButton}>Xem chi tiết</button>
        </div>
    )
}

export default CartRecruitment