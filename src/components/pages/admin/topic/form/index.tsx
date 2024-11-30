import { Button, Form, Input, Space } from 'antd'
import { useEffect } from 'react'
import FirebaseUtil from '../../../../../util/firebaseUtil'
import { TypeEnum } from '../../../../../types/TypeEnum'
type Modal = {
    topic?: Topic,
    handleEditSuccess?: () => void,
    handleAddSuccess?: () => void,
}
const TopicFormPage = ({ topic, handleEditSuccess, handleAddSuccess }: Modal) => {
    const [form] = Form.useForm<Topic>()
    const onFinish = (value: Topic) => {
        if (topic?.id) {
            FirebaseUtil.update(TypeEnum.TOPIC, topic.id, value).then(() => {
                if (handleEditSuccess) handleEditSuccess()
            })
        } else {
            FirebaseUtil.create(TypeEnum.TOPIC, value).then(() => {
                form.resetFields()
                if (handleAddSuccess) handleAddSuccess()
            })
        }
    }
    useEffect(() => {
        if (topic) {
            form.setFieldsValue(topic);
        }
    }, [topic])
    return (
        <Form layout='vertical' form={form} onFinish={onFinish}>
            <Form.Item<Topic>
                label="Tên chủ đề"
                name="name"
                rules={[{ required: true, message: 'Vui lòng nhập tên chủ đề' }]}
            >
                <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
                {topic ? "Sửa" : "Tạo"}
            </Button>
        </Form>
    )
}

export default TopicFormPage