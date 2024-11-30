import { useEffect, useState } from 'react'
import FirebaseUtil from '../../../../util/firebaseUtil'
import { TypeEnum } from '../../../../types/TypeEnum'
import style from "./style.module.scss"
import { Button, Modal, Popconfirm, Table, TableProps } from 'antd'
import { Notify } from '../../../../util/notificationUtil'
import TopicFormPage from './form'
const TopicListPage = () => {
    const [edit, setEdit] = useState(false)
    const [topic, setTopic] = useState<Topic>()
    const [add, setAdd] = useState(false)
    const [topicList, setTopicList] = useState<Topic[]>([])
    useEffect(() => {
        getListTopic()
    }, [])
    const getListTopic = () => {
        FirebaseUtil.readAll<Topic>(TypeEnum.TOPIC).then(response => {
            setTopicList(response)
        }).catch(error => {
            console.log("Lấy danh sách chủ đ�� thất bại", error)
        })
    }
    const handleEdit = (item: Topic) => {
        setEdit(true)
        setTopic(item)
    }
    const handleEditSuccess = () => {
        setEdit(false)
        Notify.success("Cập nhập chủ đ�� thành công")
        getListTopic()
    }
    const handleDelete = (id: string) => {
        FirebaseUtil.deleteById(TypeEnum.TOPIC, id).then(() => {
            Notify.success("Xóa chủ đề thành công")
            getListTopic()
        }).catch(error => {
            console.log("Xóa chủ đề thất bại", error)
        })
    }
    const handleAddSuccess = () => {
        setAdd(false)
        Notify.success("Tạo chủ đề thành công")
        getListTopic()
    }
    const columns: TableProps<Topic>['columns'] = [
        {
            title: 'STT',
            dataIndex: 'key',
            render: (_: any, __: Topic, index: number) => index + 1,
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: "Hành động",
            dataIndex: "id",
            key: "action",
            render: (id: string, record: Topic) => (<>
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
            </>)
        }
    ];
    return (
        <div className={style.container}>
            <div className='flex items-center'>
                <h1>Chủ đề</h1><Button onClick={() => setAdd(true)}>Tạo chủ đề</Button>
            </div>
            <Table<Topic> dataSource={topicList} columns={columns} />;
            <Modal title="Sửa chủ đề" open={edit} footer={[]} onCancel={() => setEdit(false)}>
                <TopicFormPage topic={topic} handleEditSuccess={handleEditSuccess} />
            </Modal>
            <Modal title="Tạo chủ đề" open={add} footer={[]} onCancel={() => setAdd(false)}>
                <TopicFormPage handleAddSuccess={handleAddSuccess} />
            </Modal>
        </div>
    )
}

export default TopicListPage