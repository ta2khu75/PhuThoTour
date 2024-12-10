import { Button, Popconfirm, Table, TableProps } from "antd"
import style from "./style.module.scss"
import { useEffect, useState } from "react"
import FirebaseUtil from "../../../../util/firebaseUtil"
import { TypeEnum } from "../../../../types/TypeEnum"
import { Link, useNavigate } from "react-router-dom"
import { Timestamp, where } from "firebase/firestore"
import dayjs from "dayjs"
const ApplyListPage = () => {
  const navigate = useNavigate()
  const [applyList, setApplyList] = useState<Apply[]>([])
  const [recruitmentMap, setRecruitmentMap] = useState<Map<string, string>>(new Map<string, string>());
  const columns: TableProps<Apply>['columns'] = [
    {
      title: 'STT',
      dataIndex: 'key',
      render: (_: any, __: Apply, index: number) => index + 1,
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'title',
    }, {
      title: 'Giới tình',
      dataIndex: 'gender',
      key: 'gender',
      render: (gender: boolean) => <>{gender ? "Nam" : "Nữ"}</>
    }, {
      title: 'Năm sinh',
      dataIndex: 'birthDay',
      key: 'birthday',
    }, {
      title: 'Nơi ở hiện nay',
      dataIndex: 'currentResidence',
      key: 'currentResidence',
    }, {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: "Trình độ",
      dataIndex: "level",
      key: "level"
    }, {
      title: "Tuyển dụng",
      dataIndex: "recruitmentId",
      key: "recruitmentId",
      render: (recruitmentId: string) => <Link to={"/recruitment/details/" + recruitmentId}>{recruitmentMap.get(recruitmentId) ?? recruitmentId}</Link>
    },

    {
      title: "Công tác",
      dataIndex: "collaborate",
      key: "collaborate"
    },
    {
      title: "Làm thêm giở",
      dataIndex: "overtime",
      key: "overtime"
    }, {
      title: "Ngày tạo",
      dataIndex: "createdDate",
      key: "createdDate",
      render: (createdDate: Timestamp) => <>{dayjs(createdDate.toDate()).format("DD/MM/YYYY")}</>
    }
    , {
      title: "Hành động",
      dataIndex: "cvUrl",
      key: "action",
      render: (cvUrl: string, record: Apply) => (<div className="flex content-between items-center">
        <a href={cvUrl} target="_blank">Xem</a>
        <Popconfirm
          title="Xóa chủ đề"
          description="Bạn có thật muốn xóa chủ đề này?"
          onConfirm={() => handleDelete(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button >Xóa </Button>
        </Popconfirm>
      </div>)
    }
  ];
  useEffect(() => {
    getApplyList()
  }, [])
  // const getTopicList = () => {
  //   FirebaseUtil.readAll<Topic>(TypeEnum.TOPIC).then(response => {
  //     const topicsMap = response.reduce((topic, item) => {
  //       if (item.id)
  //         topic.set(item.id, item.name)
  //       return topic
  //     }, new Map<string, string>())
  //   })
  // }

  const handleDelete = (id?: string) => {
    if (id)
      FirebaseUtil.deleteById(TypeEnum.APPLY, id).then(() => {
        getApplyList()
      })
  }
  const getApplyList = () => {
    FirebaseUtil.readAll<Apply>(TypeEnum.APPLY).then((applies) => {
      setApplyList(applies)
      const recruitmentSet = new Set(applies.map((apply) => apply.recruitmentId));
      console.log(recruitmentSet.size);
      console.log(recruitmentSet);

      if (recruitmentSet.size > 0)
        FirebaseUtil.queryData<Recruitment>(TypeEnum.RECRUITMENT, where("__name__", "in", Array.from(recruitmentSet))).then(recruitments => {
          const recruitmentsMap = recruitments.reduce((recruitment, item) => {
            if (item.id)
              recruitment.set(item.id, item.title)
            return recruitment
          }, new Map<string, string>())
          setRecruitmentMap(recruitmentsMap);
        })
    })
  }
  const handleCreateApply = () => {
    navigate("/admin/apply/create")
  }
  return (
    <div className={style.container}>
      <div className="flex items-center">
        <h1>Danh sách bài viết</h1>
        <Button onClick={() => handleCreateApply()}>Tạo bài viết</Button>
      </div>
      <Table<Apply> dataSource={applyList} columns={columns} />;
    </div>
  )
}

export default ApplyListPage