import React, { useEffect, useState } from 'react'
import './myServices.scss'
import { Button, Checkbox, Col, Form, Input, Modal, Radio, Row, Select, Skeleton, Switch } from 'antd'
import settingsIcon from '../../../assets/icons/settings.svg'
import viewIcon from '../../../assets/icons/eye.svg'
import createIcon from '../../../assets/icons/create.svg'
import QuickTips from '../../../shared/quickTips/quickTips'
import TextArea from 'antd/es/input/TextArea'
import { overallServicesData } from '../../../mock/overallServices'
import MaxScroll from '../../../shared/maxScroll/maxScroll'
import TermsModal from '../../../shared/termsModal/termsModal'

const { Option } = Select;

const MyServices = () => {

  const [selectedServiceType, setSelectedServiceType] = useState<any>('')
  const [isServiceModal, setIsServiceModal] = useState(false)
  const [isReadTerms, setIsReadTerms] = useState(false)
  const [isReadTermsModal, setIsReadTermsModal] = useState(false)

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
    <div className='my-services-page'>
      <div className='header-flex'>
        <div className="header-main-comp">
          <h2>My Services</h2>
          <p>Manage Your services</p>
        </div>
        <Button onClick={() => setIsServiceModal(true)} className='common-rounded-g' style={{ display: "flex", alignItems: "center", gap: "10px" }}><img src={createIcon} style={{ filter: "invert(1) brightness(1)" }} width={20} height={20} alt="" /> Create Service</Button>
      </div>
      <div className="service-cards-flex">


        <Row>
          <Col lg={18}>
            <Row gutter={20}>
              <Col lg={12} md={12}>
                <div className="service-card">
                  <div className='header-ser'>
                    <h2 className='service-title'>Strategic Insights: Your Path to Success with Professional Consulting Services</h2>
                    <div className='header-options'>
                      <div className='header-sl-btns' onClick={() => setIsServiceModal(true)}><img src={settingsIcon} width={20} height={22} alt="" /></div>
                      <div className='header-sl-btns'><img src={viewIcon} width={20} height={22} alt="" /></div>
                    </div>
                  </div>
                  <div className="service-status-insights">
                    <p>Service Status <span className='sc-ac'>Active</span></p>
                    <p>Total Views <span className='sc-ac'>20</span></p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <QuickTips />
          </Col>
        </Row>


        <Modal rootClassName='service-modal-d3' footer={false} centered title={<div style={{ display: "flex", alignItems: "center", gap: "10px" }}><img src={createIcon} width={20} height={20} alt="" /> <p className='fs-20'>Create Service</p></div>} open={isServiceModal} onCancel={() => setIsServiceModal(false)}>

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
            <MaxScroll>

              <br />
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
                          <Input placeholder="Type here" style={{ width: '100%', height: '45px', backgroundColor: "#FCFBFF" }} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={24}>
                        <Form.Item
                          label="Service Description"
                          name="serviceDescription"
                          rules={[{ required: true, message: 'Required field' }]}
                        >
                          <TextArea rows={4} style={{ width: '100%', height: '100px', backgroundColor: "#FCFBFF" }} />
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
                          <Button className='common-rounded-g-dull'>Close</Button>
                          <Button htmlType='submit' className='common-rounded-g'>Create</Button>
                        </div>
                      </Col>
                      <br />
                    </>
                    :
                    <div>
                      <p className='fs-14 fw-500' style={{ color: "#27ae60", marginBottom: "20px", marginLeft:"20px" }}>Select Service To fill form</p>
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
            </MaxScroll>
          </Form>
        </Modal>
      </div>
      <TermsModal isModalOpen={isReadTermsModal} setIsModalOpen={() => setIsReadTermsModal(false)} />
    </div>
  )
}

export default MyServices