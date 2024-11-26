import CardDocument from "../../element/cardDocument"
import TitleElement from "../../element/title"
import style from "./style.module.scss"
import bottom from "../../../asset/bottom.svg"
import TableDocument from "../../element/tableDocument"
import document1 from "../../../asset/content/page/document/document1.jpeg"
import document2 from "../../../asset/content/page/document/document2.jpeg"
import document3 from "../../../asset/content/page/document/document3.jpeg"
import document4 from "../../../asset/content/page/document/document4.jpeg"
import document5 from "../../../asset/content/page/document/document5.jpeg"
import document6 from "../../../asset/content/page/document/document6.jpeg"
import document7 from "../../../asset/content/page/document/document7.jpeg"
import document8 from "../../../asset/content/page/document/document8.jpeg"
const DocumentPage = () => {
    return (
        <div>
            <div className={style.title}>
                <TitleElement title="Tài liệu" />
            </div>
            <div className="flex content-center">
                <div className={style.gridCard}>
                    <CardDocument image={document1} />
                    <CardDocument image={document2} />
                    <CardDocument image={document3} />
                    <CardDocument image={document4} />
                    <CardDocument image={document5} />
                    <CardDocument image={document6} />
                    <CardDocument image={document7} />
                    <CardDocument image={document8} />
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
        </div>
    )
}

export default DocumentPage