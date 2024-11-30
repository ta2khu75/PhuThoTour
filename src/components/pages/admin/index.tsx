import { Outlet } from "react-router-dom"
import Aside from "../../fragment/aside"
import style from "./style.module.scss"
const AdminPage = () => {
    return (
        <div className={style.container}>
            <Aside />
            <Outlet />
        </div>
    )
}

export default AdminPage