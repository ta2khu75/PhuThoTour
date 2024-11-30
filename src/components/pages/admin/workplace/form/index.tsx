import { Button, Form, Input } from 'antd'
import { useEffect } from 'react'
import FirebaseUtil from '../../../../../util/firebaseUtil'
import { TypeEnum } from '../../../../../types/TypeEnum'
type Modal = {
    workplace?: Workplace,
    handleEditSuccess?: () => void,
    handleAddSuccess?: () => void,
}
const WorkplaceFormPage = ({ workplace, handleEditSuccess, handleAddSuccess }: Modal) => {
    const [form] = Form.useForm<Workplace>()
    const onFinish = (value: Workplace) => {
        if (workplace?.id) {
            FirebaseUtil.update(TypeEnum.WORKPLACE, workplace.id, value).then(() => {
                if (handleEditSuccess) handleEditSuccess()
            })
        } else {
            FirebaseUtil.create(TypeEnum.WORKPLACE, value).then(() => {
                form.resetFields()
                if (handleAddSuccess) handleAddSuccess()
            })
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
            <Button type="primary" htmlType="submit">
                {workplace ? "Sửa" : "Tạo"}
            </Button>
        </Form>
    )
}

export default WorkplaceFormPage