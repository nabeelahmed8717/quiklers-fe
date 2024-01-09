import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import "./termsModal.scss"

const TermsModal = ({ isModalOpen, setIsModalOpen, handelOwn }: any) => {


  return (
    <div>
      <Modal title="Terms and Conditions" centered footer={false} open={isModalOpen} onCancel={() => { setIsModalOpen(false) }}>
        <div className='terms-wrapper'>
          <h2>Terms and Conditions of Service</h2>
          <p>
            By accessing and using the services provided by [Your Company Name] (hereinafter referred to as "we," "us," or "our"),
            you agree to comply with and be bound by the following terms and conditions of service. If you do not agree to these terms, please refrain from using our services.
          </p>

          <h2>Description of Services</h2>
          <p>
            [Your Company Name] provides [brief description of services]. These services are subject to the terms and conditions set forth herein.
          </p>

          <h2>User Registration</h2>
          <p>
            To access certain features of our services, you may be required to register an account. You are responsible for maintaining the confidentiality of your account information and agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h2>Use of Services</h2>
          <p>
            You agree to use our services in accordance with all applicable laws and regulations. You further agree not to:
          </p>
          <ul>
            <li>Violate any intellectual property rights.</li>
            <li>Transmit any content that is unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable.</li>
            <li>Engage in any unauthorized access to our systems.</li>
          </ul>

          <h2>Payment and Billing</h2>
          <p>
            If applicable, you agree to pay all fees and charges associated with our services as outlined in our pricing and billing policies.
          </p>

          <h2>Privacy Policy</h2>
          <p>
            Your use of our services is also governed by our Privacy Policy. Please review the Privacy Policy [provide a link] to understand our practices.
          </p>

          <h2>Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to our services for any reason, without notice, at our sole discretion.
          </p>

          <h2>Modifications to Terms</h2>
          <p>
            We may revise and update these terms and conditions at any time. It is your responsibility to review these terms periodically for changes.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            In no event shall [Your Company Name] be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with the use of our services.
          </p>

          <h2>Governing Law</h2>
          <p>
            These terms and conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction].
          </p>
        </div>
        <Button className='common-rounded-g' style={{width:"100%"}} onClick={() => setIsModalOpen(false)}>Confirm and close</Button>
      </Modal>
    </div>
  );
};

export default TermsModal;
