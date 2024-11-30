import { Input, Pagination } from "antd"
import SearchDocument from "./searchDocument"
import style from "./style.module.scss"
import download from "../../../asset/download.svg"
import { FunctionUtil } from "../../../util/FunctionUtil"
type Props = {
    documentList: Documentt[]
}
const TableDocument = ({ documentList }: Props) => {
    return (
        <div className={style.grid}>
            <div className={style.search}>
                <SearchDocument />
            </div>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th className={style.start}>STT</th>
                        <th>Tên tài liệu</th>
                        <th>Ngày tạo</th>
                        <th className={style.end}>Tải tài liệu</th>
                    </tr>
                </thead>
                <tbody>
                    {documentList.map((document, index) => (
                        <tr key={index}>
                            <td className={style.start}>{index + 1}</td>
                            <td>{document.title}</td>
                            <td>{FunctionUtil.convertCreatedDateToStringHour(document.createdDate)}</td>
                            <td className={style.end}><a target="_blank" href={document.fileUrl}><img src={download} alt="download" /></a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex items-center content-between">
                <div className="flex"><span>Hiển thị </span><input value={10} style={{ width: "36px" }} /> <span>câu trả lời trong mỗi trang</span></div>
                <Pagination defaultCurrent={1} total={documentList.length} />
            </div>
        </div >
    )
}

export default TableDocument