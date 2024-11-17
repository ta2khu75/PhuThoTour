import { Input, Pagination } from "antd"
import SearchDocument from "./searchDocument"
import style from "./style.module.scss"
import download from "../../../asset/download.svg"
const TableDocument = () => {
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
                    <tr>
                        <td className={style.start}>1</td>
                        <td>Khám phá Hội An - Việt Nam</td>
                        <td>03/03/12 22:43 </td>
                        <td className={style.end}><img src={download} alt="download" /></td>
                    </tr>
                    <tr>
                        <td className={style.start}>1</td>
                        <td>Khám phá Hội An - Việt Nam</td>
                        <td>03/03/12 22:43 </td>
                        <td className={style.end}><img src={download} alt="download" /></td>
                    </tr>
                    <tr>
                        <td className={style.start}>1</td>
                        <td>Khám phá Hội An - Việt Nam</td>
                        <td>03/03/12 22:43 </td>
                        <td className={style.end}><img src={download} alt="download" /></td>
                    </tr>
                    <tr>
                        <td className={style.start}>1</td>
                        <td>Khám phá Hội An - Việt Nam</td>
                        <td>03/03/12 22:43 </td>
                        <td className={style.end}><img src={download} alt="download" /></td>
                    </tr>
                    <tr>
                        <td className={style.start}>1</td>
                        <td>Khám phá Hội An - Việt Nam</td>
                        <td>03/03/12 22:43 </td>
                        <td className={style.end}><img src={download} alt="download" /></td>
                    </tr>
                    <tr>
                        <td className={style.start}>1</td>
                        <td>Khám phá Hội An - Việt Nam</td>
                        <td>03/03/12 22:43 </td>
                        <td className={style.end}><img src={download} alt="download" /></td>
                    </tr>
                    <tr>
                        <td className={style.start}>1</td>
                        <td>Khám phá Hội An - Việt Nam</td>
                        <td>03/03/12 22:43 </td>
                        <td className={style.end}><img src={download} alt="download" /></td>
                    </tr>
                    <tr>
                        <td className={style.start}>1</td>
                        <td>Khám phá Hội An - Việt Nam</td>
                        <td>03/03/12 22:43 </td>
                        <td className={style.end}><img src={download} alt="download" /></td>
                    </tr>
                    <tr>
                        <td className={style.start}>1</td>
                        <td>Khám phá Hội An - Việt Nam</td>
                        <td>03/03/12 22:43 </td>
                        <td className={style.end}><img src={download} alt="download" /></td>
                    </tr>
                    <tr>
                        <td className={style.start}>1</td>
                        <td>Khám phá Hội An - Việt Nam</td>
                        <td>03/03/12 22:43 </td>
                        <td className={style.end}><img src={download} alt="download" /></td>
                    </tr>
                </tbody>
            </table>
            <div className="flex items-center content-between">
                <div className="flex"><span>Hiển thị </span><input value={10} style={{ width: "36px" }} /> <span>câu trả lời trong mỗi trang</span></div>
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </div>
    )
}

export default TableDocument