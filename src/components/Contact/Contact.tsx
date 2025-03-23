import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import { ContactFormValues } from '../../types';

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const handleContactSubmit = (values: ContactFormValues) => {
    // Here you would typically send the form data to a server
    console.log('Form submitted:', values);
    message.success('Thank you for your message! I will get back to you soon.');
    form.resetFields();
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Form form={form} onFinish={handleContactSubmit} layout="vertical">
              <Form.Item 
                name="name" 
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Your Name" size="large" />
              </Form.Item>
              <Form.Item 
                name="email" 
                rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
              >
                <Input placeholder="Your Email" size="large" />
              </Form.Item>
              <Form.Item 
                name="message" 
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <Input.TextArea placeholder="Your Message" rows={4} />
              </Form.Item>
              <Button type="primary" htmlType="submit" size="large" className="!rounded-button">
                Send Message
              </Button>
            </Form>
          </div>
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MailOutlined className="text-blue-600 mr-3" />
                  <span>pedro9bee@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <PhoneOutlined className="text-blue-600 mr-3" />
                  <span>+351 925 534 747</span>
                </div>
                <div className="flex items-center">
                  <GlobalOutlined className="text-blue-600 mr-3" />
                  <span>Portugal (Remote)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;