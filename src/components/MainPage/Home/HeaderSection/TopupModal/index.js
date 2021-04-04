import React, { useEffect, useState, useCallback } from 'react';
import { Modal, Input } from 'antd';
import { usePostUpdateBalance } from '../../../../../helpers/apiPost';

const TopupModal = ({ visible, setVisible, setBalance }) => {
  const [topup, setTopup] = useState(0);
  const { loading, postUpdateBalance, isSuccess, isError, messageError, updatedBalance } = usePostUpdateBalance()

  const handleUpdateBalance = useCallback(() => {
    const params = {
      userID: 1,
      balance: parseFloat(topup)
    };
    postUpdateBalance(params);
    // setLoading(loading);
    setVisible(false);
  }, [topup, postUpdateBalance, setVisible]);

  useEffect(() => {
    if (isSuccess) {
      setBalance(updatedBalance)
      Modal.success({
        title: "Success",
        content: "Successfully top up balance"
      })
    }

    if (isError) {
      Modal.error({
        title: "Error",
        content: messageError
      })
    }
  }, [loading, isSuccess, isError, setBalance, messageError, updatedBalance])

  const handleCancel = () => {
    setVisible(false);
  }

  const onChange = e => {
    setTopup(e.target.value)
  }
  
  return (
    <Modal title="Top Up Balance" visible={visible} onOk={handleUpdateBalance} onCancel={handleCancel}>
      <Input onChange={onChange}/>
    </Modal>
  )
};

export default TopupModal;