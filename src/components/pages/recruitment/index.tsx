import AsideRecruitment from "../../element/asideRecruitment";
import GridRecruitment from "../../element/gridRecruitment";
import TitleElement from "../../element/title";
import style from "./style.module.scss"
const RecruitmentPage = () => {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <TitleElement title="Tuyển dụng" />
            </div>
            <div className="flex content-between">
                <AsideRecruitment />
                <GridRecruitment />
            </div>
        </div>
    )
}

export default RecruitmentPage;