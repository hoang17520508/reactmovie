
import { NavLink, Redirect, Route} from 'react-router-dom'
// thư vieenk antd 
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import '../../node_modules/antd/dist/antd.min.css'
import { useState } from 'react';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate=(props)=>{
    const [collapsed,setCollapsed]=useState(false);
    const onCollapse=collapsed=>{

       setCollapsed(collapsed);
    }
    if(localStorage.getItem('USER_LOGIN'))
    {
        let userLogin=JSON.parse(localStorage.getItem('USER_LOGIN'));
        if(userLogin.maLoaiNguoiDung==="QuanTri")    
        {
            return <Route path={props.path} exact render={(propsRoute)=>{
                //nội dung teamplate khi nguoi dung dung cá route admin
              return (  <Layout style={{ minHeight: '100vh' }}>
              <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item key="1" icon={<PieChartOutlined />}>
                    AdminManager
                  </Menu.Item>
                  
                  <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            
                    <Menu.Item key="3"><NavLink to="/admin/quanlynguoidung"></NavLink>Quản lý người dùng</Menu.Item>
      
                  </SubMenu>
                  <SubMenu key="sub2" icon={<TeamOutlined />} title="Films">
                    <Menu.Item key="6"><NavLink to="/admin/quanlyphim">Quản lý phim </NavLink></Menu.Item>
                    <Menu.Item key="7"><NavLink to="/admin/quanlylichchieu">Quản lịch chiếu </NavLink></Menu.Item>
                   
                  </SubMenu>
                  
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                  
                  <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  <props.Component {...propsRoute}/>
                  </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}></Footer>
              </Layout>
            </Layout>)
        //    return <props.Component {...propsRoute}/>
                
            }
            
        }/>
        }
        alert('Bạn không phải admin:');
        return <Redirect to="/login"/>
    }
   


alert('Bạn không phải admin:');
return <Redirect to="/login"/>

}