import { Pagination } from "antd"
import CartRecruitment from "../cartRecruitment"
import style from "./style.module.scss"
type Props = {
    recruitmentList: Recruitment[],
    asideMap: Map<string, string>
}
const GridRecruitment = ({ recruitmentList, asideMap }: Props) => {
    return (
        <div>
            <div className={style.grid}>
                {recruitmentList.map((recruitment, index) => <CartRecruitment asideMap={asideMap} key={index} recruitment={recruitment} />)}
                {/*
                <CartRecruitment />
                <CartRecruitment />
                <CartRecruitment />
                <CartRecruitment />
                <CartRecruitment />
                <CartRecruitment />
                <CartRecruitment />
                <CartRecruitment />
                <CartRecruitment />
                */}
            </div>
            <div className={style.pagination}>
                <Pagination align="center" defaultCurrent={1} total={recruitmentList.length} />
            </div>
        </div>
    )
}

export default GridRecruitment