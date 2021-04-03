import React, { useState, useContext } from 'react';
import GlobalContext from './../../../contexts/GlobalContext';
import { Modal } from 'antd';
import HeaderSection from './HeaderSection';
import BodySection from './BodySection';
import { useFetchUserData } from '../../../helpers/apiGet';
import { Background, BackgroundContainer, Container, HeaderBox } from './style';
import GachaButton from './GachaButton';
import { usePostGacha } from '../../../helpers/apiPost';
import CouponCard from '../../CouponCard';

const Home = () => {
  const { loading, response: userData } = useFetchUserData(1);
  const { loading: loadingGacha, gachaData, postGacha } = usePostGacha(1);
  const { setActiveMenu } = useContext(GlobalContext);
  const [gachaPop, setGachaPop] = useState(false);
  const [gachaOpened, setGachaOpened] = useState(false);
  const [gachaDetails, setGachaDetails] = useState({});


  const onClickGacha = () => {
    postGacha(1);
    if (!loadingGacha) {
      setGachaDetails(gachaData);
      setGachaPop(true);
      setGachaOpened(true);
    }
  }

  const onCloseGacha = () => {
    setGachaDetails({});
    setGachaPop(false);
  }

  return (
    <>
    <div className={BackgroundContainer}>
      <div className={Background}></div>
      <div className={HeaderBox}></div>
      <div className={Container}>
        <HeaderSection user={userData} loading={loading} />
        <BodySection />
        { !loading && userData.gacha && !gachaOpened && (<GachaButton onClickGacha={onClickGacha}/>) }
        <Modal title="Daily Gacha"
          centered
          visible={gachaPop}
          onCancel={onCloseGacha}
          cancelText="Close"
          onOk={() => setActiveMenu(2)}
          okText="Go to Coupons"
          style={{padding: "15px"}}
        >
          <div style={{textAlign: 'center'}}>Congratulations! You received: </div>
          {
            !loadingGacha && (<CouponCard name={gachaDetails.name} thumbnail={gachaDetails.img}/>)
          } 
        </Modal>
      </div>
    </div>
    </>
  )
}

export default Home;
