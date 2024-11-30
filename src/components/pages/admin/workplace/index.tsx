import { useEffect, useState } from 'react'
import FirebaseUtil from '../../../../util/firebaseUtil'
import { TypeEnum } from '../../../../types/TypeEnum'
import style from "./style.module.scss"
import { Button, Modal, Popconfirm, Table, TableProps } from 'antd'
import { Notify } from '../../../../util/notificationUtil'
import WorkplaceFormPage from './form'
const WorkplaceListPage = () => {
    const [edit, setEdit] = useState(false)
    const [workplace, setWorkplace] = useState<Workplace>()
    const [add, setAdd] = useState(false)
    const [workplaceList, setWorkplaceList] = useState<Workplace[]>([])
    useEffect(() => {
        getListWorkplace()
    }, [])
    const getListWorkplace = () => {
        FirebaseUtil.readAll<Workplace>(TypeEnum.WORKPLACE).then(response => {
            setWorkplaceList(response)
        }).catch(error => {
            console.log("Lấy danh sách thất bại", error)
        })
    }
    const handleEdit = (item: Workplace) => {
        setEdit(true)
        setWorkplace(item)
    }
    const handleEditSuccess = () => {
        setEdit(false)
        Notify.success("Cập nhập thành công")
        getListWorkplace()
    }
    const handleDelete = (id: string) => {
        FirebaseUtil.deleteById(TypeEnum.WORKPLACE, id).then(() => {
            Notify.success("Xóa thành công")
            getListWorkplace()
        }).catch(error => {
            console.log("Xóa thất bại", error)
        })
    }
    const handleAddSuccess = () => {
        setAdd(false)
        Notify.success("Tạo thành công")
        getListWorkplace()
    }
    const columns: TableProps<Workplace>['columns'] = [
        {
            title: 'STT',
            dataIndex: 'key',
            render: (_: any, __: Workplace, index: number) => index + 1,
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: "Hành động",
            dataIndex: "id",
            key: "action",
            render: (id: string, record: Workplace) => (<>
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
            <Table<Workplace> dataSource={workplaceList} columns={columns} />;
            <Modal title="Sửa" open={edit} footer={[]} onCancel={() => setEdit(false)}>
                <WorkplaceFormPage workplace={workplace} handleEditSuccess={handleEditSuccess} />
            </Modal>
            <Modal title="Tạo" open={add} footer={[]} onCancel={() => setAdd(false)}>
                <WorkplaceFormPage handleAddSuccess={handleAddSuccess} />
            </Modal>
        </div>
    )
}

export default WorkplaceListPage