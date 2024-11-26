import logo from "../../../asset/header/logo.png"
type Props = {
    height?: string;
    width?: string;
    className?: string
}
const LogoElement = (props: Props) => {
    return (
        <img src={logo} alt="logo" {...props} />
    )
}

export default LogoElement