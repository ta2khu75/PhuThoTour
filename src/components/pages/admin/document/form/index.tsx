import { Button, Form, Input } from 'antd'
import style from "./style.module.scss"
import { useEffect, useState } from 'react'
import FirebaseUtil from '../../../../../util/firebaseUtil'
import { TypeEnum } from '../../../../../types/TypeEnum'
import { v4 as uuidv4 } from 'uuid';
import { FileUtil } from '../../../../../util/fileUtil'
type Props = {
  document?: Documentt,
  handleSuccess: () => void
}
const DocumentFormPage = ({ document, handleSuccess }: Props) => {
  const [documentError, setDocumentError] = useState(false)
  const [file, setFile] = useState<File>()
  const [form] = Form.useForm<Documentt>()
  useEffect(() => {
    if (document)
      form.setFieldsValue(document)
  }, [document])
  const onFinish = async (value: Documentt) => {
    if (document && document.id) {
      const fileUrl = file ? await FirebaseUtil.uploadFile(`document/${uuidv4()}.${FileUtil.getFileExtension(file)}`, file) : document?.fileUrl
      await FirebaseUtil.update(TypeEnum.DOCUMENT, document.id, { ...document, ...value, fileUrl })
      handleSuccess()
    } else {
      if (file) {
        const fileUrl = await FirebaseUtil.uploadFile(`document/${uuidv4()}.${FileUtil.getFileExtension(file)}`, file);
        await FirebaseUtil.create<Documentt>(TypeEnum.DOCUMENT, { ...value, createdDate: new Date(), fileUrl: fileUrl });
        handleSuccess()
      } else {
        setDocumentError(true)
      }
    }
  }
  const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }
  return (
    <Form layout='vertical' form={form} onFinish={onFinish} >
      <Form.Item<Documentt> label="Tiêu đề" name={"title"}>
        <Input />
      </Form.Item>
      <Form.Item label="Tài liệu">
        <Input type='file' name='document' onChange={(e) => handleInputFileChange(e)} accept='application/pdf' />
        {documentError && <span className={style.error}>Vui lòng chọn tài liệu</span>}
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>submit</Button>
      </Form.Item>
    </Form>
  )
}
export default DocumentFormPage