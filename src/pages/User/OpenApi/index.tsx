import { getUserOpenApiByUserIdUsingGET } from '@/services/xianYuOpenApi_backend/userOpenApiController';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, List, message, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';

export const valueLength = (val: any) => {
  return val && val.trim().length > 0;
};
/**
 * 接口详情页
 * @constructor
 */
const Setting: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<API.UserOpenApiVO[]>([]);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await getUserOpenApiByUserIdUsingGET();
      if (res.data && res.code === 0) {
        // console.log("res:"+res.data)
        message.success('获取数据成功');
        setList(res.data);
      }
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

  const CardInfo: React.FC<{
    totalNum: React.ReactNode;
    leftNum: React.ReactNode;
    status: React.ReactNode;
  }> = ({ totalNum, leftNum, status }) => (
    //0-正常，1-禁止
    <div>
      <div>
        <p>已调用次数</p>
        <p>{totalNum}</p>
      </div>
      <div>
        <p>剩余调用次数</p>
        <p>{leftNum}</p>
      </div>
    </div>
  );

  return (
    // {JSON.stringify(data)}
    <PageContainer title={'已开通接口'}>
      <List
        loading={loading}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.name}
                  extra={item.status === 0 ? <Button size={"small"} style={{color: "green"}}>正常</Button> : <Button size={"small"} style={{color: "red"}}>禁止</Button>}
                  actions={[
                    // <Tooltip title="分享" key="share">
                    //   <ShareAltOutlined />
                    // </Tooltip>,
                    // <Card.Meta title={"剩余调用次数："+item.leftNum} />
                    <Tooltip title="在线调用" key="share">
                      <Button href={`/openApi/${item.openApiId}`}>在线调用</Button>
                    </Tooltip>,
                  ]}
            >
              <CardInfo
                totalNum={item.totalNum}
                leftNum={item.leftNum}
                status={item.status}
              />
            </Card>
          </List.Item>
        )}
      />
    </PageContainer>
  );
};

export default Setting;
