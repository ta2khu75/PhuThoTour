import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import style from "./style.module.scss"
import { useAppDispatch } from '../../../redux/hook';
import { authAction } from '../../../redux/slice/authSlice';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'blog',
        label: 'Bài viết',
    },
    {
        key: 'topic',
        label: 'Chủ đề',
    },
    {
        key: 'document',
        label: 'Tài liệu',
    },
    {
        key: 'recruitment',
        label: 'Tuyển dụng',
    },
    {
        key: 'field',
        label: 'Lĩnh vực',
    },
    {
        key: 'form-of-work',
        label: 'Hình thức làm việc',
    },
    {
        key: 'workplace',
        label: 'Nơi làm việc',
    },
    {
        key: 'apply',
        label: 'Ứng tuyển',
    },
];

const Aside = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const onClick: MenuProps['onClick'] = (e) => {
        navigate(`/admin/${e.key}`)
    };
    const onLogoutClick = () => {
        dispatch(authAction.reset());
        navigate("/")
    }
    return (
        <div className={style.container}>
            <Menu
                onClick={onClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
            <Button onClick={onLogoutClick}>Đăng xuất</Button>
        </div>
    );
};

export default Aside;