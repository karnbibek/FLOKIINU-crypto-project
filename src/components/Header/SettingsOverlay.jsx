import React, { useEffect, useState } from "react";
import Overlay from "react-bootstrap/Overlay";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Popover } from "react-bootstrap";
import "./Header.component.scss";

const SettingsOverLay = ({ show, target, handleHide, handleSlippageValue }) => {
  const [slippageTolerance, setSlippageTolerance] = useState(localStorage.getItem('userSlippageTolerance') || 0.1);

  const slippage = (value) => {
    handleSlippageValue(value);
    setSlippageTolerance(value);
    localStorage.setItem('userSlippageTolerance', JSON.stringify(value));
    if (value <= 0) localStorage.removeItem('userSlippageTolerance') 
  }

  useEffect(() => {
    const slippageValue = localStorage.getItem('userSlippageTolerance');
    setSlippageTolerance(slippageValue);
  }, [slippageTolerance]);
  return (
    <>
      <Overlay
        show={show}
        onHide={handleHide}
        rootClose={show}
        target={target}
        placement="bottom"
        containerPadding={20}
        trigger="hover"
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">Transaction Settings</Popover.Title>
          <Popover.Content>
            <div>
              <label>Slippage tolerance</label>
              <OverlayTrigger
                placement="left"
                overlay={
                  <Tooltip className="custom-tooltip">
                    Your transaction will revert if the price changes
                    unfavorably by more than this percentage.
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
            <div className="btn-wrap">
              <button className='active' onClick={() => slippage(0.1)}>0.1%</button>
              <button className='active' onClick={() => slippage(0.5)}>0.5%</button>
              <button className='active' onClick={() => slippage(1)}>1%</button>
              <button>
                <input type="number" min="0.1" placeholder={slippageTolerance} value={slippageTolerance} onChange={(e) => slippage(Number(e.target.value))} />%
              </button>
            </div>
            
            {/* <div className="message">Hello</div> */}
            {slippageTolerance === 0 && <h5 style={{color: "#d65547"}}>Enter a valid slippage percentage!!</h5>}
            {slippageTolerance >= 0.1 && slippageTolerance < 0.5 && <h5 style={{color: "#d65547"}}>Your transaction may fail!</h5>}
            {slippageTolerance >= 5.1 && slippageTolerance < 50 && <h5 style={{color: "#d65547"}}>Your transaction may be frontrun</h5>}
            {slippageTolerance >= 50 && <h5 style={{color: "#d65547"}}>Enter a valid slippage percentage!!</h5>}

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

              <div className="btn-wrap mb-0">
                <button className="mr-8">
                  <input type="text" placeholder="2"></input>
                </button>
                minutes
              </div>
            </div>
          </Popover.Content>
        </Popover>
      </Overlay>
    </>
  );
};

export default SettingsOverLay;
