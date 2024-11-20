import { Link } from "react-router-dom"
import m from "./style.module.css"
import LogoElement from "../../element/logo"
const Navigation = () => {
  return (
    <div className={m["nav"]}>
      <Link className={m["nav-item"]} to={"/"}>
        Trang chủ
      </Link >
      <Link className={m["nav-item"]} to={"/blog"}>
        Bài viết
      </Link >
      <LogoElement className={m.logo} />
      <Link className={m["nav-item"]} to={"/document"}>
        Tài liệu
      </Link >
      <Link className={m["nav-item"]} to={"/recruitment"}>
        Tuyển dụng
      </Link >
    </div>
  )
}

export default Navigation