import { PageContainer} from '@ant-design/pro-components';
import {Avatar, Button, Col, Descriptions, Divider, Input, message, Modal, Row, Space} from 'antd';
import React, {useEffect, useState} from 'react';
import ProCard from "@ant-design/pro-card";
import Paragraph from "antd/lib/typography/Paragraph";
import {
  getAkSkUsingGET,
  getLoginUserUsingGET,
  updateSignUsingPOST, updateUserUsingPOST,
} from "@/services/xianYuOpenApi_backend/userController";



export const valueLength = (val: any) => {
  return val && val.trim().length > 0
}
/**
 * 接口详情页
 * @constructor
 */
const Setting: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [loginUser, setLoginUser] = useState<API.UserVO>();
  const [record,setRecord] = useState<Record<string, any>>();


  const [value, setValue] = useState('');//把vaule的值存起来，方便其他地方用;
  const onChange = (value: any) => {
    // console.log("input:"+value.target.value)
    setValue(value.target.value)
  }


  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    setLoading(true);
    // console.log("2："+value)
    const res = await updateUserUsingPOST({
      id: loginUser?.id,
      userPassword: value,
    });
    if (res?.data && res?.code === 0) {
      message.info("修改密码成功")
    }
    setLoading(false);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const loadData = async () => {
    setLoading(true);
    try {
      const res = await getLoginUserUsingGET();
      setLoginUser(res?.data);
    } catch (error: any) {
      message.error(error.message);
    }
    setLoading(false);
  };

  const getAkSk = async () => {
    setLoading(true)
    const res = await getAkSkUsingGET();
    if (res?.data && res?.code === 0) {
      setRecord(res.data);
      message.info("查看成功")
    }
    setLoading(false);
  }

  const updateAkSk = async () => {
    setLoading(true)
    const res = await updateSignUsingPOST();
    if (res?.data && res?.code === 0) {
      message.info("更新成功")
    }
    setLoading(false);
  }


  /**
   * 使用useEffect,除了监视，它还能在组件首次加载后，向后台发送请求
   */
  useEffect(() => {
    loadData();
  }, []);

  return (
    // {JSON.stringify(data)}
    <PageContainer title={'用户设置'}>
      <Row gutter={16}>
        <Col span={8}>
            <Space wrap size={16}>
              <Avatar
                size={{ xs: 240, sm: 320, md: 400, lg: 640, xl: 350, xxl: 1000 }}
                src={loginUser?.userAvatar}
              />
            </Space>
        </Col>
        <Col span={8}>
          <ProCard title={"用户信息"}>
            <Descriptions column={1}>
              <Descriptions.Item label="昵称">
                <Paragraph copyable={valueLength(loginUser?.userName)}>
                  {loginUser?.userName}
                </Paragraph>
              </Descriptions.Item>
              <Descriptions.Item label="账号">
                <Paragraph copyable={valueLength(loginUser?.userAccount)}>
                  {loginUser?.userAccount}
                </Paragraph>
              </Descriptions.Item>
              <Descriptions.Item label="密码">
                <Paragraph>
                  <Button size={"small"} type="primary" danger onClick={showModal}>
                    修改密码
                  </Button>
                  <Modal title="请输入新密码" open={isModalOpen} onCancel={handleCancel} destroyOnClose footer={null}>
                    <Space.Compact style={{ width: '100%' }}>
                      <Input.Password onChange={onChange} />
                      <Button type="primary" onClick={handleOk}>Submit</Button>
                    </Space.Compact>
                  </Modal>
                </Paragraph>
              </Descriptions.Item>
            </Descriptions>
          </ProCard>
        </Col>
        <Divider></Divider>
        <ProCard
          bordered
          type="inner"
          title={"签名密钥（用于SDK客户端调用接口）"}
          extra={
          <Row gutter={20}>
            <Col span={12}
            >
              <Button
                type={"primary"}
                loading={loading}
                onClick={getAkSk}
                danger
              >
                查看
              </Button>
            </Col>
            <Col span={12}
            >
              <Button
                type={"primary"}
                loading={loading}
                onClick={updateAkSk}
                danger
              >
                更新
              </Button>
            </Col>
          </Row>
          }
        >
            <Descriptions column={1}>
              <Descriptions.Item label="AccessKey">
                <Paragraph copyable={valueLength(record?.accessKey)}>
                  {record?.accessKey}
                </Paragraph>
              </Descriptions.Item>
              <Descriptions.Item label="SecretKey">
                <Paragraph copyable={valueLength(record?.secretKey)}>
                  {record?.secretKey}
                </Paragraph>
              </Descriptions.Item>
            </Descriptions>
        </ProCard>
      </Row>

    </PageContainer>
  );
};

export default Setting;
