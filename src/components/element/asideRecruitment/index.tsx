import style from "./style.module.scss"
import logoBlur from "../../../asset/logoBlur.png"
import AsideItemRecruitment from "./asideItemRecruitment"
import SearchElement from "../searchElement"
type Props = {
    setSearch: (value: string) => void
    fieldList: Field[],
    setFieldId: React.Dispatch<React.SetStateAction<string | undefined>>,
    setFormOfWorkId: React.Dispatch<React.SetStateAction<string | undefined>>,
    setWorkplaceId: React.Dispatch<React.SetStateAction<string | undefined>>,
    formOfWorkList: FormOfWork[],
    workplaceList: Workplace[],
    fieldId?: string,
    workplaceId?: string,
    formOfWorkId?: string,
}
const AsideRecruitment = ({ fieldList, formOfWorkList, workplaceList, fieldId, workplaceId, formOfWorkId, setFieldId, setFormOfWorkId, setWorkplaceId, setSearch }: Props) => {
    return (
        <div className={style.aside}>
            <div className={style.asideContainer}>
                <div className={style.asideSearch}>
                    <SearchElement setSearch={setSearch} />
                </div>
                <AsideItemRecruitment list={fieldList} id={fieldId} title="Lĩnh vực" handleClick={setFieldId} />
                <AsideItemRecruitment list={formOfWorkList} id={formOfWorkId} title="Hình thức làm việc" handleClick={setFormOfWorkId} />
                <AsideItemRecruitment list={workplaceList} id={workplaceId} title="Nơi làm việc" handleClick={setWorkplaceId} />
            </div>
            <img src={logoBlur} className={style.asideLogo} alt="image blur" />
        </div>
    )
}

export default AsideRecruitment