import style from "./style.module.scss"
import imageBg from "../../../asset/imageBlog.png"
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
                <div className={clsx(style.left, style.text)} style={{ backgroundImage: `url(${imageBg}` }}>
                    Kết quả đấu giá giữ xe tại
                    CVVH Đầm Sen 2022</div>
                <div className={clsx(style.leftCenter, style.text)} style={{ backgroundImage: `url(${imageBg}` }}>
                    Kết quả đấu giá giữ xe tại
                    CVVH Đầm Sen 2022
                </div>
                <div className={clsx(style.center, style.text)} style={{ backgroundImage: `url(${imageBg}` }}>Kết quả đấu giá giữ xe tại
                    CVVH Đầm Sen 2022</div>
                <div className={clsx(style.rightCenter, style.text)} style={{ backgroundImage: `url(${imageBg}` }}>Kết quả đấu giá giữ xe tại
                    CVVH Đầm Sen 2022</div>
                <div className={clsx(style.right, style.text)} style={{ backgroundImage: `url(${imageBg}` }}>
                    Kết quả đấu giá giữ xe tại
                    CVVH Đầm Sen 2022
                </div>
            </div>
        </div>
    )
}

export default Intro