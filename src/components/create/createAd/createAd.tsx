import React, { useState } from 'react'
import { Col, Form, Input, Row, Select } from 'antd'
import { overallServicesData } from '../../../mock/overallServices'
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;
const { Option } = Select;

const CreateAd = () => {

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
   
    </>
  )
}

export default CreateAd