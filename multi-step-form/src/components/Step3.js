import React from 'react'
import {
    Form,
    Radio,
    Checkbox,
    Button
} from 'antd';

const Step3 = () => {
    return (
        <div className="container">
            <h3>Health and Fitness Regime : </h3>
            <Form.Item name="alcohol" label="Alcohol Use">
                <Radio.Group>
                    <Radio value="No">No</Radio>
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="Not Anymore">Not Anymore</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name="smoke" label="Smoking">
                <Radio.Group>
                    <Radio value="No">No</Radio>
                    <Radio value="Yes">Yes</Radio>
                    <Radio value="Not Anymore">Not Anymore</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item name="exercise" label="Exercise Type"
                rules={[
                    {
                        required: true,
                        message: 'Please select exercise type!',
                    },
                ]}>
                <Checkbox.Group>
                    <Checkbox value="running/jogging"
                        style={{
                            lineHeight: '32px',
                        }}>
                        running/jogging
                    </Checkbox>
                    <Checkbox value="cardio"
                        style={{
                            lineHeight: '32px',
                        }}>
                        cardio
                    </Checkbox>
                    <Checkbox value="strength training"
                        style={{
                            lineHeight: '32px',
                        }}>
                        strength training
                    </Checkbox>
                    <Checkbox value="idle or no exercise"
                        style={{
                            lineHeight: '32px',
                        }}>
                        idle or no exercise
                    </Checkbox>
                </Checkbox.Group>
            </Form.Item>
            {/* <Form.Item wrapperCol={{ offset: 3, span: 16 }}>
                <Button type="primary" style={{ marginRight: "10px" }}>
                    Prev
                </Button>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item> */}
        </div>
    )
}

export default Step3