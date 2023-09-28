import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = '咸鱼出品，必属精品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Github',
          title: 'Github',
          href: 'https://github.com/xianyu2023',
          blankTarget: true,
        },
        {
          key: 'xianyu2023',
          title: <GithubOutlined />,
          href: 'https://github.com/xianyu2023',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
