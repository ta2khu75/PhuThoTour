import React, { useState } from 'react'
import style from "./style.module.scss"
import iconSearch from "../../../asset/icon/search.svg"
type Props = {
    setSearch: (value: string) => void
}
const SearchElement = ({ setSearch }: Props) => {
    const [keyword, setKeyword] = useState("")
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch(keyword)
    }
    return (
        <form className={style.search} onSubmit={(e) => handleSubmit(e)}>
            <button type="submit">
                <img src={iconSearch} alt="search" />
            </button>
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Tìm kiếm" />
        </form>
    )
}

export default SearchElement