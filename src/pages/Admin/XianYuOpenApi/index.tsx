import CreateModal from '@/pages/Admin/XianYuOpenApi/components/CreateModal';
import {
  addOpenApiUsingPOST, deleteOpenApiUsingPOST,
  listOpenApiByPageUsingGET, offlineOpenApiUsingPOST, onlineOpenApiUsingPOST,
  updateOpenApiUsingPOST
} from '@/services/xianYuOpenApi_backend/openApiController';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
  FooterToolbar,
  PageContainer,
  ProDescriptions,
  ProTable,
} from '@ant-design/pro-components';
import '@umijs/max';
import {Button, Drawer, message, Popconfirm} from 'antd';
import React, { useRef, useState } from 'react';
import UpdateModal from "@/pages/Admin/XianYuOpenApi/components/UpdateModal";

const TableList: React.FC = () => {
  /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */
  const [createModalOpen, handleModalOpen] = useState<boolean>(false);
  /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */
  const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const [selectedRowsState, setSelectedRows] = useState<API.OpenApi[]>([]);
  const [currentRow, setCurrentRow] = useState<API.OpenApi>();
  /**
   * @en-US Add node
   * @zh-CN 添加节点
   * @param fields
   */
  const handleAdd = async (fields: API.OpenApi) => {
    const hide = message.loading('正在添加');
    try {
      await addOpenApiUsingPOST({
        ...fields,
      });
      hide();
      message.success('创建成功');
      //关闭Modal框
      handleModalOpen(false);
      return true;
    } catch (error: any) {
      hide();
      message.error('创建失败.'+ error.message);
      return false;
    }
  };

  /**
   * @en-US Update node
   * @zh-CN 更新节点
   *
   * @param fields
   */
  const handleUpdate = async (fields: API.OpenApiUpdateRequest) => {
    if (!currentRow) {
      return;
    }
    const hide = message.loading('修改中');
    console.log('id:',fields.id)
    try {
      await updateOpenApiUsingPOST({
        id: currentRow.id,
        ...fields,
      });
      hide();
      message.success('修改成功');
      return true;
    } catch (error: any) {
      hide();
      message.error('修改失败.'+error.message);
      return false;
    }
  };

  /**
   *  Delete node
   * @zh-CN 发布节点
   *
   * @param record
   */
  const handleOnline = async (record: API.IdRequest) => {
    const hide = message.loading('正在发布');
    if (!record) return true;
    try {
      await onlineOpenApiUsingPOST({
        id: record.id
      });
      hide();
      message.success('发布成功');
      actionRef.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      message.error(error.message);
      return false;
    }
  };

  /**
   *  Delete node
   * @zh-CN 下线节点
   *
   * @param record
   */
  const handleOffline = async (record: API.IdRequest) => {
    const hide = message.loading('正在下线');
    if (!record) return true;
    try {
      await offlineOpenApiUsingPOST({
        id: record.id
      });
      hide();
      message.success('下线成功');
      actionRef.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      message.error(error.message);
      return false;
    }
  };



  /**
   *  Delete node
   * @zh-CN 删除节点
   *
   * @param record
   */
  const handleRemove = async (record: API.DeleteRequest) => {
    const hide = message.loading('正在删除');
    if (!record) return true;
    try {
      await deleteOpenApiUsingPOST({
        id: record.id
      });
      hide();
      message.success('删除成功');
      actionRef.current?.reload();
      return true;
    } catch (error: any) {
      hide();
      message.error(error.message);
      return false;
    }
  };



  const confirm = async () => {
    await handleRemove(currentRow as API.OpenApi);
  };

  const cancel = () => {
    message.success('取消成功');
  };


  /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */

  const columns: ProColumns<API.OpenApi>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      //类型使用index索引时，该属性不会填充到表格里。所以需自己保存一个id再取，或者从当前行currentRow取id
      // valueType: 'index'
      ellipsis: true,
      width: 65
    },
    {
      title: '名称',
      dataIndex: 'name',
      //规则
      // tip: 'The rule name is the unique key',
      valueType: 'text',
      ellipsis: true,
      formItemProps: {
        rules: [{
          required: true,
          //可不用message，默认就是'请输入+text'
          message: '输入接口名称',
        }]
      }
    },
    {
      title: '描述',
      dataIndex: 'description',
      //textarea:副文本编辑器（内容比较多的情况）
      valueType: 'textarea',
      ellipsis: true,
    },
    {
      title: '地址',
      dataIndex: 'url',
      valueType: 'jsonCode',
      copyable: true,
      ellipsis: true,
      width: 75
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      width: 65,
      valueEnum: {
        0: {
          text: '下线',
          status: 'Default',
        },
        1: {
          text: '上线',
          status: 'Processing',
        },
      },
    },
    {
      title: '请求方式',
      dataIndex: 'method',
      valueType: 'text',
      width: 75
    },
    {
      title: '请求参数',
      dataIndex: 'requestParams',
      //jsonCode，现成的代码编辑器
      valueType: 'jsonCode',
      copyable: true,
      ellipsis: true,
      width: 75
    },
    {
      title: '请求头',
      dataIndex: 'requestHeader',
      valueType: 'jsonCode',
      copyable: true,
      ellipsis: true,
      width: 75
    },
    {
      title: '响应',
      dataIndex: 'responseHeader',
      valueType: 'textarea',
      copyable: true,
      ellipsis: true,
      hideInTable: true,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      valueType: 'dateTime',
      //隐藏。控制哪些列让用户填，哪些不让
      hideInForm: true,
      width: 100
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      valueType: 'dateTime',
      hideInForm: true,
      width: 100
    },
    {
      title: '接口操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key={"update"}
          onClick={() => {
            handleUpdateModalOpen(true);
            setCurrentRow(record);
          }}
        >
          修改
        </a>,

        record.status === 0 ? (
          <a
          key={"online"}
          onClick={() => {
            //todo 确认是否发布
            handleOnline(record);
          }}
        >
          发布
        </a> ): null,

        record.status === 1 ? (
          <a
          type={"text"}
          key={"offline"}
          style={{color: "red"}}
          onClick={() => {
            //todo 确认是否下线
            handleOffline(record);
          }}
        >
          下线
        </a> ): null,

        <Popconfirm
          key={'Delete'}
          title={"是否删除？"}
          onConfirm={confirm}
          onCancel={cancel}
          okText={"Yes"}
          cancelText={"No"}
        >
          <a
            type={"text"}
            key={"delete"}
            style={{color: "red"}}
            onClick={() => {
              //todo 确认是否删除
              setCurrentRow(record)
            }}
          >
            删除
          </a>
        </Popconfirm>
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.RuleListItem, API.PageParams>
        // //自适应横向滚动条
        // scroll={{ x: 'max-content' }}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              handleModalOpen(true);
            }}
          >
            <PlusOutlined /> 新建
          </Button>,
        ]}
        //取出请求参数params的所有并封装成一个参数传入我们请求函数中
        request={async (params) => {
          //需要同步调用，async异步+await
          const res = await listOpenApiByPageUsingGET({
            ...params,
          });
          if (res?.data) {
            return {
              data: res?.data.records || [],
              success: true,
              total: res?.data.total || 0,
            };
          } else {
            return {
              //数据列表
              data: [],
              //是否成功
              success: false,
              //数据列表的数据量
              total: 0,
            };
          }
        }}
        columns={columns}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              项 &nbsp;&nbsp;
              <span>
                服务调用次数总计 {selectedRowsState.reduce((pre, item) => pre + item.callNo!, 0)} 万
              </span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
          <Button type="primary">批量审批</Button>
        </FooterToolbar>
      )}

      <UpdateModal
        columns={columns}
        onSubmit={async (value) => {
          console.log(value)
          const success = await handleUpdate(value);
          if (success) {
            handleUpdateModalOpen(false);
            setCurrentRow(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          handleUpdateModalOpen(false);
          if (!showDetail) {
            setCurrentRow(undefined);
          }
        }}
        updateModalOpen={updateModalOpen}
        values={currentRow || {}}
      />

      <Drawer
        width={600}
        open={showDetail}
        onClose={() => {
          setCurrentRow(undefined);
          setShowDetail(false);
        }}
        closable={false}
      >
        {currentRow?.name && (
          <ProDescriptions<API.RuleListItem>
            column={2}
            title={currentRow?.name}
            request={async () => ({
              data: currentRow || {},
            })}
            params={{
              id: currentRow?.name,
            }}
            columns={columns as ProDescriptionsItemProps<API.RuleListItem>[]}
          />
        )}
      </Drawer>

      <CreateModal
        // 模态框
        columns={columns}
        onCancel={() => {
          handleModalOpen(false);
        }}
        onSubmit={(values) => {
          handleAdd(values);
        }}
        updateModalOpen={createModalOpen}
      />
    </PageContainer>
  );
};
export default TableList;
