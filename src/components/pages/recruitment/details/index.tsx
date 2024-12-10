import style from "./style.module.scss"
import imageLogo from "../../../../asset/logoRecruitment.png"
import imageContent from "../../../../asset/imageBlog.png"
import imgPin from "../../../../asset/pin.svg"
import imgVn from "../../../../asset/vn.png"
import { Form, Input, Radio } from "antd"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import FirebaseUtil from "../../../../util/firebaseUtil"
import { TypeEnum } from "../../../../types/TypeEnum"
import iconLocation from "../../../../asset/icon/location.svg"
import iconOclock from "../../../../asset/icon/oclock.svg"
import clsx from "clsx"
import FormApply from "./form"
const RecruitmentDetailsPage = () => {
    const { id } = useParams()
    const [recruitment, setRecruitment] = useState<Recruitment>()
    const [formOfWork, setFormOfWork] = useState<FormOfWork>()
    const [workplace, setWorkplace] = useState<Workplace>()
    useEffect(() => {
        getRecruitment()
    }, [id])
    useEffect(() => {
        if (recruitment) {
            getMoreInfo(recruitment.workplaceId, recruitment.formOfWorkId)
        }
    }, [recruitment])
    const getMoreInfo = (workplaceId: string, formOfWorkId: string) => {
        FirebaseUtil.readById<FormOfWork>(TypeEnum.FORM_OF_WORK, formOfWorkId).then(setFormOfWork)
        FirebaseUtil.readById<Workplace>(TypeEnum.WORKPLACE, workplaceId).then(setWorkplace)
    }
    const getRecruitment = () => {
        if (id) {
            FirebaseUtil.readById<Recruitment>(TypeEnum.RECRUITMENT, id).then(setRecruitment)
        }
    }
    return (
        <div className={style.container}>
            <header className="flex content-between">
                <div className="flex items-center" style={{ flexGrow: 1 }}>
                    <img src={imageLogo} alt="logo cty" />
                    <div className={style.text}>
                        <div className={style.title}>
                            {recruitment?.title}
                        </div>
                        <div className={style.subTitle}>
                            {formOfWork?.name}
                        </div>
                        <div className={style.info}>
                            <span className={style.infoElement}>
                                <img src={iconLocation} alt="" />
                                <span>
                                    {workplace?.name}
                                </span>
                            </span>
                            <span className={style.infoElement}>
                                <img src={iconOclock} alt="" />
                                <span>
                                    2 tuần trước
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={clsx(style.status, { [style.true]: recruitment?.status, [style.false]: !recruitment?.status })}>{recruitment?.status ? "Đang tuyển" : "Đã hết hạn"}</div>
                </div>
            </header >
            <article>
                <header>
                    <img src={recruitment?.imageUrl} alt={recruitment?.title} />
                </header>
            </article>
            <main>
                <div className={style.titleContent}>Chi tiết tin tuyển dụng</div>
                <table>
                    {recruitment?.details.map((item, index) =>
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td dangerouslySetInnerHTML={{ __html: item.value }}></td>
                        </tr>
                    )}
                </table>
            </main>
            <section>
                <div className={style.titleContent}>
                    Ứng tuyển Online
                </div>
                <FormApply recruitmentId={id} />
                {/* <Form layout="vertical" className={style.form}>
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
                </Form> */}
            </section>
        </div >
    )
}

export default RecruitmentDetailsPage