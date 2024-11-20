import style from "./style.module.scss"
import ServiceItem from "./serviceItem"
const GridService = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.subTitle}>LĨNH VỰC HOẠT ĐỘNG</div>
                <div className={style.title}>Các dịch vụ trọng tâm</div>
                <div className={style.hr}></div>
                <div className={style.textDescription}>3 dịch vụ trọng tâm của Phuthotourist là vui chơi giải trí, nhà hàng – khách sạn, và dịch vụ lữ hành</div>
            </div>
            <div className={style.grid}>
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
            </div>
        </div>
    )
}

export default GridService;