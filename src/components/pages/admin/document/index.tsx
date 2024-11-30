import React, { useEffect, useState } from 'react'
import FirebaseUtil from '../../../../util/firebaseUtil'
import { TypeEnum } from '../../../../types/TypeEnum'
import { Button, Modal, Popconfirm, Table, TableProps } from 'antd'
import DocumentFormPage from './form'
import { Notify } from '../../../../util/notificationUtil'
import { Timestamp } from 'firebase/firestore'
import style from "./style.module.scss"
import dayjs from "dayjs"
const DocumentListPage = () => {
  const [documentList, setDocumentList] = useState<Documentt[]>([])
  const [edit, setEdit] = useState(false)
  const [document, setDocument] = useState<Documentt>()
  const [create, setCreate] = useState(false)
  const columns: TableProps<Documentt>['columns'] = [
    {
      title: 'STT',
      dataIndex: 'key',
      render: (_: any, __: Documentt, index: number) => index + 1,
    },
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdDate",
      key: "createDate",
      render: (createDate: Timestamp) => <>{dayjs(new Date(createDate.toMillis())).format("DD/MM/YYYY")}</>
    }, {
      title: "Hành động",
      dataIndex: "id",
      key: "action",
      render: (id: string, record: Documentt) => (<div className="flex content-between items-center">
        <Button onClick={() => handleEdit(record)}>Sửa</Button>
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
    getDocumentList()
  }, [])
  const getDocumentList = () => {
    FirebaseUtil.readAll<Documentt>(TypeEnum.DOCUMENT).then(data => {
      console.log(data);
      setDocumentList(data)
    })
  }
  const handleEdit = (record: Documentt) => {
    setEdit(true)
    setDocument(record)
  }
  const handleDelete = (id: string) => {
    FirebaseUtil.deleteById(TypeEnum.DOCUMENT, id).then(() => {
      getDocumentList()
    })
  }
  const handleCreateDocument = () => {
    setCreate(true)
    setDocument(undefined)
  }
  const handleCreateSuccess = () => {
    setCreate(false)
    Notify.success("Tạo tài liệu thành công")
    getDocumentList()
  }
  const handleUpdateSuccess = () => {
    setEdit(false)
    setDocument(undefined)
    Notify.success("Tạo tài liệu thành công")
    getDocumentList()

  }
  return (
    <div className={style.container}>
      <div className="flex items-center">
        <h1>Danh sách bài viết</h1>
        <Button onClick={() => handleCreateDocument()}>Tạo tài liệu</Button>
      </div>
      <Table<Documentt> dataSource={documentList} columns={columns} />;
      <Modal title="Sửa tài liệu" open={document !== undefined} footer={[]} onCancel={() => setDocument(undefined)}>
        <DocumentFormPage document={document} handleSuccess={handleUpdateSuccess} />
      </Modal>
      <Modal title="Tạo tài liệu" open={create} footer={[]} onCancel={() => setCreate(false)}>
        <DocumentFormPage handleSuccess={handleCreateSuccess} />
      </Modal>
    </div>
  )
}

export default DocumentListPage