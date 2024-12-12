import LogoElement from "../../element/logo"
import style from "./style.module.css"
import iconLocation from "../../../asset/footer/location.svg"
import iconPhone from "../../../asset/footer/phone.svg"
import iconEmail from "../../../asset/footer/mail.svg"
import iconFacebook from "../../../asset/footer/facebook.svg"
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
                    <div>Nguồn: ALTA Software</div>
                </div>
                <div>
                    <div className={style.footerTitle}>LIÊN HỆ</div>
                    <ul className={style.ulMiddle}>
                        <li><img src={iconLocation} /><span>Hẻm 618/13/8f, phường 11, quận Gò Vấp, TP. Hồ Chí Minh</span></li>
                        <li><img src={iconPhone} /><span>0788912586</span></li>
                        <li><img src={iconEmail} /><span>tranngocminh474@gmail.com</span></li>
                        <li><img src={iconFacebook} /><span><a href="https://www.facebook.com/profile.php?id=100024083208788" target="_blank" style={{color:"white"}}>Trần Minh</a></span></li>
                    </ul>
                </div>
                <div>
                    <div className={style.footerTitle}>
                        CÁC ĐƠN VỊ CÙNG HỆ THỐNG PHUTHOTOURIST
                    </div>
                    <ul className={style.ulEnd}>
                        <li>Công viên Văn hóa Đầm Sen</li>
                        <li>Khu du lịch sinh thái Vàm Sát</li>
                        <li>Khách sạn Ngọc Lan (Quận 1)</li>
                        <li>Khách sạn Phú Thọ (Quận 11)</li>
                        <li>Trung tâm Du lịch Đầm Sen</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer