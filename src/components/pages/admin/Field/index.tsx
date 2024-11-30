import { useEffect, useState } from 'react'
import FirebaseUtil from '../../../../util/firebaseUtil'
import { TypeEnum } from '../../../../types/TypeEnum'
import style from "./style.module.scss"
import { Button, Modal, Popconfirm, Table, TableProps } from 'antd'
import { Notify } from '../../../../util/notificationUtil'
import FieldFormPage from './form'
const FieldListPage = () => {
    const [edit, setEdit] = useState(false)
    const [field, setField] = useState<Field>()
    const [add, setAdd] = useState(false)
    const [fieldList, setFieldList] = useState<Field[]>([])
    useEffect(() => {
        getListField()
    }, [])
    const getListField = () => {
        FirebaseUtil.readAll<Field>(TypeEnum.FIELD).then(response => {
            setFieldList(response)
        }).catch(error => {
            console.log("Lấy danh sách thất bại", error)
        })
    }
    const handleEdit = (item: Field) => {
        setEdit(true)
        setField(item)
    }
    const handleEditSuccess = () => {
        setEdit(false)
        Notify.success("Cập nhập thành công")
        getListField()
    }
    const handleDelete = (id: string) => {
        FirebaseUtil.deleteById(TypeEnum.FIELD, id).then(() => {
            Notify.success("Xóa thành công")
            getListField()
        }).catch(error => {
            console.log("Xóa thất bại", error)
        })
    }
    const handleAddSuccess = () => {
        setAdd(false)
        Notify.success("Tạo thành công")
        getListField()
    }
    const columns: TableProps<Field>['columns'] = [
        {
            title: 'STT',
            dataIndex: 'key',
            render: (_: any, __: Field, index: number) => index + 1,
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: "Hành động",
            dataIndex: "id",
            key: "action",
            render: (id: string, record: Field) => (<>
                <Button onClick={() => handleEdit(record)}>Sửa</Button>
                <Popconfirm
                    title="Xóa"
                    description="Bạn có thật muốn xóa này?"
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
                <h1>Lĩnh vực</h1><Button onClick={() => setAdd(true)}>Tạo</Button>
            </div>
            <Table<Field> dataSource={fieldList} columns={columns} />;
            <Modal title="Sửa" open={edit} footer={[]} onCancel={() => setEdit(false)}>
                <FieldFormPage field={field} handleEditSuccess={handleEditSuccess} />
            </Modal>
            <Modal title="Tạo" open={add} footer={[]} onCancel={() => setAdd(false)}>
                <FieldFormPage handleAddSuccess={handleAddSuccess} />
            </Modal>
        </div>
    )
}

export default FieldListPage