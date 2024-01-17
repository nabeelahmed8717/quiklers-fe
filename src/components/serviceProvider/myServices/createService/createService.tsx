import { Button, Checkbox, Col, Drawer, Form, Input, Radio, Row, Select, Skeleton, Switch } from 'antd'
import React, { useState } from 'react'
import MaxScroll from '../../../../shared/maxScroll/maxScroll'
import { overallServicesData } from '../../../../mock/overallServices';
import TextArea from 'antd/es/input/TextArea';
import './createService.scss'
import TermsModal from '../../../../shared/termsModal/termsModal';
import createIcon from '../../../../assets/icons/create.svg'
import backIcon from '../../../../assets/icons/arrow-down-small.svg'
import guidesIcon from '../../../../assets/icons/memo-pad.svg'
import closeIcon from '../../../../assets/icons/cross-small.svg'
import { formDataInstructions } from './createservice.data';
import { useAppSelector } from '../../../../redux/store';


const CreateService = () => {

    const isMobileView = useAppSelector((state) => state.globalSlice.isMobileView);

    const { Option } = Select;

    const [selectedServiceType, setSelectedServiceType] = useState<any>('')
    const [isReadTerms, setIsReadTerms] = useState(false)
    const [isReadTermsModal, setIsReadTermsModal] = useState(false)

    const [isUserGuideOpen, setIsUserGuideOpen] = useState(false)

    const [isPhysicallyAvailable, setIsPhysicallyAvailable] = useState(false)

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const handleSelectChange = (value: any) => {
        const selectedOption: any = overallServicesData.find((option) => option.label === value);
        setSelectedServiceType(selectedOption.type);
    };
    const handelPhysicallyAvailable = (checked: any) => {
        setIsPhysicallyAvailable(checked)
    };

    const handelReadTerms = (e: any) => {
        setIsReadTerms(e.target.checked)
        setIsReadTermsModal(e.target.checked)
    };

    const [selectedImages, setSelectedImages] = useState<any>([]);

    const handleImageChange = (e: any) => {
        const files = e.target.files;

        if (files.length > 0) {
            // Use Promise.all to read multiple files asynchronously
            Promise.all(
                Array.from(files).map((file: any) => {
                    return new Promise((resolve) => {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            resolve(reader.result);
                        };
                        reader.readAsDataURL(file);
                    });
                })
            ).then((imagesDataUrl) => {
                setSelectedImages(imagesDataUrl);
            });
        } else {
            setSelectedImages([]);
        }
    };

    const handleRemoveImage = (index: any) => {
        setSelectedImages((prevImages: any) => prevImages.filter((_: any, i: any) => i !== index));
    };


    const validateCheckbox = (_: any, value: any) => {
        if (!value) {
            return Promise.reject('Please accept the terms and conditions');
        }
        return Promise.resolve();
    };

    return (
        <div className='create-service-main'>

            <div className="create-header">
                <Button className='btn-back' onClick={() => window.history.back()}><img src={backIcon} style={{ transform: "rotate(90deg)" }} alt="" /></Button>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}><img src={createIcon} width={20} height={20} alt="" /> <p className='fs-20 fw-600'>Create Service</p></div>
            </div>

            <Row gutter={[20, 20]}>
                {!isMobileView && <Col lg={6}>
                    <h2 className='fs-16 fw-700' style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}> <img src={guidesIcon} width={16} height={16} alt="" /> User Guides</h2>

                    <div className='wrapper-list'>
                        {
                            formDataInstructions.map((item: any) => (
                                <div className="wrapper-list-bx">
                                    <h3 className='fs-14 fw-500' >{item.title}</h3>
                                    <h3 className='fs-12 fw-400' style={{ marginTop: "5px", marginBottom: "5px" }}>Information</h3>
                                    <ul>
                                        {item.instructions.map((item: any) => (
                                            <li>{item}</li>
                                        ))}

                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </Col>}
                <Col lg={18} md={24} sm={24}>
                    <div className='wrapper-create-service'>
                        {selectedServiceType.length > 0 && <div style={{ display: "flex", justifyContent: "flex-end" }}> <p className='fs-12 fw-500 dull-color'>Selected Service Type : &nbsp;
                            <span style={{ color: "#27ae60" }}>{
                                selectedServiceType === 'conditional'
                                    ? 'Conditional'
                                    : selectedServiceType === 'unConditional'
                                        ? 'Un Conditional'
                                        : 'Undefined'}
                            </span></p> </div>}

                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            // autoComplete="off"
                            layout="vertical"
                            rootClassName='bbl3-form'
                            style={{ marginTop: "10px" }}
                        >

                            <div>
                                <input type="file" style={{ display: "none" }} id='upload-service-images' accept="image/*" multiple onChange={handleImageChange} />
                                <label htmlFor="upload-service-images" className='upload-images-s'>Upload Images</label>
                                {selectedImages.length > 0 && (
                                    <div>
                                        <h3 style={{ marginTop: "10px" }}>Preview:</h3>
                                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                            {selectedImages.map((image: any, index: any) => (
                                                <img onClick={() => handleRemoveImage(index)} key={index} src={image} alt={`Preview ${index}`} style={{ maxWidth: '100%', maxHeight: '150px', borderRadius: "8px", marginRight: '10px', marginBottom: '10px' }} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <br />
                            <Row gutter={[20, 10]}>

                                <Col xs={24} sm={24} md={24} lg={24}>
                                    <Form.Item
                                        label="Service Service"
                                        name="serviceService"
                                        rules={[{ required: true, message: 'Required field' }]}
                                    >
                                        <Select
                                            showSearch
                                            placeholder="Select Service"
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

                                {
                                    selectedServiceType.length ?
                                        <>
                                            <Col xs={24} sm={24} md={24} lg={24}>
                                                <Form.Item
                                                    label="Service Title"
                                                    name="serviceTitle"
                                                    rules={[{ required: true, message: 'Required field' }]}
                                                >
                                                    <Input placeholder="Type here" style={{ width: '100%', height: '45px' }} />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} sm={24} md={24} lg={24}>
                                                <Form.Item
                                                    label="Service Description"
                                                    name="serviceDescription"
                                                    rules={[{ required: true, message: 'Required field' }]}
                                                >
                                                    <TextArea rows={4} style={{ width: '100%', height: '100px' }} />
                                                </Form.Item>
                                            </Col>

                                            {selectedServiceType === 'unConditional' &&
                                                <>
                                                    <Col xs={24} sm={24} md={12} lg={12}>
                                                        <Form.Item
                                                            label="Preferable online communication software "
                                                            name="preferableOnlineCommunication"
                                                            rules={[{ required: true, message: 'Required field' }]}
                                                        >
                                                            <Input placeholder="Example: Zoom, Google Meet, Microsoft teams, ..." style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={12} lg={12}>
                                                        <Form.Item
                                                            label="Hourly Rate"
                                                            name="Hourly rate"
                                                            rules={[{ required: true, message: 'Required field' }]}
                                                        >
                                                            <Input placeholder="Type here" type='number' style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} suffix={'Rs'} />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col xs={24} sm={24} md={12} lg={12}>
                                                        <Form.Item
                                                            label={<p>Are you available physically <span className='dull-color fw-400'><em>(Optional)</em></span> </p>}
                                                            name="physicalAvailability"
                                                            rules={[{ required: false, message: 'Required field' }]}
                                                        >
                                                            <Switch onChange={handelPhysicallyAvailable} />
                                                        </Form.Item>
                                                    </Col>
                                                </>
                                            }
                                            {isPhysicallyAvailable &&
                                                <Col span={24}>
                                                    <div className='physical-availability-container'>
                                                        <Col xs={24} sm={24} md={12} lg={12}>
                                                            <Form.Item
                                                                label="Choose Physical Availability Mode"
                                                                name="physicalAvailability"
                                                                rules={[{ required: true, message: 'Required field' }]}
                                                            >
                                                                <Radio.Group>
                                                                    <Radio value={1}>At my location</Radio>
                                                                    <Radio value={2}>At users preferred location</Radio>
                                                                </Radio.Group>
                                                            </Form.Item>
                                                        </Col>
                                                    </div>
                                                </Col>
                                            }

                                            <Col span={24}>
                                                <Form.Item
                                                    name="termsAndConditions"
                                                    valuePropName="checked"
                                                    rules={[
                                                        {
                                                            validator: validateCheckbox,
                                                        },
                                                    ]}
                                                >
                                                    <Checkbox onChange={handelReadTerms}>
                                                        I have read and agree to the <a href="/terms">terms and conditions</a>
                                                    </Checkbox>
                                                </Form.Item>
                                            </Col>

                                            <br />
                                            <br />
                                            <Col span={24}>
                                                <div className='flex-submit-only-bts'>
                                                    <Button className='common-rounded-g-dull' onClick={() => window.history.back()}>Back</Button>
                                                    <Button htmlType='submit' className='common-rounded-g'>Create</Button>
                                                </div>
                                            </Col>
                                            <br />
                                        </>
                                        :
                                        <div style={{ marginLeft: "10px" }}>
                                            <p className='fs-14 fw-500' style={{ color: "#27ae60", marginBottom: "20px", marginLeft: "0px" }}>Select Service To fill form</p>
                                            <Form layout="vertical">
                                                <Row gutter={[20, 20]}>
                                                    <Col lg={12}>
                                                        <Form.Item label={<Skeleton.Input size='small' style={{ width: '100px' }} active />} colon={false}>
                                                            <Skeleton.Input style={{ width: '300px' }} active />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Form.Item label={<Skeleton.Input size='small' style={{ width: '100px' }} active />} colon={false}>
                                                            <Skeleton.Input style={{ width: '300px' }} active />
                                                        </Form.Item>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Form.Item label={<Skeleton.Input size='small' style={{ width: '100px' }} active />} colon={false}>
                                                            <Skeleton.Input style={{ width: '300px' }} active />
                                                        </Form.Item>
                                                    </Col>
                                                </Row>

                                            </Form>
                                        </div>
                                }
                            </Row>
                        </Form>
                        <TermsModal isModalOpen={isReadTermsModal} setIsModalOpen={() => setIsReadTermsModal(false)} />
                    </div>
                </Col>
            </Row>

            {isMobileView && 
            <>
            {
                selectedServiceType.length > 0 &&
                <div className="user-guides-res" onClick={() => setIsUserGuideOpen(true)}>
                <p> User Guides</p>
            </div>
                }
            </>
            
            }

            <Drawer className='user-guides-drawer'
                title={<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <h2 className='fs-16 fw-700' style={{ marginLeft: "-10px", display: "flex", alignItems: "center", gap: "10px" }}> <img src={guidesIcon} width={16} height={16} alt="" /> User Guides</h2>
                    <img src={closeIcon} onClick={() => setIsUserGuideOpen(false)} width={20} height={20} alt="" />
                </div>} closeIcon={false} onClose={() => setIsUserGuideOpen(false)} placement={'left'} open={isUserGuideOpen}>
                {isMobileView &&
                    <div className='wrapper-list'>
                        {
                            formDataInstructions.map((item: any) => (
                                <div className="wrapper-list-bx">
                                    <h3 className='fs-14 fw-500' >{item.title}</h3>
                                    <h3 className='fs-12 fw-400' style={{ marginTop: "5px", marginBottom: "5px" }}>Information</h3>
                                    <ul>
                                        {item.instructions.map((item: any) => (
                                            <li>{item}</li>
                                        ))}

                                    </ul>
                                </div>
                            ))
                        }
                    </div>}

            </Drawer>

        </div>
    )
}


export default CreateService