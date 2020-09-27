import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import DropdownSelect from '../../components/DropdownSelect';
import TextInput from '../../components/TextInput';
import { connect } from 'react-redux';
import { editAgentAccount } from '../../redux/actions/auth.action';


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
    editAccount
}) => {

    const [agentData, setAgentData] = useState({
        user_id: data.user_id,
        company_name: data.company_name,
        company_phone_no: data.company_phone_no,
        company_location: data.company_address,
        company_logo: data.company_logo,
        company_website: data.company_website,
        instagram: data.instagram,
        facebook: data.facebook,
        twitter: data.twitter
    });

    useEffect(() => {
        console.log('data ---', data);
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
            <Modal.Body>
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
                            onChange={() => { }}
                            defaultValue={data.company_address}
                        />
                        <TextInput
                            label={'Company Website'}
                            type={"text"}
                            placeholder={'Eg: www.agent.com'}
                            onChange={e => handleInputChange({ name: 'company_website', data: e.target.value })}
                            defaultValue={data.company_website}
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
                            onChange={() => { }}
                            defaultValue={data.facebook}
                        />
                    </Form.Row>
                    <Form.Row>
                        <TextInput
                            label={'Twitter URL'}
                            type={"text"}
                            placeholder={'Eg: www.twitter.com/agnet_name'}
                            onChange={() => { }}
                            defaultValue={data.twitter}
                        />
                        <TextInput
                            label={'Instagram URL'}
                            type={"text"}
                            placeholder={'Eg: www.instagram.com/agnet_name'}
                            onChange={() => { }}
                            defaultValue={data.instagram}
                        />
                    </Form.Row>
                    <Button variant="success" type='submit'>Save</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Close
          </Button>
            </Modal.Footer>
        </Modal>
    )
});
