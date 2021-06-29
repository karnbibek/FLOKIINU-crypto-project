import React from 'react'
import {Button,Modal} from 'react-bootstrap';
import './ConnectToaWalletModal.scss'
import matamask from '../../images/metamask.png'
import walletConnectIcon from '../../images/walletConnectIcon.svg'
import coinbaseWalletIcon from '../../images/coinbaseWalletIcon.svg'
import fortmatic from '../../images/fortmatic.png'
import portisIcon from '../../images/portisIcon.png'

const ConnectToAWalletModal = (props) => {
    return (
              <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="connectwallet-modal"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                  Connect to a wallet
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <span>
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
                  <p>New to Ethereum?&nbsp;&nbsp;
                  <a target="_blank" rel="noreferrer" href="https://docs.pancakeswap.finance/help/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain">Learn more about wallets</a>
                  </p>
                </Modal.Body>
              </Modal>
            );
          }

 export default ConnectToAWalletModal