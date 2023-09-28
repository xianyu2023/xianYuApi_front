import {
  getOpenApiByIdUsingGET,
  invokeOpenApiUsingPOST,
} from '@/services/xianYuOpenApi_backend/openApiController';
import {
  addUserOpenApiUsingPOST,
  getUserOpenApiRelationUsingGET,
} from '@/services/xianYuOpenApi_backend/userOpenApiController';
import { useModel, useParams } from '@@/exports';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Col, Descriptions, Form, Input, message, Popconfirm, Row } from 'antd';
import React, { useEffect, useState } from 'react';

/**
 * 接口详情页
 * @constructor
 */
const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [invokeLoading, setInvokeLoading] = useState(false);
  const [data, setData] = useState<API.OpenApi>();
  const [invokeRes, setInvokeRes] = useState<any>();
  const { initialState, setInitialState } = useModel('@@initialState');
  const [relation, setRelation] = useState<boolean>();

  const params = useParams();
  const onFinish = async (values: any) => {
    if (!params.id) {
      message.error('接口不存在');
      return;
    }
    setInvokeLoading(true);
    try {
      //点击提交后调用该函数
      const res = await invokeOpenApiUsingPOST({
        id: params.id,
        ...values,
      });
      setInvokeRes(res?.data);
      message.success('请求成功');
    } catch (error: any) {
      message.error('操作失败.' + error.message);
    }
    setInvokeLoading(false);
  };

  const getRelation = async () => {
    // console.log("ApiId:"+ Number(params.id))
    // console.log("user:"+initialState?.loginUser?.id)
    const res = await getUserOpenApiRelationUsingGET({
      userId: initialState?.loginUser?.id,
      openApiId: Number(params.id),
    });
    if (res?.data && res?.code === 0) {
      // console.log("relation:"+res.data)
      setRelation(res.data);
      message.success('已开通');
    } else {
      message.error('未开通');
    }
  };

  const confirm = async () => {
    // console.log("ApiId:"+ Number(params.id))
    // console.log("user:"+initialState?.loginUser?.id)
    const res = await addUserOpenApiUsingPOST({
      userId: initialState?.loginUser?.id,
      openApiId: Number(params.id),
    });
    if (res?.data && res?.code === 0) {
      message.success('开通成功');
      getRelation();
    } else {
      message.error('开通失败');
    }
  };

  const cancel = () => {
    message.error('取消成功');
  };

  const loadData = async () => {
    if (!params.id) {
      message.error('参数不存在');
      return;
    }
    setLoading(true);
    try {
      const res = await getOpenApiByIdUsingGET({
        id: Number(params.id),
      });
      setData(res?.data);
      // console.log("res?.data?.requestParams:"+res?.data?.requestParams)
    } catch (error: any) {
      message.error(error.message);
    }
    setLoading(false);
  };
  /**
   * 使用useEffect,除了监视，它还能在组件首次加载后，向后台发送请求
   */
  useEffect(() => {
    getRelation();
    loadData();
  }, []);

  return (
    // {JSON.stringify(data)}
    <PageContainer title={'咸鱼API在线文档'}>
      <Row gutter={16}>
        <Col span={8}>
          {data ? (
            <Card
              title={'API名称：' + data.name}
              extra={
                relation === true ? (
                  <Button style={{ color: 'green' }} type={'default'}>
                    已开通
                  </Button>
                ) : (
                  <Popconfirm
                    title="你确定要开通该接口？"
                    onConfirm={confirm}
                    onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button type={'primary'}>开通</Button>
                  </Popconfirm>
                )
              }
            >
              <Descriptions column={1}>
                <Descriptions.Item label="API说明">{data.description}</Descriptions.Item>
                <Descriptions.Item label="API状态">
                  {data.status ? '开启' : '关闭'}
                </Descriptions.Item>
                <Descriptions.Item label="ID">{data.id}</Descriptions.Item>
                <Descriptions.Item label="请求参数">{data.requestParams}</Descriptions.Item>
                {/*<Descriptions.Item label="url">{data.url}</Descriptions.Item>*/}
                <Descriptions.Item label="请求方式">{data.method}</Descriptions.Item>
                <Descriptions.Item label="请求头">{data.requestHeader}</Descriptions.Item>
                <Descriptions.Item label="响应头">{data.responseHeader}</Descriptions.Item>
                <Descriptions.Item label="创建时间">{data.createTime}</Descriptions.Item>
                <Descriptions.Item label="更新时间">{data.updateTime}</Descriptions.Item>
              </Descriptions>
            </Card>
          ) : (
            <>接口不存在</>
          )}
        </Col>
        <Col span={8}>
          <Card title={'在线调试'}>
            <Form name="invoke" onFinish={onFinish} layout={'vertical'}>
              <Form.Item label="请求参数" name="userRequestParams">
                <Input.TextArea placeholder={data?.requestParams} />
              </Form.Item>
              <Form.Item wrapperCol={{ span: 16 }}>
                <Button type="primary" htmlType="submit">
                  测试
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={8}>
          <Card title={'响应结果'} loading={invokeLoading}>
            {invokeRes}
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Index;
