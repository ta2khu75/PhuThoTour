import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'blog',
        label: 'Bài viết',
        icon: <MailOutlined />,
    },
    {
        key: 'topic',
        label: 'Chủ đề',
        icon: <MailOutlined />,
    },
    {
        key: 'document',
        label: 'Tài liệu',
        icon: <AppstoreOutlined />,
    },
    {
        key: 'recruitment',
        label: 'Tuyển dụng',
        icon: <SettingOutlined />,
    },
    {
        key: 'field',
        label: 'Lĩnh vực',
        icon: <SettingOutlined />,
    },
    {
        key: 'form-of-work',
        label: 'Hình thức làm việc',
        icon: <SettingOutlined />,
    },
    {
        key: 'workplace',
        label: 'Nơi làm việc',
        icon: <SettingOutlined />,
    },
];

const Aside = () => {
    const navigate = useNavigate()
    const onClick: MenuProps['onClick'] = (e) => {
        navigate(`/admin/${e.key}`)
    };

    return (
        <Menu
            onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    );
};

export default Aside;