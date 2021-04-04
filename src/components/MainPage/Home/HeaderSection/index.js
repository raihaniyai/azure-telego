import React, { useEffect, useState } from 'react';
import { Skeleton } from 'antd';
import { StarOutlined, BellOutlined, MoneyCollectOutlined, LogoutOutlined } from '@ant-design/icons';
import TopupModal from './TopupModal';
import {
  Balance,
  BalanceContainer,
  BalanceAction,
  BalanceDescription,
  Header,
  Icon,
  RotateIcon,
  Username,
  WalletContainer,
  Welcome,
} from './style'

const HeaderSection = ({ user, loading }) => {
  const [topupVisibility, setTopupVisibility] = useState(false);
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    if (!loading) setBalance(user.balance)
  }, [loading, user])

  return (
    <>
      <div className={Header}>
        <div>
          <div className={Welcome}>Welcome,</div>
          {loading && <Skeleton paragraph={false} />}
          {!loading && <div className={Username}>{user.first_name} {user.last_name}</div> }
        </div>

        <div>
          <StarOutlined className={Icon} />
          <BellOutlined className={Icon} />
        </div>
      </div>

      <div className={WalletContainer}>
        <div className={BalanceContainer}>
          <div className={Balance}>
            $ {loading ? <Skeleton.Input style={{ width: 64 }} /> : balance}
          </div>
          <div className={BalanceDescription}>Telego Balance</div> 
        </div>

        <div className={BalanceAction}>
          <LogoutOutlined className={RotateIcon} onClick={() => setTopupVisibility(true)} />
          <MoneyCollectOutlined className={Icon} />
        </div>
      </div>

      <TopupModal visible={topupVisibility} setVisible={setTopupVisibility} setBalance={setBalance} />
    </>
  )
}

export default HeaderSection;
