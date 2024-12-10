import { Input, Pagination } from "antd"
import style from "./style.module.scss"
import download from "../../../asset/download.svg"
import { FunctionUtil } from "../../../util/FunctionUtil"
import FilterDocument from "./filterDocument"
import { useState } from "react"
import dayjs from "dayjs"
type Props = {
    documentList: Documentt[];
    setSearch: (value: string) => void;
    setRangeDate: (value: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null) => void
}
const TableDocument = ({ documentList, setSearch, setRangeDate }: Props) => {
    const [size, setSize] = useState(10)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (FunctionUtil.isNumeric(value)) {
            setSize(Number(value))
        }
    }
    return (
        <div className={style.grid}>
            <div className={style.search}>
                <FilterDocument setRangeDate={setRangeDate} setSearch={setSearch} />
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
                <div className="flex items-center">
                    <span>Hiển thị </span><input className={style.inputSize} value={size} onChange={(e) => handleInputChange(e)} /> <span>câu trả lời trong mỗi trang</span>
                </div>
                <Pagination defaultCurrent={1} pageSize={size} total={documentList.length} />
            </div>
        </div >
    )
}

export default TableDocument