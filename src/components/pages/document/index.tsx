import CardDocument from "../../element/cardDocument"
import TitleElement from "../../element/title"
import style from "./style.module.scss"
import bottom from "../../../asset/bottom.svg"
import TableDocument from "../../element/tableDocument"
const DocumentPage = () => {
    return (
        <>
            <div className={style.title}>
                <TitleElement title="Tài liệu" />
            </div>
            <div className="flex content-center">
                <div className={style.gridCard}>
                    <CardDocument />
                    <CardDocument />
                    <CardDocument />
                    <CardDocument />
                    <CardDocument />
                    <CardDocument />
                    <CardDocument />
                    <CardDocument />
                </div>
            </div>
            <div className={style.iconBottom}>
                <a href="#table">
                    <img src={bottom} alt="bottom" />
                </a>
            </div>
            <div id="table" className={style.tableData}>
                <TableDocument />
            </div>
        </>
    )
}

export default DocumentPage