import { Button, Form, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import FirebaseUtil from '../../../../../util/firebaseUtil'
import { TypeEnum } from '../../../../../types/TypeEnum'
import { Notify } from '../../../../../util/notificationUtil'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom'
import style from "./style.module.scss"
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
const BlogFormPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [form] = Form.useForm<Blog>()
  const [topicList, setTopicList] = useState<Topic[]>([])
  const [documentError, setDocumentError] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [image, setImage] = useState<File>()
  const [document, setDocument] = useState<File>()
  const [blog, setBlog] = useState<Blog>()
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
    getTopicList()
  }, [])
  useEffect(() => {
    if (id) {
      FirebaseUtil.readById<Blog>(TypeEnum.BLOG, id).then((response) => {
        if (response) {
          form.setFieldsValue(response)
          setBlog(response)
          console.log(response);
        }
      }).catch((error) => {
        Notify.error("load blog error", error)
        console.log(error);
      })
    }
  }, [id])
  const getTopicList = () => {
    FirebaseUtil.readAll<Topic>(TypeEnum.TOPIC).then(setTopicList).catch((error) => {
      Notify.error("topic list error", error)
      console.log(error);
    })
  }
  const handleSuccess = () => {
    Notify.success("create Blog successfully")
    navigate("/admin/blog")
  }
  const onFinish = async (values: Blog) => {
    //add
    if (image && document) {
      try {
        const imageUrl = await FirebaseUtil.uploadFile(`blog/image/${uuidv4()}.${image.name.split(".").pop()}`, image)
        const documentUrl = await FirebaseUtil.uploadFile(`blog/image/${uuidv4()}.${document.name.split(".").pop()}`, document)
        await FirebaseUtil.create<Blog>(TypeEnum.BLOG, { ...values, imageUrl, documentUrl, createdDate: new Date() })
        handleSuccess()
      } catch (error) {
        Notify.error("create Blog error: " + error)
      }

    } else {
      //update
      if (id) {
        try {
          let imageUrl = image ? await FirebaseUtil.uploadFile(`blog/image/${uuidv4()}.${image.name.split(".").pop()}`, image) : blog?.imageUrl
          let documentUrl = document ? await FirebaseUtil.uploadFile(`blog/image/${uuidv4()}.${document.name.split(".").pop()}`, document) : blog?.documentUrl
          if (blog)
            await FirebaseUtil.update<Blog>(TypeEnum.BLOG, id, { ...blog, ...values, imageUrl, documentUrl })
          handleSuccess()
        } catch (error) {
          Notify.error("update Blog error: " + error)
        }
      } else {
        if (!document) {
          setDocumentError(true)
        }
        if (!image) {
          setImageError(true)
        }
      }
    }
  }
  const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.name === "image") {
        setImage(e.target.files[0])
      } else {
        setDocument(e.target.files[0])
      }
    }
  }
  return (
    <div>
      <h1>{id ? "Sửa" : "Tạo"} bài viết</h1>
      <Form layout='vertical' form={form} onFinish={onFinish} className={style.form} >
        <div className={style.formTwoColumn}>
          <Form.Item<Blog> label={"Tiêu để"} name={'title'} rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}>
            <Input />
          </Form.Item>
          <Form.Item<Blog> label="Chủ đề" name={"topicIds"} rules={[{ required: true, message: "Vui lòng chọn 1 hoặc nhiều chủ đề" }]}>
            <Select
              mode="multiple"
              allowClear
              placeholder="Please select"
              options={topicList.map(topic => ({ label: topic.name, value: topic.id }))}
            />
          </Form.Item>
        </div>
        <Form.Item<Blog> label="Nội dung" name={"content"} >
          <ReactQuill modules={modules} value={blog?.content} className={style.quill} theme="snow" />
        </Form.Item>
        <div className={style.formTwoColumn}>
          <Form.Item label="Hình">
            <Input type='file' name='image' onChange={(e) => handleInputFileChange(e)} accept='image/*' />
            {imageError && <span className={style.error}>Vui lòng chọn hình ảnh</span>}
          </Form.Item>
          <Form.Item label="Tài liệu">
            <Input type='file' name='document' onChange={(e) => handleInputFileChange(e)} accept='application/pdf' />
            {documentError && <span className={style.error}>Vui lòng chọn tài liệu</span>}
          </Form.Item>
        </div>
        <Form.Item>
          <Button htmlType='submit' type='primary'>{id ? "Sửa" : "Tạo"}</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default BlogFormPage