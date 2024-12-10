import imageBlog from "../../../asset/imageBlog.png"
import style from "./style.module.scss"
import left from "../../../asset/left.svg"
import right from "../../../asset/right.svg"
import LogoElement from "../logo"
import AroundButton from "./aroundButton"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
type Props = {
    blogList: Blog[]
}
const CartBlogLargeElement = ({ blogList }: Props) => {
    const [blogIndex, setBlogIndex] = useState(0)
    const [blog, setBlog] = useState<Blog>()
    useEffect(() => {
        if (blogList.length > 0) {
            setBlog(blogList[blogIndex])
        }
    }, [blogIndex, blogList])
    useEffect(() => {
        if (blogList.length > 0) {
            setBlogIndex(0)
        }
    }, [blogList])
    return (
        <div className={style.cart}>
            <Link to={"/blog/details/" + blog?.id}>
                <img src={blog?.imageUrl} className={style.cartImage} alt={blog?.title} />
            </Link>
            <div className={style.cartContainer}>
                <div className={style.cartContainerText}>
                    <Link to={`/blog/details/${blog?.id}`} className={style.cartTitle}>
                        {blog?.title}
                    </Link>
                    <div className={style.cartDescription} dangerouslySetInnerHTML={{ __html: blog?.content ?? "" }} ></div>
                </div>
                <div className={style.cartContainerAction}>
                    <div>
                        <img className={style.leftAction} onClick={() => setBlogIndex(blogIndex - 1 < 0 ? blogList.length - 1 : blogIndex - 1)} src={left} alt="left" />
                        <img src={right} alt="right" onClick={() => setBlogIndex(blogIndex + 1 === blogList.length ? 0 : blogIndex + 1)} />
                    </div>
                    <div className={style.action}>
                        {blogList.map((blog, index) => {
                            if (index === blogIndex) {
                                return <LogoElement className={style.cartActionLogo} />
                            } else {
                                return <AroundButton handleClick={() => setBlogIndex(index)} />
                            }
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartBlogLargeElement