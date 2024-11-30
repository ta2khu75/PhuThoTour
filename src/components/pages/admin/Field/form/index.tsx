import { Button, Form, Input } from 'antd'
import { useEffect } from 'react'
import FirebaseUtil from '../../../../../util/firebaseUtil'
import { TypeEnum } from '../../../../../types/TypeEnum'
type Modal = {
    field?: Field,
    handleEditSuccess?: () => void,
    handleAddSuccess?: () => void,
}
const FieldFormPage = ({ field, handleEditSuccess, handleAddSuccess }: Modal) => {
    const [form] = Form.useForm<Field>()
    const onFinish = (value: Field) => {
        if (field?.id) {
            FirebaseUtil.update(TypeEnum.FIELD, field.id, value).then(() => {
                if (handleEditSuccess) handleEditSuccess()
            })
        } else {
            FirebaseUtil.create(TypeEnum.FIELD, value).then(() => {
                form.resetFields()
                if (handleAddSuccess) handleAddSuccess()
            })
        }
    }
    useEffect(() => {
        if (field) {
            form.setFieldsValue(field);
        }
    }, [field])
    return (
        <Form layout='vertical' form={form} onFinish={onFinish}>
            <Form.Item<Field>
                label="Tên"
                name="name"
                rules={[{ required: true, message: 'Vui lòng nhập tên' }]}
            >
                <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
                {field ? "Sửa" : "Tạo"}
            </Button>
        </Form>
    )
}

export default FieldFormPage