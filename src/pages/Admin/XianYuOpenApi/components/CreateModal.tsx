import { ProColumns, ProTable } from '@ant-design/pro-components';
import '@umijs/max';
import { Modal } from 'antd';
import React from 'react';
//引入属性
export type Props = {
  //复用columns
  columns: ProColumns<API.OpenApi>[];
  onCancel: () => void;
  onSubmit: (values: API.OpenApi) => Promise<void>;
  updateModalOpen: boolean;
};
const CreateModal: React.FC<Props> = (props) => {
  const { columns, updateModalOpen, onCancel, onSubmit } = props;
  return (
    <Modal footer={null} open={updateModalOpen} onCancel={() => onCancel?.()}>
      <ProTable
        type={'form'}
        columns={columns}
        onSubmit={async (value) => {
          onSubmit?.(value);
        }}
      />
    </Modal>
  );
};
export default CreateModal;
