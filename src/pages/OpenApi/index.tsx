import {getOpenApiByIdUsingGET, invokeOpenApiUsingPOST} from '@/services/xianYuOpenApi_backend/openApiController';
import { useParams } from '@@/exports';
import { PageContainer } from '@ant-design/pro-components';
import {Button, Card, Descriptions, Divider, Form, Input, message} from 'antd';
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
        ...values
      });
      setInvokeRes(res?.data);
      message.success("请求成功");
    } catch (error: any) {
      message.error("操作失败."+error.message);
    }
    setInvokeLoading(false);
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
    } catch (error: any) {
      message.error(error.message);
    }
    setLoading(false);
  };
  /**
   * 使用useEffect,除了监视，它还能在组件首次加载后，向后台发送请求
   */
  useEffect(() => {
    loadData();
  }, []);

  return (
    // {JSON.stringify(data)}
    <PageContainer title={'查看接口文档'}>
      <Card>
        {data ? (
          //extra={<Button>发送</Button>}
          <Descriptions title={data.name} column={1}>
            <Descriptions.Item label="描述">{data.description}</Descriptions.Item>
            <Descriptions.Item label="状态">{data.status ? '开启' : '关闭'}</Descriptions.Item>
            <Descriptions.Item label="url">{data.url}</Descriptions.Item>
            <Descriptions.Item label="请求方式">{data.method}</Descriptions.Item>
            <Descriptions.Item label="请求参数">{data.requestParams}</Descriptions.Item>
            <Descriptions.Item label="请求头">{data.requestHeader}</Descriptions.Item>
            <Descriptions.Item label="响应头">{data.responseHeader}</Descriptions.Item>
            <Descriptions.Item label="创建时间">{data.createTime}</Descriptions.Item>
            <Descriptions.Item label="更新时间">{data.updateTime}</Descriptions.Item>
          </Descriptions>
        ) : (
          <>接口不存在</>
        )}
      </Card>
      <Divider/>
      <Card title={"在线测试"}>
        <Form
          name="invoke"
          onFinish={onFinish}
          layout={"vertical"}
        >
          <Form.Item
            label="请求参数"
            name="userRequestParams"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16 }}>
            <Button type="primary" htmlType="submit">
              测试
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Divider/>
      <Card title={"测试结果"} loading={invokeLoading}>
        {invokeRes}
      </Card>
    </PageContainer>
  );
};

export default Index;
