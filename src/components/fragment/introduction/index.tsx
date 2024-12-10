import style from "./style.module.scss"
import logo from "../../../asset/logoBig.png"
import bottom from "../../../asset/bottom.svg"
const Introduction = () => {
    return (
        <div className={style.introduction} >
            <img src={logo} className={style.logo} alt="logo" />
            <a href="#content">
                <img src={bottom} className={style.bottom} alt="bottom" />
            </a>
        </div>
    )
}

export default Introduction