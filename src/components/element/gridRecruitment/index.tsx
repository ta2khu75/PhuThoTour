import { Pagination } from "antd"
import CartRecruitment from "../cartRecruitment"
import style from "./style.module.scss"
const GridRecruitment = () => {
    return (
        <div>

            <div className={style.grid}>
                <CartRecruitment />
                <CartRecruitment />
                <CartRecruitment />
                <CartRecruitment />
                <CartRecruitment />
                <CartRecruitment />
                <CartRecruitment />
                <CartRecruitment />
                <CartRecruitment />
            </div>
            <div className={style.pagination}>
                <Pagination align="center" defaultCurrent={1} total={50} />
            </div>
        </div>
    )
}

export default GridRecruitment