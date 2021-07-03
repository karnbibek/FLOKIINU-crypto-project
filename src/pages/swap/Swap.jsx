import React, { Component } from "react";
import bnbicon from "../../images/bnb-icon.png";
import downArrow from "../../images/down-arrow.svg";
import settingIcon from "../../images/setting_icon.svg";
import ConnectToAWalletModal from "../../components/Modals/ConnectToAWalletModal";
import EthAndSelectModal from "../../components/Modals/EthAndSelectModal";
import "./Swap.scss";
import SettingsOverlay from "../../components/Header/SettingsOverlay";
import SettingOverlay from "../../components/Header/SettingOverlay";
import { useState } from "react";
import { useEffect } from "react";

const Swap = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState({});
  const [ethModal, setEthModal] = useState(false);
  const [selectTokenModal, setSelectTokenModal] = useState(false);
  const [swap, setSwap] = useState(false);
  const [slippageValue, setSlippageValue] = useState(0);

  const handleClick = (e) => {
    let tar = e.target;
    setShow(true);
    setTarget(tar);
  };
  const handleHide = () => {
    setShow(false);
  };
  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const handleETH = () => {
    setEthModal(true);
  };
  const handleSelectToken = () => {
    setSelectTokenModal(true);
  };
  const handleSwap = () => {
    setSwap(!swap);
  };
  const handleSecondStep = () => {
    setEthModal(!ethModal);
  };

  const handleSlippageValue = async (e) => {
    if (!e) {
      const slippageTolerance = await localStorage.getItem(
        "userSlippageTolerance"
      );
      setSlippageValue(slippageTolerance);
    }
    if (e > 0) {
      setSlippageValue(e);
    }
  };

  useEffect(() => {
    handleSlippageValue();
  }, [slippageValue]);
  return (
    <div className="swap-container">
      <div className="wallet-container">
        <div className="wallet-picker">
          <div className="swap-container-header">
            <div className="swap-container-header-left">
              <div className="swap-container-header-left-top">
                <h3>Exchange</h3>
              </div>
              <div className="swap-container-header-left-bottom">
                Trade tokens in an instant
              </div>
            </div>
            <div className="swap-container-header-right">
              <img src={settingIcon} onClick={handleClick} alt="settings" />
            </div>
            {/* <SettingOverlay
              show={show}
              onHide={handleHide}
              target={target}
              handleHide={handleHide}
              handleSlippageValue={handleSlippageValue}
            /> */}
            {/* <SettingsOverlay
              show={show}
              target={target}
              handleHide={handleHide}
              handleSlippageValue={handleSlippageValue}
            /> */}
          </div>
          <div className="left-content">
            <div className="border-box">
              <label>From</label>
              <div className="d-flex align-items-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="0.0"
                ></input>
                {swap === false ? (
                  <React.Fragment>
                    <button onClick={handleETH} className="btn-dropdown-from">
                      <img src={bnbicon} className="etch-icon" alt="bnb-icon" />
                      <span>BNB</span>
                      <svg
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                        class="sc-eKZiaR bwyinG"
                      >
                        <path
                          d="M0.97168 1L6.20532 6L11.439 1"
                          stroke="#AEAEAE"
                        ></path>
                      </svg>
                    </button>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <button
                      onClick={handleSelectToken}
                      className="btn btn-token"
                    >
                      Select a Token
                      <svg
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                        class="sc-eKZiaR bwyinG"
                      >
                        <path
                          d="M0.97168 1L6.20532 6L11.439 1"
                          stroke="#AEAEAE"
                        ></path>
                      </svg>
                    </button>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
          <button onClick={handleSwap} className="swap-arrow">
            <img src={downArrow} alt="arrow" />
          </button>
          <div className="right-content">
            <div className="border-box">
              <label>To</label>
              <div className="d-flex align-items-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="0.0"
                ></input>

                {swap === false ? (
                  <React.Fragment>
                    <button
                      onClick={handleSelectToken}
                      className="btn btn-token"
                    >
                      Select a Token
                      <svg
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                        class="sc-eKZiaR bwyinG"
                      >
                        <path
                          d="M0.97168 1L6.20532 6L11.439 1"
                          stroke="#AEAEAE"
                        ></path>
                      </svg>
                    </button>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <button onClick={handleETH} className="btn-dropdown-from">
                      <img src={bnbicon} className="etch-icon" alt="bnbicon" />
                      <span>BNB</span>
                      <svg
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                        class="sc-eKZiaR bwyinG"
                      >
                        <path
                          d="M0.97168 1L6.20532 6L11.439 1"
                          stroke="#AEAEAE"
                        ></path>
                      </svg>
                    </button>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
          {slippageValue > 0 && (
            <div className="wallet-picker-slippage">
              <div className="">Slippage Tolerance</div>
              <div className="">{slippageValue}%</div>
            </div>
          )}
          <button onClick={handleOpenModal} className="btn btn-connect-wallet">
            Connect Wallet
          </button>
        </div>
      </div>
      <ConnectToAWalletModal
        show={modalVisible}
        onHide={() => setModalVisible(false)}
      />
      <EthAndSelectModal
        show={ethModal}
        onHide={() => setEthModal(false)}
        handleSecondStep={handleSecondStep}
      />
      <EthAndSelectModal
        show={selectTokenModal}
        onHide={() => setSelectTokenModal(false)}
      />
      <>
      <SettingOverlay
              show={show}
              onHide={handleHide}
              target={target}
              handleHide={handleHide}
              handleSlippageValue={handleSlippageValue}
            />
            </>
    </div>
  );
};

export default Swap;
