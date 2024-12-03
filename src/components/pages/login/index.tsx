import { Button, Form, Input } from "antd"
import style from "./style.module.scss"
import FirebaseUtil from "../../../util/firebaseUtil"
import { TypeEnum } from "../../../types/TypeEnum"
import { limit, where } from "firebase/firestore"
import { useAppDispatch } from "../../../redux/hook"
import { authAction } from "../../../redux/slice/authSlice"
import { useNavigate } from "react-router-dom"
import notify, { Notify } from "../../../util/notificationUtil"
const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const onFinish = (value: { email: string, password: string }) => {
        FirebaseUtil.queryData<Account>(TypeEnum.ACCOUNT, where("email", "==", value.email), limit(1)).then(response => {
            if (response.length > 0 && response[0].password == value.password) {
                dispatch(authAction.set(response[0]))
                navigate("/admin")
            } else {
                Notify.error("Tài khoản hoặc mật khẩu không đúng")
            }
        })
    }
    return (
        <div className={style.container}>
            <h2>Login</h2>
            <Form className={style.form} onFinish={onFinish} layout="vertical">
                <Form.Item label={"Email"} name={"email"} rules={[{ required: true }, { type: "email" }]}>
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item label={"Mật khẩu"} name={"password"} rules={[{ required: true }]}>
                    <Input.Password placeholder="Mật khẩu" />
                </Form.Item>
                <Form.Item >
                    <Button htmlType="submit">Login</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginPage