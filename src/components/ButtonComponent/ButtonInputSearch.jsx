import React from 'react'
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
//import ButtonInputComponent from '../ButtonInputComponent/ButtonInputComponent';
const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton } = props
    return (
        <div style={{ display: 'flex', backgroundColor: '#fff' }}>
            <Input
            size={size} 
            placeholder={placeholder} 
            style={{ borderRadius: '0', backgroundColor: '#fff' , display: 'flex'}} />
            <Button size={size} icon={<SearchOutlined />} style={{ borderRadius: '0', backgroundColor: 'rgb(207, 39, 39)', color: '#fff' }}  >
                <span style={{ color: '#fff' }}>{textButton}</span>
            </Button>
        </div>
    )
}

export default ButtonInputSearch


