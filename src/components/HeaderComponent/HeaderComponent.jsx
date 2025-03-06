import React from 'react'
import {Badge, Col } from "antd"
import { WrapperHeader,WrapperTextHeader,WrapperHeaderAccount, WrapperTextHeaderSmall } from './style'
//import Search from 'antd/es/input/Search'
import {UserOutlined,CaretDownOutlined,ShoppingCartOutlined  }  from "@ant-design/icons"
import ButtonInputSearch from '../ButtonComponent/ButtonInputSearch'
import { useNavigate } from 'react-router-dom';
const HeaderComponent = () => {
    const navigate = useNavigate()
    const handleNagivatelogin = () =>{
        navigate('/sign-in')
    }
    return (
    <div>    
        <WrapperHeader>
            <Col span={6}>
            <WrapperTextHeader>
                FirstAir
            </WrapperTextHeader>
             </Col>
            <Col span={12}>            
            <ButtonInputSearch  
            size = 'large'
            textButton = "Tìm Kiếm"
            placeholder="Input Search Text"
            />
            </Col>
            <Col span={6} style={{display: 'flex', gap: '20px', alignItems :'center'}} >
            <WrapperHeaderAccount>
                <UserOutlined style={{fontSize:'30px'}}/>
                <div onClick={handleNagivatelogin} style={{cursor:'pointer'}}>
                    <WrapperTextHeaderSmall> Đăng Nhập/Đăng Ký</WrapperTextHeaderSmall>
                    <div>
                        <WrapperTextHeaderSmall> Tài Khoản</WrapperTextHeaderSmall>
                        <CaretDownOutlined />
                    </div>
                </div>
                </WrapperHeaderAccount>
                
                </Col>
        </WrapperHeader>
    </div>
    
    )
}

export default HeaderComponent