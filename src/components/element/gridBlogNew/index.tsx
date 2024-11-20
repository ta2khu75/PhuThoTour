import GridBlogItem from "../gridBlog/gridBlogItem"
import style from "./style.module.scss"
import logoVertical from "../../../asset/logo-vertical.png"
const GridBlogNew = () => {
    return (
        <div className={style.container}>
            <img className={style.logo} src={logoVertical} alt="" />
            <div className={style.header}>
                <div className={style.subTitle}>CHIA SẺ THÔNG TIN</div>
                <div className={style.title}>Bài viết mới</div>
                <div className={style.hr}></div>
                <div className={style.textDescription}>Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch</div>
            </div>
            <div className={style.grid}>
                <GridBlogItem itemWidth="362px" width="362px" showDescription height="197px" />
                <GridBlogItem itemWidth="362px" width="362px" showDescription height="197px" />
                <GridBlogItem itemWidth="362px" width="362px" showDescription height="197px" />
            </div>
            <div className="flex content-center">
                <button className={style.button}>Xem thêm bài viết</button>
            </div>
        </div>
    )
}

export default GridBlogNew