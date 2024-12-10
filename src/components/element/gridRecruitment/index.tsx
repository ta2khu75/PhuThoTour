import { Pagination } from "antd"
import CartRecruitment from "../cartRecruitment"
import style from "./style.module.scss"
import { useEffect, useState } from "react"
type Props = {
    recruitmentList: Recruitment[],
    asideMap: Map<string, string>,
    workplaceMap: Map<string, string>
}
const GridRecruitment = ({ recruitmentList, asideMap, workplaceMap }: Props) => {
    const size = 9
    const [page, setPage] = useState(1)
    const [recruitmentListShow, setRecruitmentListShow] = useState<Recruitment[]>([])
    useEffect(() => {
        const startIndex = (page - 1) * size
        const endIndex = startIndex + size
        setRecruitmentListShow(recruitmentList.slice(startIndex, endIndex))
    }, [page, recruitmentList])
    useEffect(() => {
        setPage(1)
    }, [recruitmentList])
    return (
        <div>
            <div className={style.grid}>
                {recruitmentListShow.map((recruitment) => <CartRecruitment workplaceMap={workplaceMap} asideMap={asideMap} key={recruitment.id} recruitment={recruitment} />)}
            </div>
            <div className={style.pagination}>
                <Pagination onChange={(value) => setPage(value)} align="center" pageSize={size} current={page} total={recruitmentList.length} />
            </div>
        </div>
    )
}

export default GridRecruitment