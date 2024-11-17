import { Link } from "react-router-dom"
import m from "./style.module.css"
import LogoElement from "../../element/logo"
const Navigation = () => {
  return (
    <div className={m["nav"]}>
      <Link className={m["nav-item"]} to={"/home"}>
        Trang chủ
      </Link >
      <Link className={m["nav-item"]} to={"/home"}>
        Bài viết
      </Link >
      <LogoElement className={m.logo} />
      <Link className={m["nav-item"]} to={"/home"}>
        Tài liệu
      </Link >
      <Link className={m["nav-item"]} to={"/home"}>
        Tuyển dụng
      </Link >
    </div>
  )
}

export default Navigation