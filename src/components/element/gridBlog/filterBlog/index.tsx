import { DatePicker, Input } from "antd"
import style from "./style.module.scss"
import sortImage from "../../../../asset/sort.svg"
import clsx from "clsx"
import dayjs from "dayjs"
import SearchElement from "../../searchElement"
type Props = {
    setSearch: (value: string) => void,
    setRangeDate: (value: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null) => void
}
const FilterBlog = ({ setSearch, setRangeDate }: Props) => {
    const handleDatePickerChange = (dates: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null) => {
        setRangeDate(dates)
    }
    return (
        <div className={style.container}>
            <SearchElement setSearch={setSearch} />
            <div className={clsx("flex items-center", style.right)}>
                <DatePicker.RangePicker onChange={(value) => handleDatePickerChange(value)} className={style.datePicker} />
                <img src={sortImage} alt="sort" />
                <span>A đến Z</span>
                <div className="flex items-center">
                </div>
            </div>
        </div>
    )
}

export default FilterBlog;