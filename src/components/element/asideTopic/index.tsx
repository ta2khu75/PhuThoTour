import AsideItemTopic from "./asideItemTopic"
import style from "./style.module.scss"
import logoBlur from "../../../asset/logoBlur.png"
const AsideTopic = () => {
    return (
        <div className={style.aside}>
            <div className={style.asideTitle}>Chủ đề bài viết</div>
            <div className={style.asideContent}>
                <AsideItemTopic title="Giới thiệu" active />
                <AsideItemTopic title="Giới thiệu" />
                <AsideItemTopic title="Giới thiệu" />
                <AsideItemTopic title="Giới thiệu" />
                <AsideItemTopic title="Giới thiệu" />
                <AsideItemTopic title="Giới thiệu" />
            </div>
            <img src={logoBlur} className={style.asideLogo} alt="image blur"/>
        </div>
    )
}

export default AsideTopic