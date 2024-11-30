import { useEffect, useState } from 'react'
import FirebaseUtil from '../../../../util/firebaseUtil'
import { TypeEnum } from '../../../../types/TypeEnum'
import style from "./style.module.scss"
import { Button, Modal, Popconfirm, Table, TableProps } from 'antd'
import { Notify } from '../../../../util/notificationUtil'
import FormOfWorkFormPage from './form'
const FormOfWordListPage = () => {
    const [edit, setEdit] = useState(false)
    const [formOfWork, setFormOfWork] = useState<FormOfWork>()
    const [add, setAdd] = useState(false)
    const [formOfWorkList, setFormOfWorkList] = useState<FormOfWork[]>([])
    useEffect(() => {
        getListFormOfWork()
    }, [])
    const getListFormOfWork = () => {
        FirebaseUtil.readAll<FormOfWork>(TypeEnum.FORM_OF_WORK).then(response => {
            setFormOfWorkList(response)
        }).catch(error => {
            console.log("Lấy danh sách thất bại", error)
        })
    }
    const handleEdit = (item: FormOfWork) => {
        setEdit(true)
        setFormOfWork(item)
    }
    const handleEditSuccess = () => {
        setEdit(false)
        Notify.success("Cập nhập thành công")
        getListFormOfWork()
    }
    const handleDelete = (id: string) => {
        FirebaseUtil.deleteById(TypeEnum.FORM_OF_WORK, id).then(() => {
            Notify.success("Xóa chủ đề thành công")
            getListFormOfWork()
        }).catch(error => {
            console.log("Xóa thất bại", error)
        })
    }
    const handleAddSuccess = () => {
        setAdd(false)
        Notify.success("Tạo thành công")
        getListFormOfWork()
    }
    const columns: TableProps<FormOfWork>['columns'] = [
        {
            title: 'STT',
            dataIndex: 'key',
            render: (_: any, __: FormOfWork, index: number) => index + 1,
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: "Hành động",
            dataIndex: "id",
            key: "action",
            render: (id: string, record: FormOfWork) => (<>
                <Button onClick={() => handleEdit(record)}>Sửa</Button>
                <Popconfirm
                    title="Xóa chủ đề"
                    description="Bạn có thật muốn xóa?"
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
                <h1>Hình thức làm việc</h1><Button onClick={() => setAdd(true)}>Tạo</Button>
            </div>
            <Table<FormOfWork> dataSource={formOfWorkList} columns={columns} />
            <Modal title="Sửa" open={edit} footer={[]} onCancel={() => setEdit(false)}>
                <FormOfWorkFormPage formOfWork={formOfWork} handleEditSuccess={handleEditSuccess} />
            </Modal>
            <Modal title="Tạo" open={add} footer={[]} onCancel={() => setAdd(false)}>
                <FormOfWorkFormPage handleAddSuccess={handleAddSuccess} />
            </Modal>
        </div>
    )
}

export default FormOfWordListPage