import AsideRecruitment from "../../element/asideRecruitment";
import GridRecruitment from "../../element/gridRecruitment";
import TitleElement from "../../element/title";
import style from "./style.module.scss"
const RecruitmentPage = () => {
    return (
        <>
            <div className={style.title}>
                <TitleElement title="Tuyển dụng" />
            </div>
            <div className="flex content-between">
                <AsideRecruitment />
                <GridRecruitment />
            </div>
            {/* <div className={style.mainContentContainer}>
                <div className={style.mainContent}>
                    <CartBlogLargeElement />
                </div>
                <AsideBlog />
            </div>
            <div className="flex content-between">
                <AsideTopic />
                <GridBlog />
            </div> */}
        </>
    )
}

export default RecruitmentPage;