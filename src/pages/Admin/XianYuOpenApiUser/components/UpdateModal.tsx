import {ProColumns, ProFormInstance, ProTable} from '@ant-design/pro-components';
import '@umijs/max';
import { Modal } from 'antd';
import React, {useEffect, useRef} from 'react';
//引入属性
export type Props = {
  values: API.User;
  //复用columns
  columns: ProColumns<API.UserVO>[];
  onCancel: () => void;
  onSubmit: (values: API.UserUpdateRequest) => Promise<void>;
  updateModalOpen: boolean;
};
const UpdateModal: React.FC<Props> = (props) => {
  const {values, columns, updateModalOpen, onCancel, onSubmit } = props;
  const formRef = useRef<ProFormInstance>();
  //监听外部values的变化
  useEffect(() => {
    if(formRef) {
      formRef.current?.setFieldsValue(values);
    }
  },[values])

  return (
    <Modal footer={null} open={updateModalOpen} onCancel={() => onCancel?.()}>
      <ProTable
        type={'form'}
        //React ref 替代form
        formRef={formRef}
        //form组件的initialValues只会初始化一次。其初始值只要填充一次，就改不了。
        // form={{
        //   initialValues: values
        // }}
        columns={columns}
        onSubmit={async (value) => {
          onSubmit?.(value);
        }}
      />
    </Modal>
  );
};
export default UpdateModal;
