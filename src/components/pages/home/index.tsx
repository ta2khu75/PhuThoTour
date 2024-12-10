import About from '../../element/about';
import GridBlogNew from '../../element/gridBlogNew';
import GridService from '../../element/gridService';
import Intro from '../../element/intro';
import Introduction from '../../fragment/introduction'
import style from "./style.module.scss"
const HomePage = () => {
    return (
        <div className={style.containerFluid}>
            <Introduction />
            <div className={style.content} id='content'>
                <div className={style.container}>
                    <Intro />
                    <About />
                    <GridBlogNew />
                    <GridService />
                </div>
            </div>
        </div>
    )
}

export default HomePage;