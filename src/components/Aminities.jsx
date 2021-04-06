import React from 'react'
import { Checkbox, Row, Col } from 'antd';

export default function Aminities({
    onChange
}) {
    return (
        <Checkbox.Group style={{ width: '100%' }} onChange={e => onChange(e)}>
            <Row>
                <Col span={8} className='m-2 border p-1'>
                    <Checkbox value="air_conditioned">Air conditioned</Checkbox>
                </Col>
                <Col span={8} className='m-2 border p-1'>
                    <Checkbox value="swimming_pool">Swimming pool</Checkbox>
                </Col>
                <Col span={8} className='m-2 border p-1'>
                    <Checkbox value="central_heating ">Central Heating</Checkbox>
                </Col>
                <Col span={8} className='m-2 border p-1'>
                    <Checkbox value="laundry_room">Laundry room</Checkbox>
                </Col>
                <Col span={8} className='m-2 border p-1'>
                    <Checkbox value="kitchen_utensils">Kitchen Utensils</Checkbox>
                </Col>
                <Col span={8} className='m-2 border p-1'>
                    <Checkbox value="ensuite_rooms">Ensuite rooms</Checkbox>
                </Col>
                <Col span={8} className='m-2 border p-1'>
                    <Checkbox value="pet_allowed">Pet allowed</Checkbox>
                </Col>
                <Col span={8} className='m-2 border p-1'>
                    <Checkbox value="free_wifi">Wifi</Checkbox>
                </Col>
                <Col span={8} className='m-2 border p-1'>
                    <Checkbox value="free_wifi">Wifi</Checkbox>
                </Col>
                <Col span={8} className='m-2 border p-1'>
                    <Checkbox value="balcony">Balcony</Checkbox>
                </Col>
            </Row>
        </Checkbox.Group>
    )
}
