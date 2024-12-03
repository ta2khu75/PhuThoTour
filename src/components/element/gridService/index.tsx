import style from "./style.module.scss"
import ServiceItem from "./serviceItem"
import service1 from "../../../asset/content/home/service1.png"
import service2 from "../../../asset/content/home/service2.png"
import service3 from "../../../asset/content/home/service3.png"
const GridService = () => {
    const serviceList = [{
        title: "Vui chơi giải trí",
        description: "Với 2 khu giải trí nổi tiếng TP.HCM là Công viên văn hóa Đầm Sen, và khu du lịch sinh thái Vàm Sát (H.Cần Giờ)...",
        imageUrl: service1
    }, {
        title: "Nhà hàng – Khách sạn",
        description: "Với hệ thống khách sạn Phú Thọ và Ngọc Lan đạt chuẩn 3 sao, chuyên tiếp đón các đoàn thể thao....",
        imageUrl: service2
    }, {
        title: "Dịch vụ Lữ hành",
        description: "Tổ chức các tour trong và ngoài nước với Trung tâm Dịch vụ du lịch Đầm Sen. Ngoài ra Trung tâm còn thế mạnh là tổ chức...",
        imageUrl: service3
    }]
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.subTitle}>LĨNH VỰC HOẠT ĐỘNG</div>
                <div className={style.title}>Các dịch vụ trọng tâm</div>
                <div className={style.hr}></div>
                <div className={style.textDescription}>3 dịch vụ trọng tâm của Phuthotourist là vui chơi giải trí, nhà hàng – khách sạn, và dịch vụ lữ hành</div>
            </div>
            <div className={style.grid}>
                {serviceList.map((service, index) => <ServiceItem service={service} key={index} />)}
            </div>
        </div>
    )
}

export default GridService;