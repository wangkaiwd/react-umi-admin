import { Modal } from 'antd';
import { cloneElement, useEffect, useState } from 'react';

const FormModal = (props: any) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (visible) {
      // send request
    }
  }, [visible]);
  const onTriggerClick = () => {
    setVisible(true);
  };
  return (
    <>
      <Modal
        title={'FormModal'}
        destroyOnClose
        visible={visible}
        onOk={() => setVisible(true)}
        onCancel={() => setVisible(false)}
      >
        This is Modal
      </Modal>
      {cloneElement(props.trigger, {
        onClick: onTriggerClick,
      })}
    </>
  );
};

export default FormModal;
