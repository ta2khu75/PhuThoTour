import style from "./style.module.scss"
import imageLogo from "../../../../asset/logoRecruitment.png"
import imageContent from "../../../../asset/imageBlog.png"
import imgPin from "../../../../asset/pin.svg"
import imgVn from "../../../../asset/vn.png"
import { Form, Input, Radio } from "antd"
const RecruitmentDetailsPage = () => {
    return (
        <div className={style.container}>
            <header className="flex content-between">
                <div className="flex items-center">
                    <img src={imageLogo} alt="logo cty" />
                    <div className={style.text}>
                        <div className={style.title}>
                            Nhân viên thiết kế đồ họa
                        </div>
                        <div className={style.subTitle}>
                            Nhân viên chính thức
                        </div>
                        <div className={style.address}>
                            <span>
                                CVVH Đầm Sen
                            </span>
                            <span>
                                2 tuần trước
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={style.status}>Đang tuyển</div>
                </div>
            </header>
            <article>
                <header>
                    <img src={imageContent} alt="" />
                </header>
            </article>
            <main>
                <div className={style.titleContent}>Chi tiết tin tuyển dụng</div>
                <table>
                    <tr>
                        <td>Vị trí</td>
                        <td>Nhân viên thiết kế đồ họa</td>
                    </tr>
                    <tr>
                        <td>Vị trí</td>
                        <td>Nhân viên thiết kế đồ họa</td>
                    </tr>
                    <tr>
                        <td>Vị trí</td>
                        <td>Nhân viên thiết kế đồ họa</td>
                    </tr>
                    <tr>
                        <td>Vị trí</td>
                        <td>Nhân viên thiết kế đồ họa</td>
                    </tr>
                </table>
            </main>
            <section>
                <div className={style.titleContent}>
                    Ứng tuyển Online
                </div>
                <Form layout="vertical" className={style.form}>
                    <div className={style.formItem}>
                        <Form.Item label="Họ tên">
                            <Input className={style.input} placeholder="Nguyễn Văn A" />
                        </Form.Item>
                        <Form.Item label="Giới tính">
                            <Radio.Group value={1}>
                                <Radio value={1}>Nam</Radio>
                                <Radio value={2}>Nữ</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="Năm sinh">
                            <Input className={style.input} placeholder="12-12-2000" />
                        </Form.Item>
                        <Form.Item label="Nơi sinh">
                            <Input className={style.input} placeholder="Phường 6, Quận Tân Bình, TP HCM" />
                        </Form.Item>
                        <Form.Item label="Nơi ở hiện nay">
                            <Input className={style.input} placeholder="123 Âu Cơ, Phường 9, Tân Bình, TP HCM" />
                        </Form.Item>
                        <Form.Item label="Điện thoại">
                            <div className="flex content-between">
                                <label className={style.iconVn}><img src={imgVn} alt="" style={{ marginRight: "4px" }} />+84</label>
                                <Input className={style.input} placeholder="0123456789" />
                            </div>
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input className={style.input} placeholder="Nguyenvana@gmail.com" />
                        </Form.Item>
                        <Form.Item label="Facebook cá nhân">
                            <Input className={style.input} placeholder="facebook.com.vn" />
                        </Form.Item>
                        <Form.Item label="Trình độ">
                            <Input className={style.input} placeholder="Đại học" />
                        </Form.Item>
                        <Form.Item label="Đính kèm CV">
                            <div className="flex">
                                <Input className={style.input} placeholder="Không có tập tin nào được chọn" />
                                <img src={imgPin} alt="" />
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
                    <Form.Item label="Những nơi đã từng làm việc trước đây (ghi rõ vị trí)">
                        <Input.TextArea className={style.input} rows={7} placeholder="Những nơi đã từng làm việc trước đây" />
                    </Form.Item>
                    <Form.Item label="Kinh nghiệm bản thân">
                        <Input.TextArea className={style.input} rows={7} placeholder="Kinh nghiệm bản thân" />
                    </Form.Item>
                    <div className="flex content-end">
                        <div className={"flex content-center "}><button className={style.submit}>Gửi ngay</button></div>
                    </div>
                </Form>
            </section>
        </div>
    )
}

export default RecruitmentDetailsPage