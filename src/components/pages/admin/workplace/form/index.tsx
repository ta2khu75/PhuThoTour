import { Button, Form, Input } from 'antd'
import { useEffect } from 'react'
import FirebaseUtil from '../../../../../util/firebaseUtil'
import { TypeEnum } from '../../../../../types/TypeEnum'
import { v4 as uuidv4 } from 'uuid';
type Modal = {
    workplace?: Workplace,
    handleEditSuccess?: () => void,
    handleAddSuccess?: () => void,
}
const WorkplaceFormPage = ({ workplace, handleEditSuccess, handleAddSuccess }: Modal) => {
    const [form] = Form.useForm<Workplace>()
    let image: File | undefined = undefined
    const onFinish = async (value: Workplace) => {
        if (workplace?.id) {
            let imageUrl = image ? await FirebaseUtil.uploadFile(`workplace/image/${uuidv4()}.${image.name.split(".").pop()}`, image) : workplace?.imageUrl
            FirebaseUtil.update(TypeEnum.WORKPLACE, workplace.id, { ...value, imageUrl }).then(() => {
                if (handleEditSuccess) handleEditSuccess()
            })
        } else {
            if (image) {
                const imageUrl = await FirebaseUtil.uploadFile(`workplace/image/${uuidv4()}.${image.name.split(".").pop()}`, image)
                FirebaseUtil.create(TypeEnum.WORKPLACE, { ...value, imageUrl }).then(() => {
                    form.resetFields()
                    if (handleAddSuccess) handleAddSuccess()
                })
            } else {
                FirebaseUtil.create(TypeEnum.WORKPLACE, value).then(() => {
                    form.resetFields()
                    if (handleAddSuccess) handleAddSuccess()
                })
            }
        }
    }
    const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            image = e.target.files[0]
        }
    }
    useEffect(() => {
        if (workplace) {
            form.setFieldsValue(workplace);
        }
    }, [workplace])
    return (
        <Form layout='vertical' form={form} onFinish={onFinish}>
            <Form.Item<Workplace>
                label="Tên"
                name="name"
                rules={[{ required: true, message: 'Vui lòng nhập tên' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item >
                <Input type='file' onChange={handleInputFileChange} />
            </Form.Item>
            <Button type="primary" htmlType="submit">
                {workplace ? "Sửa" : "Tạo"}
            </Button>
        </Form>
    )
}

export default WorkplaceFormPage