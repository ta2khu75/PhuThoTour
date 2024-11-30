import { Button, Popconfirm, Table, TableProps } from "antd"
import style from "./style.module.scss"
import { useEffect, useState } from "react"
import FirebaseUtil from "../../../../util/firebaseUtil"
import { TypeEnum } from "../../../../types/TypeEnum"
import { Link, useNavigate } from "react-router-dom"
const RecruitmentListPage = () => {
  const navigate = useNavigate()
  const [recruitmentList, setRecruitmentList] = useState<Recruitment[]>([])
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
      title: "",
      dataIndex: "topicIds",
      key: "topicIds",
    }, {
      title: "Hành động",
      dataIndex: "id",
      key: "action",
      render: (id: string, record: Recruitment) => (<div className="flex content-between items-center">
        {/* <Button onClick={() => handleEdit(record)}>Sửa</Button> */}
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