import React, { useState } from 'react'
import { Col, Form, Input, Row, Select } from 'antd'
import { overallServicesData } from '../../../mock/overallServices'
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;
const { Option } = Select;

const CreateJobPost = () => {

  const [selectedService, setSelectedService] = useState()
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videoKey, setVideoKey] = useState<number>(0);


  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const serviceLevels = [
    {
      key: '1',
      label: 'Verified Service Providers',
      value: 'Verified',
    },
    {
      key: '2',
      label: 'Badge 1 (Intermediate)',
      value: 'Badge 1',
    },
    {
      key: '3',
      label: 'Badge 2 (Beginner level)',
      value: 'Badge 2',
    },
    {
      key: '4',
      label: 'Badge 3 (Professional)',
      value: 'Badge 3',
    },
  ]


  const handleSelectChange = (value: any) => {
    const selectedOption: any = overallServicesData.find((option) => option.label === value);
    setSelectedService(selectedOption.type);
  };




  //----------------


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);
    setVideoKey((prevKey) => prevKey + 1);
  };



  return (
    <>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
        layout="vertical">
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item
              label="Select Your Service"
              name="serviceProvider"
              rules={[{ required: true, message: 'Required field' }]}
            >
              <Select
                showSearch
                placeholder="Select a service"
                onChange={handleSelectChange}
              >
                {overallServicesData.map((option: any, index: any) => (
                  <Option key={index} value={option.label}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item
              label="Select Service Quality"
              name="serviceQuality"
              rules={[{ required: true, message: 'Required field' }]}
            >
              <Select
                placeholder="Select service quality"
              >
                {
                  serviceLevels.map((item: any) => (
                    <Option key={item.key} value={item.value}>{item.label}</Option>
                  ))
                }

              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24}>
            <Form.Item
              label="Job Address"
              name="jobAddress"
              rules={[{ required: true, message: 'Required field' }]}
            >
              <Input placeholder="Type here" style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} />
            </Form.Item>
          </Col>
          {
            selectedService === "conditional" && (
              <>
                <Col xs={24} sm={24} md={24} lg={24}>
                  <h3 className='fs-14 fw-600' style={{ marginBottom: "7px" }}>
                    Upload Video to explain scenario <br /><p className='info-conditional'>(Required with conditional services)</p>
                  </h3>
                  <p className='fs-14' style={{ color: "#939393" }}><em>{selectedFile?.name}</em></p>
                  {!selectedFile &&
                    <div className='upload-file-area'>
                      <input type="file" accept="video/*" onChange={handleFileChange} id="uploadVideo" />
                      <label className='fs-14 fw-600' htmlFor="uploadVideo">Upload Video</label>
                    </div>}
                </Col>
                <div className='uploaded-image d-flex justify-center align-center'>
                  {selectedFile && (
                    <>
                      <video key={videoKey} controls>
                        <source src={URL.createObjectURL(selectedFile)} type="video/mp4" />
                      </video>
                      <div className='change-video-btn'>
                        <input type="file" accept="video/*" onChange={handleFileChange} id="uploadVideo" />
                        <label htmlFor="uploadVideo">Change</label>
                      </div>
                    </>
                  )}

                </div>
              </>
            )
          }
        </Row>
        <br />
        <br />
        <br />
      </Form>
    </>
  )
}

export default CreateJobPost