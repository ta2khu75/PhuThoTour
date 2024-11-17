import LogoElement from "../../element/logo"
import style from "./style.module.css"
const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footerContainer}>
                <div className={style.footerItem1}>
                    <div className={style.footerItem_logo}>
                        <LogoElement height="89px" width="140px" />
                        <div>
                            <p className={style.nameCompany}>CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ</p>
                            <div className={style.nameProject}>PHUTHOTOURIST</div>
                        </div>
                    </  div>
                    <div className={style.copyright}>Copyright@ Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)</div>
                </div>
                <div>
                    <div className={style.footerTitle}>LIÊN HỆ</div>
                    <ul>
                        <li>15 Đường số 2, Cư xá Lữ Gia,
                            Phường 15, Quận 11, TP. HCM </li>
                        <li>02838650921</li>
                        <li>vanphong@damsenpark.vn</li>
                        <li>Phuthotourist</li>
                    </ul>
                </div>
                <div>
                    <div className={style.footerTitle}>
                        CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST
                    </div>
                    <ul>
                        <li>Công viên Văn hóa Đầm Sen</li>
                        <li>Khu du lịch sinh thái Vàm Sát</li>
                        <li>Khách sạn Ngọc Lan (Quận 1)</li>
                        <li>Khách sạn Phú Thọ (Quận 11)</li>
                        <li>Trung tâm Du lịch Đầm Sen</li>
                    </ul>
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}

export default Footer