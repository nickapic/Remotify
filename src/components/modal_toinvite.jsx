import React, { useState } from 'react'
import { Modal, Button } from 'antd';

export const ModalPop = () => {
const [visible, setvisible] = useState(false)    
   const showModal = () => {
        setvisible(true);
   }
   const handleOk = e => {
    console.log(e);
    setvisible(false)
   }
   const handleCancel = e => {
    console.log(e);
    setvisible(false)
   }
    
    return (
        <div>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        </div>
    )
}
