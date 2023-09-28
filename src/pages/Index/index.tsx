import { searchAllUsingPOST } from '@/services/xianYuOpenApi_backend/searchAllController';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, List, message, Space, Tabs } from 'antd';
import React, {useEffect, useRef, useState} from 'react';
import ProCard from "@ant-design/pro-card";
import Search from "antd/es/input/Search";





/**
 * 主页
 * @constructor
 * let — 现代的变量声明方式。
 * var — 老旧的变量声明方式。一般情况下，我们不会再使用它。
 * const — 类似于 let，但是变量的值无法被修改。
 */
const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<API.OpenApi[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>('');

  const initRequestParam = {
    current: 1,
    pageSize: 6,
  }
  const requestParam = useRef(initRequestParam);

  const typeKeyRef = useRef('');

  const onSearch = async () => {
    setLoading(true);
    try {
      const res = await searchAllUsingPOST({
        type: typeKeyRef.current,
        searchText: searchText,
        current: requestParam.current.current,
        pageSize: requestParam.current.pageSize,
      });
      if (res.data && res.code === 0) {
        message.success("查询成功")
        if (typeKeyRef.current === '') {
          //初始type为''查询所有
          setList(res?.data?.botianOpenApiVOList?.records ?? []);
          setTotal(res?.data?.botianOpenApiVOList?.total ?? 0);
        } else {
          //查询单项
          setList(res?.data?.dataList?.records ?? []);
          setTotal(res?.data?.dataList?.total ?? 0);
        }
      }
    } catch (error: any) {
      message.error(error.message);
    }
    setLoading(false);
  };

  const onChange = (key: string) => {
    console.log(key);
    typeKeyRef.current = key;
    console.log(typeKeyRef.current)
    //换tab时，刷新current到第一页
    requestParam.current.current = 1;
    onSearch();
  };


  /**
   * 使用useEffect,除了监视，它还能在组件首次加载后，向后台发送请求
   */
  useEffect(() => {
      onSearch();
  }, []);

  return (
    <PageContainer title={'咸鱼API开放平台'}>
      <Card hoverable>
        <ProCard layout="center">
          <Search
            showCount
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            allowClear
            size={"large"}
            maxLength={50}
            enterButton="搜索"
            placeholder={"请输入接口名称/描述进行搜索"}
            onSearch={onSearch}
            style={{maxWidth: 600, height: 60}}
          />
        </ProCard>

        <Tabs
          onChange={onChange}
          defaultActiveKey="botian"
          centered
          items={[
            {
              label: `咸鱼API模拟接口`,
              key: 'local',
              // children: (<div>咸鱼API列表</div>),
            },
            {
              label: `博天API`,
              key: 'botian',
            },
          ]}
        />

        <List
          className="demo-loadmore-list"
          loading={loading}
          itemLayout="horizontal"
          dataSource={list}
          renderItem={(item) => {
            const apiLink = `/openApi/${item.id}`;
            return (
              <Card size={'small'}>
                <List.Item>
                  <List.Item.Meta
                    title={<a href={apiLink}>{'API名称: ' + item.name}</a>}
                    description={'API说明: ' + item.description}
                  />
                  <Space>
                    <Button type="default" href={apiLink}>
                      详情
                    </Button>
                  </Space>
                </List.Item>
              </Card>
            );
          }}
          pagination={{
            showTotal(total: number) {
              return '总数' + total;
            },
            pageSize: requestParam.current.pageSize,
            current: requestParam.current.current,
            total,
            onChange(page, pageSize) {
              requestParam.current.current = page;
              requestParam.current.pageSize = pageSize;
              onSearch();
            },
          }}
        />
      </Card>

      <br/>
      <br/>

    </PageContainer>
  );
};

export default Index;
