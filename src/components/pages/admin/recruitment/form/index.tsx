import { Button, Form, Input, Radio, Select, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import FirebaseUtil from '../../../../../util/firebaseUtil'
import { TypeEnum } from '../../../../../types/TypeEnum'
import { Notify } from '../../../../../util/notificationUtil'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom'
import style from "./style.module.scss"
import ReactQuill from 'react-quill'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import 'react-quill/dist/quill.snow.css';
const RecruitmentFormPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [form] = Form.useForm<Recruitment>()
  const [imageError, setImageError] = useState(false)
  const [image, setImage] = useState<File>()
  const [recruitment, setRecruitment] = useState<Recruitment>()
  const [fieldList, setFieldList] = useState<Field[]>([])
  const [formOfWorkList, setFormOfWorkList] = useState<FormOfWork[]>([])
  const [workplaces, setWorkplaces] = useState<Workplace[]>([])
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'formula'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                         // remove formatting button
  ];
  const modules = { toolbar: toolbarOptions }
  useEffect(() => {
    getInitData()
  }, [])
  useEffect(() => {
    if (id) {
      FirebaseUtil.readById<Recruitment>(TypeEnum.RECRUITMENT, id).then((response) => {
        if (response) {
          form.setFieldsValue(response)
          setRecruitment(response)
        }
      }).catch((error) => {
        Notify.error("load blog error", error)
        console.log(error);
      })
    }
  }, [id])
  const getInitData = () => {
    FirebaseUtil.readAll<Field>(TypeEnum.FIELD).then((response) => {
      setFieldList(response)
    }).catch((error) => {
      console.log("load field error", error)
    })
    FirebaseUtil.readAll<FormOfWork>(TypeEnum.FORM_OF_WORK).then((response) => {
      setFormOfWorkList(response)
    }).catch((error) => {
      console.log("load form of work error", error)
    })
    FirebaseUtil.readAll<Workplace>(TypeEnum.WORKPLACE).then((response) => {
      setWorkplaces(response)
    }).catch((error) => {
      console.log("load workplace error", error)
    })
  }
  const handleSuccess = () => {
    Notify.success("create Recruitment successfully")
    navigate("/admin/recruitment")
  }
  const onFinish = async (values: Recruitment) => {
    //add
    console.log(values);
    if (image && document) {
      try {
        const imageUrl = await FirebaseUtil.uploadFile(`recruitment/image/${uuidv4()}.${image.name.split(".").pop()}`, image)
        await FirebaseUtil.create<Recruitment>(TypeEnum.RECRUITMENT, { ...values, imageUrl, createdDate: new Date(), details: values.details ?? [] })
        handleSuccess()
      } catch (error) {
        Notify.error("create Recruitment error: " + error)
      }
    } else {
      //update
      if (id) {
        try {
          const imageUrl = image ? await FirebaseUtil.uploadFile(`recruitment/image/${uuidv4()}.${image.name.split(".").pop()}`, image) : recruitment?.imageUrl
          if (recruitment)
            FirebaseUtil.update<Recruitment>(TypeEnum.RECRUITMENT, id, { ...recruitment, ...values, imageUrl, details:values.details??[] }).then(() => {
              handleSuccess()
            })
        } catch (error) {
          Notify.error("update Recruitment error: " + error)
        }
      } else {
        if (!image) {
          setImageError(true)
        }
      }
    }
  }
  const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0])
    }
  }
  return (
    <div className={style.container}>
      <h1>{id ? "Sửa" : "Tạo"} tin tuyển dụng</h1>
      <Form layout='vertical' form={form} onFinish={onFinish} className={style.form} initialValues={{
        status: true, // Giá trị mặc định là "Đang tuyển"
      }}>
        <div className={style.formTwoColumn}>
          <Form.Item<Recruitment> label={"Tiêu để"} name={'title'} rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}>
            <Input />
          </Form.Item>
          <Form.Item<Recruitment> label="Trạng thái" name={"status"} rules={[{ required: true, message: "Vui lòng chọn trạn thái " }]}>
            <Radio.Group defaultValue={true}>
              <Radio value={true}>Đang tuyển</Radio>
              <Radio value={false}>Đã hết hạn</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <Form.Item<Recruitment> label="Nội dung" name={"description"} >
          <Input.TextArea rows={5} />
        </Form.Item>
        <div className={style.formTwoColumn}>
          <Form.Item<Recruitment> label={"Lĩnh vực"} name={"fieldId"} rules={[{ required: true, message: "Vui lòng chọn 1 lĩnh vực" }]} >
            <Select
              allowClear
              placeholder="Please select"
              options={fieldList.map(field => ({ label: field.name, value: field.id }))}
            />
          </Form.Item>
          <Form.Item<Recruitment> label={"Hình thức làm việc"} name={"formOfWorkId"} rules={[{ required: true, message: "Vui lòng chọn 1 hình thức làm việc" }]} >
            <Select
              allowClear
              placeholder="Please select"
              options={formOfWorkList.map(formOfWork => ({ label: formOfWork.name, value: formOfWork.id }))}
            />
          </Form.Item>
          <Form.Item<Recruitment> label={"Nơi làm việc"} name={"workplaceId"} rules={[{ required: true, message: "Vui lòng chọn 1 hình thức làm việc" }]} >
            <Select
              allowClear
              placeholder="Please select"
              options={workplaces.map(workplace => ({ label: workplace.name, value: workplace.id }))}
            />
          </Form.Item>
          <Form.Item label="Hình">
            <Input type='file' name='image' onChange={(e) => handleInputFileChange(e)} accept='image/*' />
            {imageError && <span className={style.error}>Vui lòng chọn hình ảnh</span>}
          </Form.Item>
        </div>
        <Form.List name="details">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...restField}
                    label={"Tiêu đề"}
                    name={[name, 'title']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                  >
                    <Input placeholder="First Name" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    label="Nội dung"
                    name={[name, 'value']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                  >
                    <ReactQuill modules={modules} className={style.quill} theme="snow" />
                    {/* <Input placeholder="Last Name" /> */}
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Thêm chi tiết tuyển dụng
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button htmlType='submit' type='primary'>{id ? "Sửa" : "Tạo"}</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default RecruitmentFormPage;