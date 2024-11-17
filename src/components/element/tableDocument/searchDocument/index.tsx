import { DatePicker, Form, Input } from "antd";
import style from "./style.module.scss"
const SearchDocument = () => {
    return (
        <div className="flex content-between">
            <div>
                <div className={style.label}>Ngày tạo</div>
                <DatePicker.RangePicker />
            </div>
            <div>
                <div className={style.label}>Từ khóa</div>
                <Input.Search placeholder="Tìm kiếm" />
            </div>
        </div>
    )
}

export default SearchDocument;