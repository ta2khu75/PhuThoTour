import { Link, useLocation } from "react-router-dom"
import style from "./style.module.css"
import LogoElement from "../../element/logo"
import clsx from "clsx"
const Navigation = () => {
  const { pathname } = useLocation()
  return (
    <div className={clsx(style.nav)}>
      <Link className={clsx(style.navItem, { [style.active]: pathname === "/" })} to={"/"}>
        Trang chủ
      </Link >
      <Link className={clsx(style.navItem, { [style.active]: pathname.includes("/blog") })} to={"/blog"}>
        Bài viết
      </Link >
      <LogoElement className={style.logo} />
      <Link className={clsx(style.navItem, { [style.active]: pathname.includes("/document") })} to={"/document"}>
        Tài liệu
      </Link >
      <Link className={clsx(style.navItem, { [style.active]: pathname.includes("/recruitment") })} to={"/recruitment"}>
        Tuyển dụng
      </Link >
    </div>
  )
}

export default Navigation