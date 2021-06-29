import React, { Component } from 'react'
import advimg from '../../images/adv-1.png'
import liquiditybgimg from '../../images/liquidity-rewards-img.png'
import liquiditybggradient from '../../images/liquidity-rewards-noise.png'
import advimg2 from '../../images/adv-2.png'
import {Link} from "react-router-dom"
import './Pool.scss'

class Pool extends Component {
    render() {
        return (
            <div className="pool-container">
                <div className="adv-img-container">
                    <img src={advimg} alt="advimg" />
                </div>
                <div className="liquidity-container">
                    <div className="liquidity-wrap">
                        <div className="liquidity-rewards-bg-gradient">
                            <div className="liquidity-rewards-bg-img" style={{ backgroundImage: `url(${liquiditybgimg})` }}></div>
                            <div className="liquidity-rewards-overlay" style={{ backgroundImage: `url(${liquiditybggradient})` }}></div>
                            <div className="liquidity-content">
                                <h3>Liquidity provider rewards</h3>
                                <p>Liquidity providers earn a 0.2% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.</p>
                            </div>
                            <div className="liquidity-rewards-bg-img" style={{ backgroundImage: `url(${liquiditybgimg})` }}></div>
                            <div className="liquidity-rewards-overlay" style={{ backgroundImage: `url(${liquiditybggradient})` }}></div>
                        </div>
                        <div className="liquidity-picker">
                            <div className="liquidity-row-1">
                                <label>Your liquidity</label>
                                <div className="btn-wrap">
                                    <Link to="/create/ETH" className="btn btn-stroke mr-2">Create a pair</Link>
                                    <Link to="/add/ETH" className="btn btn-yellow">Add Liquidity</Link>
                                </div>
                            </div>
                            <div className="liquidity-row-2">
                            Connect to a wallet to view your liquidity.
                            </div>
                            <div className="liquidity-row-3">
                            Don't see a pool you joined?&nbsp;
                            <Link to="/find" id="import-pool-link">Import it.</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="adv-img-container adv-img-2">
                    <img src={advimg2} alt="advimg2" />
                </div>
                {/* <a href="javascript:void(0)" target="_blank" className="btn btn-back-to-home">
                    <span>&nbsp;</span>
                </a> */}
            </div>
        )
    }
}
export default Pool