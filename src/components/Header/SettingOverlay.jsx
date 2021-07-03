import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "../Modals/ConnectToaWalletModal.scss";
import matamask from "../../images/metamask.png";
import walletConnectIcon from "../../images/walletConnectIcon.svg";
import coinbaseWalletIcon from "../../images/coinbaseWalletIcon.svg";
import fortmatic from "../../images/fortmatic.png";
import portisIcon from "../../images/portisIcon.png";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Popover } from "react-bootstrap";

const ConnectToAWalletModal = ({
  show,
  onHide,
  target,
  handleHide,
  handleSlippageValue,
}) => {
  const [slippageTolerance, setSlippageTolerance] = useState(
    localStorage.getItem("userSlippageTolerance") || 0.1
  );

  const slippage = (value) => {
    handleSlippageValue(value);
    setSlippageTolerance(value);
    localStorage.setItem("userSlippageTolerance", JSON.stringify(value));
    if (value <= 0) localStorage.removeItem("userSlippageTolerance");
  };

  useEffect(() => {
    const slippageValue = localStorage.getItem("userSlippageTolerance");
    setSlippageTolerance(slippageValue);
  }, [slippageTolerance]);
  return (
    <div className="common-modal">
      <Modal
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="connectwallet-modal"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="contained-modal-title-vcenter">
          Connect to a wallet
        </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          {/* <span>
          <button>
            <h6>Install Metamask</h6>
            <img src={matamask} alt="matamask" />
          </button>
          <button>
            <h6>WalletConnect</h6>
            <img src={walletConnectIcon} alt="walletConnectIcon" />
          </button>
          <button>
            <h6>Coinbase Wallet</h6>
            <img src={coinbaseWalletIcon} alt="coinbaseWalletIcon" />
          </button>
          <button>
            <h6>Fortmatic</h6>
            <img src={fortmatic} alt="fortmatic" />
          </button>
          <button>
            <h6>Portis</h6>
            <img src={portisIcon} alt={portisIcon} />
          </button>
        </span>
        <p>
          New to Ethereum?&nbsp;&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.pancakeswap.finance/help/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain"
          >
            Learn more about wallets
          </a>
        </p> */}
          {/* <Popover id="popover-contained">
          <Popover.Title as="h3">Transaction Settings</Popover.Title>
          <Popover.Content> */}
          <h3 className="popover-header">Transaction Settings</h3>
          <div className="popover-content">
            <label className="popover-content-label">Slippage tolerance</label>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip className="custom-tooltip">
                  Your transaction will revert if the price changes unfavorably
                  by more than this percentage.
                </Tooltip>
              }
            >
              <a href="javascript:void(0)" class="question-mark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </a>
            </OverlayTrigger>
          </div>
          <div className="btn-wrap popover-body">
            <button className="active" onClick={() => slippage(0.1)}>
              0.1%
            </button>
            <button className="active" onClick={() => slippage(0.5)}>
              0.5%
            </button>
            <button className="active" onClick={() => slippage(1)}>
              1%
            </button>
            <button>
              <input
                type="number"
                min="0.1"
                placeholder={slippageTolerance}
                value={slippageTolerance}
                onChange={(e) => slippage(Number(e.target.value))}
              />
              %
            </button>
          </div>

          {/* <div className="message">Hello</div> */}
          {slippageTolerance === 0 && (
            <h5 style={{ color: "#d65547" }}>
              Enter a valid slippage percentage!!
            </h5>
          )}
          {slippageTolerance >= 0.1 && slippageTolerance < 0.5 && (
            <h5 style={{ color: "#d65547" }}>Your transaction may fail!</h5>
          )}
          {slippageTolerance >= 5.1 && slippageTolerance < 50 && (
            <h5 style={{ color: "#d65547" }}>
              Your transaction may be frontrun
            </h5>
          )}
          {slippageTolerance >= 50 && (
            <h5 style={{ color: "#d65547" }}>
              Enter a valid slippage percentage!!
            </h5>
          )}

          <div>
            <label>Transaction deadline</label>
            <OverlayTrigger
              placement="left"
              overlay={
                <Tooltip className="custom-tooltip">
                  Your transaction will revert if it is pending for more than
                  this long.
                </Tooltip>
              }
            >
              <a href="javascript:void(0)" class="question-mark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </a>
            </OverlayTrigger>

            <div className="btn-wrap mb-0 popover-body">
              <button className="mr-8">
                <input type="text" placeholder="2"></input>
              </button>
              minutes
            </div>
          </div>
          {/* </Popover.Content>
        </Popover> */}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ConnectToAWalletModal;
