import style from "./style.module.scss"
import logoBlur from "../../../asset/logoBlur.png"
import { Input } from "antd"
import AsideItemRecruitment from "./asideItemRecruitment"
const AsideRecruitment = () => {
    return (
        <div className={style.aside}>
            <div className={style.asideContainer}>
                <div className={style.asideSearch}>
                    <Input.Search placeholder="Tìm kiếm" />
                </div>
                <AsideItemRecruitment />
                <AsideItemRecruitment />
                <AsideItemRecruitment />
            </div>
            <img src={logoBlur} className={style.asideLogo} alt="image blur" />
        </div>
    )
}

export default AsideRecruitment