import { Button, Popconfirm, Table, TableProps } from "antd"
import style from "./style.module.scss"
import { useEffect, useState } from "react"
import FirebaseUtil from "../../../../util/firebaseUtil"
import { TypeEnum } from "../../../../types/TypeEnum"
import { Link, useNavigate } from "react-router-dom"
import { Timestamp } from "firebase/firestore"
import dayjs from "dayjs"
const RecruitmentListPage = () => {
  const navigate = useNavigate()
  const [asideMap, setAsideMap] = useState<Map<string, string>>()
  const [recruitmentList, setRecruitmentList] = useState<Recruitment[]>([])
  const getInitData = async () => {
    try {
      const fields = await FirebaseUtil.readAll<Field>(TypeEnum.FIELD)
      const formOfWorks = await FirebaseUtil.readAll<FormOfWork>(TypeEnum.FORM_OF_WORK)
      const workplaces = await FirebaseUtil.readAll<Workplace>(TypeEnum.WORKPLACE)
      const asidesMap = [...fields, ...formOfWorks, ...workplaces].map((item): [string, string] => [item.id ?? "", item.name])
      setAsideMap(new Map<string, string>(asidesMap))
    } catch (error) {
      console.log("Load initial data error", error)
    }
  }
  const columns: TableProps<Recruitment>['columns'] = [
    {
      title: 'STT',
      dataIndex: 'key',
      render: (_: any, __: Recruitment, index: number) => index + 1,
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: "Lĩnh vực",
      dataIndex: "fieldId",
      key: "fieldId",
      render: (fieldId: string) => <>{asideMap?.get(fieldId)}</>
    }, {
      title: "Hình thức làm việc",
      dataIndex: "formOfWorkId",
      key: "formOfWorkId",
      render: (formOfWorkId: string) => <>{asideMap?.get(formOfWorkId)}</>
    }, {
      title: "Nơi làm việc",
      dataIndex: "workplaceId",
      key: "workplaceId",
      render: (workplaceId: string) => <>{asideMap?.get(workplaceId)}</>
    }, {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status: boolean) => <>{status ? "Đang tuyển" : "Đã hết hạn"}</>
    }, {
      title: "Ngày tạo",
      dataIndex: "createdDate",
      key: "createdDate",
      render: (createdDate: Timestamp) => <>{dayjs(createdDate.toDate()).format("DD/MM/YYYY")}</>
    },
    {
      title: "Hành động",
      dataIndex: "id",
      key: "action",
      render: (id: string, record: Recruitment) => (<div className="flex content-between items-center">
        <Link to={"/admin/recruitment/edit/" + id}>Sửa</Link>
        <Popconfirm
          title="Xóa chủ đề"
          description="Bạn có thật muốn xóa chủ đề này?"
          onConfirm={() => handleDelete(id)}
          okText="Yes"
          cancelText="No"
        >
          <Button >Xóa </Button>
        </Popconfirm>
      </div>)
    }
  ];
  useEffect(() => {
    getRecruitmentList()
    getInitData();
  }, [])

  const handleDelete = (id: string) => {
    FirebaseUtil.deleteById(TypeEnum.RECRUITMENT, id).then(() => {
      getRecruitmentList()
    })
  }
  const getRecruitmentList = () => {
    FirebaseUtil.readAll<Recruitment>(TypeEnum.RECRUITMENT).then(setRecruitmentList)
  }
  const handleCreateRecruitment = () => {
    navigate("/admin/recruitment/create")
  }
  return (
    <div className={style.container}>
      <div className="flex items-center">
        <h1>Danh sách tuyển dụng</h1>
        <Button onClick={() => handleCreateRecruitment()}>Tạo tuyển dụng</Button>
      </div>
      <Table<Recruitment> dataSource={recruitmentList} columns={columns} />;
    </div>
  )
}

export default RecruitmentListPage