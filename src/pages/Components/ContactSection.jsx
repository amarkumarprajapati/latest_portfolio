import React from "react";
import { Button, Form, Input, message } from "antd";

const ContactSection = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    const { name, email, subject, message: userMessage } = values;
    const phoneNumber = "8908013842";
    const text = `Hello, I am ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${userMessage}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappURL, "_blank");
    messageApi.success("Redirecting to WhatsApp...");
    form.resetFields();
  };

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-[#091e79]/5 to-[#00d4ff]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-[#091e79] to-[#00d4ff] bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-gray-600 text-lg">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                    <i className="fas fa-envelope text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">Amar Kumar Prajapati</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">Mumbai</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#090979]/5 to-[#00d4ff]/5 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#090979] to-[#00d4ff] bg-clip-text text-transparent">
                Send Message
              </h3>
              <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                className="space-y-6"
              >
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input
                    prefix={<i className="fas fa-user text-gray-400 mr-2"></i>}
                    placeholder="Your Name"
                    size="large"
                    className="!rounded-button bg-white border-2 border-gray-100 hover:border-blue-400 transition-colors"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                    { type: "email", message: "Please enter a valid email!" },
                  ]}
                >
                  <Input
                    prefix={
                      <i className="fas fa-envelope text-gray-400 mr-2"></i>
                    }
                    placeholder="Your Email"
                    size="large"
                    className="!rounded-button bg-white border-2 border-gray-100 hover:border-blue-400 transition-colors"
                  />
                </Form.Item>
                <Form.Item
                  name="subject"
                  rules={[
                    { required: true, message: "Please input your subject!" },
                  ]}
                >
                  <Input
                    prefix={
                      <i className="fas fa-heading text-gray-400 mr-2"></i>
                    }
                    placeholder="Subject"
                    size="large"
                    className="!rounded-button bg-white border-2 border-gray-100 hover:border-blue-400 transition-colors"
                  />
                </Form.Item>
                <Form.Item
                  name="message"
                  rules={[
                    { required: true, message: "Please input your message!" },
                  ]}
                >
                  <Input.TextArea
                    placeholder="Your Message"
                    rows={6}
                    className="!rounded-button bg-white border-2 border-gray-100 hover:border-blue-400 transition-colors resize-none"
                  />
                </Form.Item>
                <Form.Item>
                <Button
  type="primary"
  htmlType="submit"
  size="large"
  block
  className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 border-none !rounded-button whitespace-nowrap h-12 text-base font-semibold hover:shadow-lg hover:from-green-500 hover:via-blue-600 hover:to-purple-700 transition-all"
>
  <i className="fas fa-paper-plane mr-2"></i>
  Send Message via WhatsApp
</Button>

                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
