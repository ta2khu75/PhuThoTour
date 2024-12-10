import style from "./style.module.scss"
type Props = {
    documentUrl: string
}
const RenderPdf = ({ documentUrl }: Props) => {
    return (
        <div className={style.container}>
            <embed src={documentUrl} type="application/pdf" className={style.pdf} />
        </div>
    )
}

export default RenderPdf