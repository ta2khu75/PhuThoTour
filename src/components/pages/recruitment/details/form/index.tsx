import React from 'react'
import style from "./style.module.scss"
import { Form, Input, Radio } from 'antd'
import iconPin from "../../../../../asset/icon/pin.svg"
import iconVn from "../../../../../asset/icon/vn.png"
const FormApply = () => {
    const onFinish = (value: Apply) => [
        console.log(value)
    ]
    return (
        <Form onFinish={onFinish} layout="vertical" className={style.form}>
            <div className={style.formItem}>
                <Form.Item<Apply> label="Họ tên" name={"name"}>
                    <Input className={style.input} placeholder="Nguyễn Văn A" />
                </Form.Item>
                <Form.Item<Apply> label="Giới tính" name={"gender"} >
                    <Radio.Group value={true}>
                        <Radio value={true}>Nam</Radio>
                        <Radio value={false}>Nữ</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item<Apply> label="Năm sinh" name={"birthDay"} >
                    <Input type='date' className={style.input} placeholder="12-12-2000" />
                </Form.Item>
                <Form.Item<Apply> label="Nơi sinh" name={"placeOfBirth"}>
                    <Input className={style.input} placeholder="Phường 6, Quận Tân Bình, TP HCM" />
                </Form.Item>
                <Form.Item<Apply> label="Nơi ở hiện nay" name={"currentResidence"}>
                    <Input className={style.input} placeholder="123 Âu Cơ, Phường 9, Tân Bình, TP HCM" />
                </Form.Item>
                <Form.Item<Apply> label="Điện thoại" name={"phone"}>
                    <div className="flex content-between">
                        <label className={style.iconVn}><img src={iconVn} alt="" style={{ marginRight: "4px" }} />+84</label>
                        <Input className={style.input} placeholder="0123456789" />
                    </div>
                </Form.Item>
                <Form.Item<Apply> label="Email" name={"email"}>
                    <Input className={style.input} placeholder="Nguyenvana@gmail.com" />
                </Form.Item>
                <Form.Item<Apply> label="Facebook cá nhân" name={"facebook"}>
                    <Input className={style.input} placeholder="facebook.com.vn" />
                </Form.Item>
                <Form.Item<Apply> label="Trình độ" name={"level"}>
                    <Input className={style.input} placeholder="Đại học" />
                </Form.Item>
                <Form.Item label="Đính kèm CV">
                    <div className="flex">
                        <Input type='file' className={style.input} placeholder="Không có tập tin nào được chọn" />
                        <img src={iconPin} alt="" />
                    </div>
                </Form.Item>
                <Form.Item label="Bạn có sẵn sàng đi công tác dài ngày">
                    <Radio.Group value={1}>
                        <Radio value={1}>Có</Radio>
                        <Radio value={2}>Tùy thời điểm</Radio>
                        <Radio value={2}>Không</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Bạn có sẵn sàng làm thêm giờ">
                    <Radio.Group value={1}>
                        <Radio value={1}>Có</Radio>
                        <Radio value={2}>Tùy thời điểm</Radio>
                        <Radio value={2}>Không</Radio>
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