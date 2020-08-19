import React from 'react';
import ProLayout, { PageHeaderWrapper } from '@ant-design/pro-layout/es';
import '@/assets/styles/global.less';
import { Link } from 'umi';
import logo from '@/assets/images/logo.jpeg';

const BasicLayout = props => {
  console.log('props', props);
  return (
    <ProLayout
      title={'房产管理'}
      logo={logo}
      {...props} // props中有路由信息
      breadcrumbRender={(routers = []) => {
        return routers;
      }}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || !menuItemProps.path) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
    >
      <PageHeaderWrapper>{props.children}</PageHeaderWrapper>
    </ProLayout>
  );
};

export default BasicLayout;
