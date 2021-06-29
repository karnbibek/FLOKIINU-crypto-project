import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./Common.scss";
import ethicon from "../../images/eth-icon.png";
import wethicon from "../../images/weth-icon.png";
import daiicon from "../../images/dai-icon.png";
import usdcicon from "../../images/usdc-icon.png";
import usdticon from "../../images/usdt-icon.png";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const CommonModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="common-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select a token
          <OverlayTrigger
            placement="right"
            overlay={
              <Tooltip className="custom-tooltip">
                Find a token by searching for its name or symbol or by pasting
                its address below.
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
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-padding">
          <input
            type="text"
            className="form-control"
            placeholder="Search name or paste address"
          ></input>
          <div className="common-bases">
            <div className="d-flex">
              <label>Common bases</label>
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip className="custom-tooltip">
                    These tokens are commonly paired with other tokens.
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
            <div className="d-flex button-wrap">
              <button className="selected">
                <img src={ethicon} />
                <h6>ETH</h6>
              </button>
              <button>
                <img src={wethicon} />
                <h6>WETH</h6>
              </button>
              <button>
                <img src={daiicon} />
                <h6>DAI</h6>
              </button>
              <button>
                <img src={usdcicon} />
                <h6>USDC</h6>
              </button>
              <button>
                <img src={usdticon} />
                <h6>USDT</h6>
              </button>
            </div>
          </div>
          <div className="token-toggle">
            <label>Token Name</label>
            <a href="javascript:void(0)" className="toggle-switch">
              ↓
            </a>
          </div>
        </div>
        <ul>
          <li>
            <img src={ethicon} className="etch-icon" />
            <span>ETH</span>
          </li>
        </ul>
        <a href="javascript:void(0)" className="select-list">
          Select a list
        </a>
      </Modal.Body>
    </Modal>
  );
};

export default CommonModal;
