import {PageContainer} from '@ant-design/pro-components';
import '@umijs/max';
import React, {useEffect, useState} from 'react';
import ReactECharts from 'echarts-for-react';
import {getTopOpenApiInvokeUsingGET} from "@/services/xianYuOpenApi_backend/analysisController";
import {message} from "antd";


/**
 * 接口分析
 * @constructor
 */
const OpenApiAnalysis: React.FC = () => {
  const [data,setData] = useState<API.OpenApiVO[]>([]);
  const [leading,setLoading] = useState(true);
  //可监视后面的变量。当变量是空[]时，只会触发一次。像vue的onMount钩子
  useEffect(() => {
    //从远程获取数据
    try{
      getTopOpenApiInvokeUsingGET().then(res=> {
        if (res?.data) {
          setData(res?.data);
        }
      })
    } catch (error: any) {
      message.error('获取接口信息失败.'+ error.message);
    }
  },[])

  //映射{ value: 1048, name: 'Search Engine' },
  const chartData = data.map(item => {
      return {
        value: item.totalNums,
        name: item.name,
      }
  });

  const option = {
    title: {
      text: '调用次数最多的接口TOP3',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: chartData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };


  return (
    // render echarts option.
    <PageContainer>
      <ReactECharts loadingOption={{
        showLoading: leading
      }} option={option} />
    </PageContainer>
  );
};
export default OpenApiAnalysis;
