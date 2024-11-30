import { DatePicker, Input } from "antd"
import style from "./style.module.scss"
import sortImage from "../../../../asset/sort.svg"
const SearchBlog = () => {
    return (
        <div className={style.search}>
            <div>
                <Input.Search placeholder="Tìm kiếm" />
            </div>
            <div className="flex items-center">
                <DatePicker.RangePicker />
                <div className="flex items-center">
                    <img src={sortImage} alt="sort" />
                    <label>A đến Z</label>
                </div>
            </div>
        </div>
    )
}

export default SearchBlog