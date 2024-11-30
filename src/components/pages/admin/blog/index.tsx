import { Button, Popconfirm, Table, TableProps } from "antd"
import style from "./style.module.scss"
import { useEffect, useState } from "react"
import FirebaseUtil from "../../../../util/firebaseUtil"
import { TypeEnum } from "../../../../types/TypeEnum"
import { Link, useNavigate } from "react-router-dom"
const BlogListPage = () => {
  const navigate = useNavigate()
  const [blogList, setBlogList] = useState<Blog[]>([])
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
      title: "",
      dataIndex: "topicIds",
      key: "topicIds",
    }, {
      title: "Hành động",
      dataIndex: "id",
      key: "action",
      render: (id: string, record: Blog) => (<div className="flex content-between items-center">
        {/* <Button onClick={() => handleEdit(record)}>Sửa</Button> */}
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
  }, [])

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