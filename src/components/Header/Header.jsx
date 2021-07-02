import React, { Component } from "react";
import { Navbar, Nav, Button, Form, Popover } from "react-bootstrap";
import transakSDK from "@transak/transak-sdk";

import ConnectToAWalletModal from "../Modals/ConnectToAWalletModal";
import logo from "../../images/flokifinal.png";
import bnbicon from "../../images/bnb-icon.png";
import Overlay from "react-bootstrap/Overlay";
import { NavLink } from "react-router-dom";
import SettingsOverLay from "./SettingsOverlay";
import "./Header.component.scss";
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      show_t: false,
      target: {},
      target_t: {},
      modalVisible: false,
    };
  }

  handleClick = (e) => {
    let tar = e.target;
    this.setState({
      show: true,
      target: tar,
    });
  };
  handleHide = () => {
    this.setState({
      show: false,
    });
  };
  handleClick_t = (e) => {
    let tar = e.target;
    this.setState({
      show_t: true,
      target_t: tar,
    });
  };
  handleHide_t = () => {
    this.setState({
      show_t: false,
    });
  };
  handleOpenModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  handleSlippageValue = () => {
    const slippageTolerance = localStorage.getItem("userSlippageTolerance");
    console.log(slippageTolerance);
    if (slippageTolerance > 0) {
      this.setState({
        slippageValue: slippageTolerance,
      });
    }
  };

  componentDidMount() {
    this.handleSlippageValue();
  }

  transakOpen = () => {
    let transak = new transakSDK({
      apiKey: "d31abb60-60d5-464a-a6ca-996bd56a41f3", // Your API Key (Required)
      environment: "STAGING", // STAGING/PRODUCTION (Required)
      defaultCryptoCurrency: "BNB",
      walletAddress: "", // Your customer wallet address
      themeColor: "000000", // App theme color in hex
      email: "", // Your customer email address (Optional)
      redirectURL: "",
      hostURL: window.location.origin, // Required field
      widgetHeight: "550px",
      widgetWidth: "450px",
    });
    transak.init();

    // To get all the events
    transak.on(transak.ALL_EVENTS, (data) => {
      console.log(data);
    });

    // This will trigger when the user closed the widget
    transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (orderData) => {
      transak.close();
    });

    // This will trigger when the user marks payment is made.
    transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
      console.log(orderData);
      transak.close();
    });
  };

  render() {
    const { show, target, show_t, target_t, modalVisible } = this.state;
    return (
      <div className="navbar">
        <Navbar collapseOnSelect expand="md" variant="dark">
          <div className="navbar-left">
            <Navbar.Brand href="#home">
              <img src={logo} alt="floki logo" />
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            <Navbar.Collapse id="responsive-navbar-nav" className="navbar-flex">
              <Nav className="navbar-center">
                <div className="navbar-center-bg">
                  <NavLink activeClassName="active" to="/swap">
                    <Nav.Link href="/swap" className="navbar-text">
                      Swap
                    </Nav.Link>
                  </NavLink>
                  {/* <NavLink activeClassName="active" onClick={this.transakOpen}> */}
                  <Nav.Link
                    className="navbar-text"
                    onClick={() => this.transakOpen()}
                  >
                    Pool
                    <img
                      src={bnbicon}
                      alt="bnb"
                      style={{ height: "26px", marginLeft: "4px" }}
                    />
                  </Nav.Link>
                  {/* </NavLink> */}
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className="navbar-form-res">
            <Form inline className="navbar-flex-form">
              <Button
                className="btn btn-black navbar-flex-form-btn"
                onClick={this.handleOpenModal}
              >
                Connect
              </Button>{" "}
              <Button
                className="btn btn-yellow mx-2"
                onClick={(e) => this.handleClick(e)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="sc-uJMKN flrdrN"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </Button>{" "}
            </Form>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>

          {/* </Navbar.Collapse> */}
        </Navbar>
        <SettingsOverLay
          show={show}
          target={target}
          handleHide={this.handleHide}
        />
        <Overlay
          show={show_t}
          onHide={this.handleHide_t}
          rootClose={show_t}
          target={target_t}
          placement="bottom"
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Title as="h3">Popover bottom</Popover.Title>
            <Popover.Content>
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Content>
          </Popover>
        </Overlay>

        <ConnectToAWalletModal
          show={modalVisible}
          onHide={() => this.setState({ modalVisible: false })}
        />
      </div>
    );
  }
}

export default Header;
