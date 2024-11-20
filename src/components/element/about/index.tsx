import AboutImage from "./img"
import style from "./style.module.scss"
const About = () => {
    return (
        <div className={style.container}>
            <div className={style.containerText}>
                <div className={style.header}>
                    <div className={style.about}>VỀ CHÚNG TÔI</div>
                    <div className={style.title}>Chúng tôi cung cấp dịch vụ du lịch
                        đáp ứng mọi nhu cầu của bạn!</div>
                    <div className={style.hr}></div>
                </div>
                <article>
                    <p>Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist), là một đơn vị thành viên của Saigontourist. Phuthotourist được biết đến với các sản phẩm du lịch nổi tiếng tại TP.HCM (Quận 11) như:</p>
                    <ul>
                        <li>Công viên Văn hóa Đầm Sen
                        </li>
                        <li>
                            Khu du lịch sinh thái Vàm Sát
                        </li>
                        <li>
                            Khách sạn Ngọc Lan
                        </li>
                        <li>
                            Khách sạn Phú Thọ
                        </li>
                        <li>
                            Trung tâm chăm sóc sức khỏe & giải trí Đầm Sen (Damsen Plaza)
                        </li>
                        <li>
                            Nhà hàng Thủy Tạ Đầm Sen
                        </li>
                        <li>
                            Cà phê Vườn Đá
                        </li>
                        <li>
                            Trung tâm Dịch vụ Du lịch Đầm Sen (Damsen Travel)
                        </li>
                        <li>
                            Liên kết với Công viên nước Đầm Sen (Đầm Sen Water Park).
                        </li>
                    </ul>
                </article>
                <button>Xem chi tiết</button>
            </div>
            <AboutImage zIndex={1} width="487px" height="311px" right="213px" top="46px" />
            <AboutImage zIndex={2} width="552px" height="340px" right="81px" top="305px" />
        </div>
    )
}

export default About