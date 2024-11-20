import bg from "../../../asset/bg.png"
import style from "./style.module.css"
const Introduction = () => {
    return (
        <div className={style.introduction} style={{ backgroundImage: `url(${bg})` }} >
        </div>
    )
}

export default Introduction