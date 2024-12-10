import style from "./style.module.scss"
import { Form, Input, Radio } from 'antd'
import iconPin from "../../../../../asset/icon/pin.svg"
import iconVn from "../../../../../asset/icon/vn.png"
import { useState } from "react"
import { ApplyOptions } from "../../../../../types/ApplyOptions"
import FirebaseUtil from "../../../../../util/firebaseUtil"
import { TypeEnum } from "../../../../../types/TypeEnum"
import { FileUtil } from "../../../../../util/fileUtil"
import { v4 as uuidv4 } from 'uuid';
import { Notify } from "../../../../../util/notificationUtil"
type Props = {
    recruitmentId?: string
}
const FormApply = ({ recruitmentId }: Props) => {
    const [fileError, setFileError] = useState(false)
    const [file, setFile] = useState<File>()
    const [form] = Form.useForm()
    const onFinish = (value: Apply) => {
        console.log(value);
        if (file) {
            FirebaseUtil.uploadFile(`apply/${uuidv4()}.${FileUtil.getFileExtension(file)}`, file).then(fileUrl => {
                FirebaseUtil.create(TypeEnum.APPLY, { ...value, createdDate: new Date(), recruitmentId, cvUrl: fileUrl }).then((response) => {
                    Notify.success("Ứng tuyển thành công")
                    form.resetFields();
                    setFile(undefined)
                    setFileError(false)
                }).catch(error => {
                    console.log(error);
                    Notify.error("Ứng tuyển thất bại", error)
                })
            }).catch(error => {
                console.log(error);
                Notify.error(error)
            })
        } else {
            setFileError(true)
        }
    }
    const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0])
        }
    }
    return (
        <Form<Apply> onFinish={onFinish} form={form} initialValues={{ overtime: ApplyOptions.YES, collaborate: ApplyOptions.YES, gender: true, facebook: "", myLevel: "", oldWorkplace: "" }} layout="vertical" className={style.form}>
            <div className={style.formItem}>
                <Form.Item<Apply> label="Họ tên" name={"name"} rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}>
                    <Input className={style.input} placeholder="Nguyễn Văn A" />
                </Form.Item>
                <Form.Item<Apply> label="Giới tính" name={"gender"} >
                    <Radio.Group value={true}>
                        <Radio value={true}>Nam</Radio>
                        <Radio value={false}>Nữ</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item<Apply> label="Năm sinh" name={"birthDay"} rules={[{ required: true, message: "Vui lòng nhập năm sinh" }]}>
                    <Input className={style.input} placeholder="12-12-2000" />
                </Form.Item>
                <Form.Item<Apply> label="Nơi sinh" name={"placeOfBirth"} rules={[{ required: true, message: "Vui lòng nhập nơi sinh" }]}>
                    <Input className={style.input} placeholder="Phường 6, Quận Tân Bình, TP HCM" />
                </Form.Item>
                <Form.Item<Apply> label="Nơi ở hiện nay" name={"currentResidence"} rules={[{ required: true, message: "Vui lòng nhập nơi ở hiện tại" }]}>
                    <Input className={style.input} placeholder="123 Âu Cơ, Phường 9, Tân Bình, TP HCM" />
                </Form.Item>
                <Form.Item<Apply> label="Điện thoại" name={"phone"} rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}>
                    <div className="flex content-between">
                        <span className={style.iconVn}><img src={iconVn} alt="" style={{ marginRight: "4px" }} />+84</span>
                        <Input className={style.input} placeholder="0123456789" />
                    </div>
                </Form.Item>
                <Form.Item<Apply> label="Email" name={"email"} rules={[{ type: "email", message: "Vui lòng nhập đúng định dạng email" }, { required: true, message: "Vui lòng nhập email" }]}>
                    <Input className={style.input} placeholder="Nguyenvana@gmail.com" />
                </Form.Item>
                <Form.Item<Apply> label="Facebook cá nhân" name={"facebook"}>
                    <Input className={style.input} placeholder="facebook.com.vn" />
                </Form.Item>
                <Form.Item<Apply> label="Trình độ" name={"level"} rules={[{ required: true, message: "Vui lòng nhập trình độ" }]}>
                    <Input className={style.input} placeholder="Đại học" />
                </Form.Item>
                <Form.Item label="Đính kèm CV">
                    <div className="flex">
                        <Input value={file?.name ?? ""} className={style.input} placeholder="Không có tập tin nào được chọn" />
                        <label htmlFor="#file"><img src={iconPin} alt="" /></label>
                        <input id="#file" style={{ display: "none" }} onChange={handleInputFileChange} accept="application/pdf" type="file" />
                    </div>
                    {fileError && <span className={style.error}>Vui lòng chọn CV</span>}
                </Form.Item>
                <Form.Item<Apply> label="Bạn có sẵn sàng đi công tác dài ngày" name={'collaborate'}>
                    <Radio.Group>
                        {
                            Object.values(ApplyOptions).map((applyOption, index) =>
                                <Radio key={index} value={applyOption}>{applyOption}</Radio>
                            )
                        }
                    </Radio.Group>
                </Form.Item>
                <Form.Item<Apply> label="Bạn có sẵn sàng làm thêm giờ" name={'overtime'}>
                    <Radio.Group>
                        {
                            Object.values(ApplyOptions).map((applyOption, index) =>
                                <Radio key={index} value={applyOption}>{applyOption}</Radio>
                            )
                        }
                    </Radio.Group>
                </Form.Item>
            </div>
            <Form.Item<Apply> label="Những nơi đã từng làm việc trước đây (ghi rõ vị trí)" name={"oldWorkplace"}>
                <Input.TextArea className={style.input} rows={7} placeholder="Những nơi đã từng làm việc trước đây" />
            </Form.Item>
            <Form.Item<Apply> label="Kinh nghiệm bản thân" name={"myLevel"}>
                <Input.TextArea className={style.input} rows={7} placeholder="Kinh nghiệm bản thân" />
            </Form.Item>
            <div className="flex content-end">
                <div className={"flex content-center "}><button type='submit' className={style.submit}>Gửi ngay</button></div>
            </div>
        </Form>
    )
}

export default FormApply