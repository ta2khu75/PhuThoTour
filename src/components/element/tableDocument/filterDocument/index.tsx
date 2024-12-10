import { DatePicker } from "antd";
import style from "./style.module.scss"
import SearchElement from "../../searchElement";
import dayjs from "dayjs"
type Props = {
    setSearch: (value: string) => void
    setRangeDate: (value: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null) => void
}
const FilterDocument = ({ setSearch, setRangeDate }: Props) => {
    return (
        <div className="flex content-between">
            <div>
                <div className={style.label}>Ngày tạo</div>
                <DatePicker.RangePicker onChange={setRangeDate} className={style.datePicker} />
            </div>
            <div>
                <div className={style.label}>Từ khóa</div>
                <SearchElement setSearch={setSearch} />
            </div>
        </div>
    )
}

export default FilterDocument;