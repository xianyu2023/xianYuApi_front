import { PageContainer } from '@ant-design/pro-components';
import React, {useEffect, useState} from 'react';
import {List, message} from "antd";
import {listOpenApiByPageUsingGET} from "@/services/xianYuOpenApi_backend/openApiController";

/**
 * 主页
 * @constructor
 */
const Index: React.FC = () => {
const [loading, setLoading] = useState(false);
const [list, setList] = useState<API.OpenApi[]>([]);
const [total, setTotal] = useState<number>(0);


let pageNumber = 5;
  const loadData = async (current = 1, pageSize = pageNumber)=> {
  setLoading(true);
  try {
    const res = await listOpenApiByPageUsingGET({
      current,
      pageSize,
    });
    setList(res?.data?.records ?? [])
    setTotal(res?.data?.total ?? 0)

  } catch (error: any) {
    message.error(error.message);
  }
  setLoading(false)
}
  /**
   * 使用useEffect,除了监视，它还能在组件首次加载后，向后台发送请求
   */
  useEffect(() => {
    loadData();
  },[]);

  return (
    <PageContainer title={"OpenApi接口调用"}>
      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => {
          const apiLink = `/openApi/${item.id}`;
          return (
            <List.Item
              actions={[<a href={apiLink}  key={item.id} >详情</a>]}
            >
              <List.Item.Meta
                title={<a href={apiLink}>{item.name}</a>}
                description={item.description}
              />
            </List.Item>
            );
        }}
        pagination={{
          showTotal(total: number) {
            return '总数' + total;
          },
          pageSize: pageNumber,
          total,
          onChange(page,pageSize) {
            loadData(page,pageSize)
          },
        }}
      />
    </PageContainer>
  );
};

export default Index;
