import React from 'react'
import {Button,Modal} from 'react-bootstrap';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import './EthSecondStep.scss'

const EthSecondStep = (props) => {
 
        return (
            <Modal
              {...props}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              className="ethsecondstep-modal"
            >
              <Modal.Header closeButton>
              <a onClick={props.secStp} href="javascript:void(0)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-kQsIoO fhNIBC"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                </a>
                <Modal.Title id="contained-modal-title-vcenter">
                Manage Lists
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ul>
                  <li className="pb-0">
                  Add a list
                  <OverlayTrigger
                  placement="right"
                  overlay={
                  <Tooltip className="custom-tooltip">
                      Token lists are an open specification for lists of ERC20 tokens. You can use any token list by entering its URL below. Beware that third party token lists can contain fake or malicious ERC20 tokens.
                  </Tooltip>
                  }
                      >
              
                      <a href="javascript:void(0)" class="question-mark">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    </a>
                  
                 </OverlayTrigger>
                  </li>
                  <li>
                  <input type="text" class="form-control" placeholder="https:// or ipfs:// or ENS name" />
                  <button className="btn" disabled>Add</button>
                  </li>
                </ul>
                <a href="javascript:void(0)" class="select-list">Browse lists</a>
              </Modal.Body>
            </Modal>
        )
}
export default EthSecondStep