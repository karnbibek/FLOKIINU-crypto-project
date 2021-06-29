import React from 'react'
import { Navbar,Nav,Button,NavDropdown,Form,Overlay} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
function Tooltip() {
    return (
        <React.Fragment>
        {['top', 'right', 'bottom', 'left'].map((placement) => (
          <OverlayTrigger
            key={placement}
            placement={placement}
            overlay={
              <Tooltip id={`tooltip-${placement}`}>
                Tooltip on <strong>{placement}</strong>.
              </Tooltip>
            }
          >
            <Button variant="secondary">Tooltip on {placement}</Button>
          </OverlayTrigger>
        ))}
        </React.Fragment>
    )
}
export default Tooltip