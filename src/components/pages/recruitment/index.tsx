import { useEffect, useState } from "react";
import AsideRecruitment from "../../element/asideRecruitment";
import GridRecruitment from "../../element/gridRecruitment";
import TitleElement from "../../element/title";
import style from "./style.module.scss"
import FirebaseUtil from "../../../util/firebaseUtil";
import { TypeEnum } from "../../../types/TypeEnum";
import { where } from "firebase/firestore";
const RecruitmentPage = () => {
    const [search, setSearch] = useState("")
    const [fieldId, setFieldId] = useState<string>()
    const [workplaceId, setWorkplaceId] = useState<string>()
    const [formOfWorkId, setFormOfWorkId] = useState<string>()
    const [fieldList, setFieldList] = useState<Field[]>([])
    const [formOfWorkList, setFormOfWorkList] = useState<FormOfWork[]>([])
    const [workplaceList, setWorkplaceList] = useState<Workplace[]>([])
    const [asideMap, setAsideMap] = useState<Map<string, string>>(new Map<string, string>())
    const [workplaceMap, setWorkplaceMap] = useState<Map<string, string>>(new Map<string, string>())
    const [recruitmentList, setRecruitmentList] = useState<Recruitment[]>([])
    useEffect(() => {
        getInitData()
    }, [])
    useEffect(() => {
        console.log("fieldId", fieldId);
        console.log("formOfWorkId", formOfWorkId);
        console.log("workplaceId", workplaceId);


        if (formOfWorkId && fieldId && workplaceId) {
            getRecruitmentList(fieldId, formOfWorkId, workplaceId)
        }
    }, [fieldId, workplaceId, formOfWorkId])
    const getRecruitmentList = (fieldId: string, formOfWorkId: string, workplaceId: string) => {
        FirebaseUtil.queryData<Recruitment>(TypeEnum.RECRUITMENT, where("fieldId", "==", fieldId), where("formOfWorkId", "==", formOfWorkId), where("workplaceId", "==", workplaceId))
            .then(setRecruitmentList);
        // (response) => {
        //     console.log(response);
        //     setRecruitmentList(response)
        // })
        // FirebaseUtil.readAll<Recruitment>(TypeEnum.RECRUITMENT).then(setRecruitmentList)
    }
    const getInitData = async () => {
        try {
            const fields = await FirebaseUtil.readAll<Field>(TypeEnum.FIELD)
            const formOfWorks = await FirebaseUtil.readAll<FormOfWork>(TypeEnum.FORM_OF_WORK)
            const workplaces = await FirebaseUtil.readAll<Workplace>(TypeEnum.WORKPLACE)
            const asidesMap = [...fields, ...formOfWorks, ...workplaces].map((item): [string, string] => [item.id ?? "", item.name])
            const workplacesMap = workplaces.map((workplace): [string, string] => [workplace.id ?? "", workplace.imageUrl ?? ""])
            setWorkplaceMap(new Map<string, string>(workplacesMap))
            setAsideMap(new Map<string, string>(asidesMap))
            setFieldList(fields)
            setFormOfWorkList(formOfWorks)
            setWorkplaceList(workplaces)
            setFieldId(fields[0].id)
            setFormOfWorkId(formOfWorks[0].id)
            setWorkplaceId(workplaces[0].id)
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
                    setSearch={setSearch}
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
                <GridRecruitment workplaceMap={workplaceMap} asideMap={asideMap} recruitmentList={recruitmentList.filter(recruitment => recruitment.title.includes(search))} />
            </div>
        </div>
    )
}

export default RecruitmentPage;