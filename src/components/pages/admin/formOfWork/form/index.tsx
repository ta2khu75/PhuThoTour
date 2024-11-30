import { Button, Form, Input, Space } from 'antd'
import { useEffect } from 'react'
import FirebaseUtil from '../../../../../util/firebaseUtil'
import { TypeEnum } from '../../../../../types/TypeEnum'
type Modal = {
    formOfWork?: FormOfWork,
    handleEditSuccess?: () => void,
    handleAddSuccess?: () => void,
}
const FormOfWorkFormPage = ({ formOfWork, handleEditSuccess, handleAddSuccess }: Modal) => {
    const [form] = Form.useForm<FormOfWork>()
    const onFinish = (value: FormOfWork) => {
        if (formOfWork?.id) {
            FirebaseUtil.update(TypeEnum.FORM_OF_WORK, formOfWork.id, value).then(() => {
                if (handleEditSuccess) handleEditSuccess()
            })
        } else {
            FirebaseUtil.create(TypeEnum.FORM_OF_WORK, value).then(() => {
                form.resetFields()
                if (handleAddSuccess) handleAddSuccess()
            })
        }
    }
    useEffect(() => {
        if (formOfWork) {
            form.setFieldsValue(formOfWork);
        }
    }, [formOfWork])
    return (
        <Form layout='vertical' form={form} onFinish={onFinish}>
            <Form.Item<FormOfWork>
                label="Tên"
                name="name"
                rules={[{ required: true, message: 'Vui lòng nhập tên chủ đề' }]}
            >
                <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
                {formOfWork ? "Sửa" : "Tạo"}
            </Button>
        </Form>
    )
}

export default FormOfWorkFormPage;