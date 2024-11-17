import style from "./style.module.scss"
import TagRecruitment from "./tagRecruitment"
const AsideItemRecruitment = () => {
    return (
        <div>
            <div className={style.title}>Lĩnh vực</div>
            <TagRecruitment title="Hướng dẫn viên" active />
            <TagRecruitment title="Kinh doanh" />
            <TagRecruitment title="Kinh doanh" />
            <TagRecruitment title="Kinh doanh" />
            <TagRecruitment title="Kinh doanh" />
            <TagRecruitment title="Kinh doanh" />
        </div>
    )
}

export default AsideItemRecruitment