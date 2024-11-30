import AsideItemTopic from "./asideItemTopic"
import style from "./style.module.scss"
import logoBlur from "../../../asset/logoBlur.png"
type Props = {
    topicList: Topic[]
    topicId?: string;
    setTopicId: React.Dispatch<React.SetStateAction<string | undefined>>
}
const AsideTopic = ({ topicList, topicId, setTopicId }: Props) => {
    return (
        <div className={style.aside}>
            <div className={style.asideTitle}>Chủ đề bài viết</div>
            <div className={style.asideContent}>
                {topicList?.map((topic, index) => <AsideItemTopic key={index} title={topic.name} active={topicId == topic.id} onClick={() => setTopicId(topic.id)} />)
                }
            </div>
            <img src={logoBlur} className={style.asideLogo} alt="image blur" />
        </div>
    )
}

export default AsideTopic