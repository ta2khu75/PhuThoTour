import { DatePicker, Input } from "antd"
import style from "./style.module.scss"
import sortImage from "../../../../asset/sort.svg"
import clsx from "clsx"
import iconSearch from "../../../../asset/icon/search.svg"
import { useState } from "react"
import dayjs from "dayjs"
type Props = {
    setSearch: (value: string) => void,
    setRangeDate: (value: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null) => void
}
const FilterBlog = ({ setSearch, setRangeDate }: Props) => {
    const [keyword, setKeyword] = useState<string>("")
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch(keyword)
    }
    const handleDatePickerChange = (dates: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null) => {
        setRangeDate(dates)
    }
    return (
        <div className={style.container}>
            <form className={style.search} onSubmit={(e) => handleSubmit(e)}>
                <button type="submit">
                    <img src={iconSearch} alt="search" />
                </button>
                <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Tìm kiếm" />
            </form>
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