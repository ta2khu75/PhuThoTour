import style from "./style.module.scss"
import intro1 from "../../../asset/content/intro/intro1.jpeg"
import intro2 from "../../../asset/content/intro/intro2.png"
import intro3 from "../../../asset/content/intro/intro3.png"
import intro4 from "../../../asset/content/intro/intro4.png"
import intro5 from "../../../asset/content/intro/intro5.jpeg"
import clsx from "clsx"
const Intro = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.cty}>
                    CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ
                </div>
                <div className={style.web}>
                    PHUTHOTOURIST
                </div>
                <div className={style.birthday}>Ngày thành lập 01/01/2019</div>
            </div>
            <div className={style.containerImage}>
                <div className={clsx(style.left)} style={{ backgroundImage: `url(${intro1}` }}>
                    <div className={style.text}>
                        Kết quả đấu giá giữ xe tại
                        CVVH Đầm Sen 2022
                    </div>
                </div>
                <div className={clsx(style.leftCenter)} style={{ backgroundImage: `url(${intro2}` }}>
                    <div className={style.text}>
                        Kết quả đấu giá giữ xe tại
                        CVVH Đầm Sen 2022
                    </div>
                </div>
                <div className={clsx(style.center)} style={{ backgroundImage: `url(${intro3}` }}>
                    <div className={style.text}>
                        Hơn 1000 bánh chưng lộc
                        cho khách dâng hương
                        tượng vua Hùng tại Đầm Sen
                    </div>
                </div>
                <div className={clsx(style.rightCenter)} style={{ backgroundImage: `url(${intro4}` }}>
                    <div className={style.text}>
                        Kết quả đấu giá giữ xe tại
                        CVVH Đầm Sen 2022
                    </div>
                </div>
                <div className={clsx(style.right)} style={{ backgroundImage: `url(${intro5}` }}>
                    <div className={style.text}>
                        Kết quả đấu giá giữ xe tại
                        CVVH Đầm Sen 2022
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro