import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DropdownSelect from '../../components/DropdownSelect';
import TextInput from '../../components/TextInput';
import { connect } from 'react-redux';
import { editAgentAccount } from '../../redux/actions/auth.action';
import Btn from '../../components/Btn';


const mapStateToProps = state => ({
    auth: state.auth
});

const mapActionsToProps = {
    editAccount: editAgentAccount
}


export default connect(mapStateToProps, mapActionsToProps)(({
    show,
    handleClose,
    data,
    editAccount,
    auth
}) => {

    const [agentData, setAgentData] = useState({
        user_id: data.user_id,
        company_name: data.company_name,
        company_phone_no: data.company_phone_no,
        company_address: data.company_address,
        company_logo: data.company_logo,
        company_website: data.company_website,
        instagram: data.instagram,
        facebook: data.facebook,
        twitter: data.twitter
    });

    useEffect(() => {
        console.log('data ---', data);
        console.log('auth ---', auth);
        setAgentData(data);
        console.log('agent data ---', agentData);
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        editAccount(agentData);
    };

    const handleInputChange = ({ name, data }) => {
        setAgentData({ ...agentData, [name]: data });
        console.log(agentData);
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Body className='p-2'>
                <Form onSubmit={e => handleSubmit(e)}>
                    <h4 className="modal-header-title">Edit Account</h4>
                    <Form.Row>
                        <TextInput
                            label={'Company Name'}
                            required={true}
                            type={"text"}
                            placeholder={'Eg: Sheruta'}
                            onChange={e => handleInputChange({ name: 'company_name', data: e.target.value })}
                            defaultValue={data.company_name}
                        />
                        <TextInput
                            label={'Phone Number'}
                            required={true}
                            type={"text"}
                            placeholder={'Eg: +234 123456789'}
                            onChange={e => handleInputChange({ name: 'company_phone_no', data: e.target.value })}
                            defaultValue={data.company_phone_no}
                        />
                    </Form.Row>
                    <Form.Row>
                        <TextInput
                            label={'Company Address'}
                            required={true}
                            type={"text"}
                            placeholder={'No 3 John Street'}
                            onChange={e => handleInputChange({ name: 'company_phone_no', data: e.target.value })}
                            defaultValue={data.company_phone_no}
                        />
                        <TextInput
                            label={'Company Website'}
                            type={"text"}
                            placeholder={'Eg: www.agent.com'}
                            onChange={e => handleInputChange({ name: 'company_address', data: e.target.value })}
                            defaultValue={data.company_address}
                        />
                    </Form.Row>
                    <Form.Row>
                        {/* TODO use google place api */}
                        <DropdownSelect
                            options={['hi']}
                            onChange={e => { }}
                            label={'Location'}
                        />

                        <TextInput
                            label={'Facebook URL'}
                            type={"text"}
                            placeholder={'Eg: www.facebook.com/agent_name'}
                            onChange={e => handleInputChange({ name: 'facebook', data: e.target.value })}
                            defaultValue={data.facebook}
                        />
                    </Form.Row>
                    <Form.Row>
                        <TextInput
                            label={'Twitter URL'}
                            type={"text"}
                            placeholder={'Eg: www.twitter.com/agnet_name'}
                            onChange={e => handleInputChange({ name: 'twitter', data: e.target.value })}
                            defaultValue={data.twitter}
                        />
                        <TextInput
                            label={'Instagram URL'}
                            type={"text"}
                            placeholder={'Eg: www.instagram.com/agnet_name'}
                            onChange={e => handleInputChange({ name: 'instagram', data: e.target.value })}
                            defaultValue={data.instagram}
                        />
                    </Form.Row>
                    {/* <Button variant="success" type='submit'>Save</Button> */}
                    <Btn
                        text={'Save'}
                        className='w-100'
                        loading={auth.agentLoading}
                        onClick={() => { }}
                    />
                </Form>
                <Btn
                    text={'Cancel'}
                    className='w-100'
                    danger
                    onClick={handleClose}
                />
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Close
          </Button>
            </Modal.Footer> */}
        </Modal>
    )
});
