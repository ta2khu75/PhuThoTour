import { useEffect, useState } from "react";
import AsideRecruitment from "../../element/asideRecruitment";
import GridRecruitment from "../../element/gridRecruitment";
import TitleElement from "../../element/title";
import style from "./style.module.scss"
import FirebaseUtil from "../../../util/firebaseUtil";
import { TypeEnum } from "../../../types/TypeEnum";
const RecruitmentPage = () => {
    const [fieldId, setFieldId] = useState<string>()
    const [workplaceId, setWorkplaceId] = useState<string>()
    const [formOfWorkId, setFormOfWorkId] = useState<string>()
    const [fieldList, setFieldList] = useState<Field[]>([])
    const [formOfWorkList, setFormOfWorkList] = useState<FormOfWork[]>([])
    const [workplaceList, setWorkplaceList] = useState<Workplace[]>([])
    const [asideMap, setAsideMap] = useState<Map<string, string>>(new Map<string, string>())
    const [recruitmentList, setRecruitmentList] = useState<Recruitment[]>([])
    useEffect(() => {
        getInitData()
        getRecruitmentList()
    }, [])
    const getRecruitmentList = () => {
        FirebaseUtil.readAll<Recruitment>(TypeEnum.RECRUITMENT).then(setRecruitmentList)
    }
    const getInitData = async () => {
        try {
            const fields = await FirebaseUtil.readAll<Field>(TypeEnum.FIELD)
            const formOfWorks = await FirebaseUtil.readAll<FormOfWork>(TypeEnum.FORM_OF_WORK)
            const workplaces = await FirebaseUtil.readAll<Workplace>(TypeEnum.WORKPLACE)
            const asidesMap = [...fields, ...formOfWorks, ...workplaces].map((item): [string, string] => [item.id ?? "", item.name])
            setAsideMap(new Map<string, string>(asidesMap))
            setFieldList(fields)
            setFormOfWorkList(formOfWorks)
            setWorkplaceList(workplaces)
        } catch (error) {
            console.log("Load initial data error", error)
        }
    }
    return (
        <div className={style.container}>
            <div className={style.title}>
                <TitleElement title="Tuyển dụng" />
            </div>
            <div className="flex content-between">
                <AsideRecruitment
                    fieldId={fieldId}
                    fieldList={fieldList}
                    setFieldId={setFieldId}
                    formOfWorkId={formOfWorkId}
                    formOfWorkList={formOfWorkList}
                    setFormOfWorkId={setFormOfWorkId}
                    workplaceId={workplaceId}
                    workplaceList={workplaceList}
                    setWorkplaceId={setWorkplaceId}
                />
                <GridRecruitment asideMap={asideMap} recruitmentList={recruitmentList} />
            </div>
        </div>
    )
}

export default RecruitmentPage;