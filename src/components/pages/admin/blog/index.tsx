import { Button, Popconfirm, Table, TableProps } from "antd"
import style from "./style.module.scss"
import { useEffect, useState } from "react"
import FirebaseUtil from "../../../../util/firebaseUtil"
import { TypeEnum } from "../../../../types/TypeEnum"
import { Link, useNavigate } from "react-router-dom"
import { Timestamp } from "firebase/firestore"
import dayjs from "dayjs"
const BlogListPage = () => {
  const navigate = useNavigate()
  const [blogList, setBlogList] = useState<Blog[]>([])
  const [topicMap, setTopicMap] = useState<Map<string, string>>(new Map<string, string>());
  const columns: TableProps<Blog>['columns'] = [
    {
      title: 'STT',
      dataIndex: 'key',
      render: (_: any, __: Blog, index: number) => index + 1,
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: "Chủ đề",
      dataIndex: "topicIds",
      key: "topicIds",
      render: (topicIds: string[]) => <>{topicIds.map(topicId => { return `${topicMap.get(topicId)}, ` })}</>
    }, {
      title: "Lượt xem",
      dataIndex: "views",
      key: "views"
    }, {
      title: "Ngày tạo",
      dataIndex: "createdDate",
      key: "createdDate",
      render: (createdDate: Timestamp) => <>{dayjs(createdDate.toDate()).format("DD/MM/YYYY")}</>
    }
    , {
      title: "Hành động",
      dataIndex: "id",
      key: "action",
      render: (id: string) => (<div className="flex content-between items-center">
        <Link to={"/admin/blog/edit/" + id}>Sửa</Link>
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
    getBlogList()
    getTopicList()
  }, [])
  const getTopicList = () => {
    FirebaseUtil.readAll<Topic>(TypeEnum.TOPIC).then(response => {
      const topicsMap = response.reduce((topic, item) => {
        if (item.id)
          topic.set(item.id, item.name)
        return topic
      }, new Map<string, string>())
      setTopicMap(topicsMap)
    })
  }

  const handleDelete = (id: string) => {
    FirebaseUtil.deleteById(TypeEnum.BLOG, id).then(() => {
      getBlogList()
    })
  }
  const getBlogList = () => {
    FirebaseUtil.readAll<Blog>(TypeEnum.BLOG).then(setBlogList)
  }
  const handleCreateBlog = () => {
    navigate("/admin/blog/create")
  }
  return (
    <div className={style.container}>
      <div className="flex items-center">
        <h1>Danh sách bài viết</h1>
        <Button onClick={() => handleCreateBlog()}>Tạo bài viết</Button>
      </div>
      <Table<Blog> dataSource={blogList} columns={columns} />;
    </div>
  )
}

export default BlogListPage