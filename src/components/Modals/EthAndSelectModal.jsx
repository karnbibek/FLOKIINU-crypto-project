import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./EthAndSelectModal.scss";
import bnbicon from "../../images/bnb-icon.png";
import EthSecondStep from "./EthSecondStep";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const EthAndSelectModal = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [hideShow, setHideShow] = useState(false);

  const secStp = () => {
    props.handleSecondStep();
    setModalShow(false);
  };
  console.log("hideShow", hideShow);
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="ethandselect-modal"
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
              <div href="javascript:void(0)" class="question-mark">
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
              </div>
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
            <div className="token-toggle">
              <label>Token Name</label>
              <a href="javascript:void(0)" className="toggle-switch">
                ↓
              </a>
            </div>
          </div>
          <ul>
            <li>
              <img src={bnbicon} alt="bnbicon" className="etch-icon" />
              <span>BNB</span>
            </li>
            <li>
              <img src={bnbicon} alt="bnbicon" className="etch-icon" />
              <span>BNB</span>
            </li>
            <li>
              <img src={bnbicon} alt="bnbicon" className="etch-icon" />
              <span>BNB</span>
            </li>
          </ul>

          <a
            href="javascript:void(0)"
            onClick={() => {
              setModalShow(true);
              props.handleSecondStep();
            }}
            className="select-list"
          >
            Select a list
          </a>
        </Modal.Body>
      </Modal>
      <EthSecondStep
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          props.handleSecondStep();
        }}
        secStp={secStp}
      />
    </div>
  );
};

export default EthAndSelectModal;
