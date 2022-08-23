import React, { Component } from 'react'
import './style.css'

export default class GlassesTryOn extends Component {
    state = {
        virtualImg: './img/glassesImage/v1.png'
    }
    onChangeGlass = (VirGlass) => {
        const newState = {
            virtualImg: `./img/glassesImage/v${VirGlass}.png`
        }
        this.setState(newState)
    }

    render() {
        return (
            <div className='home'>
                <div className='overlay'></div>
                <header className='header mb-3'>
                    <h4 className='fw-300 fs-20 text-white text-center pt-4 pb-4'>TRY GLASSES APP ONLINE</h4>
                </header>
                <div className='container'>
                    <div className='model d-flex justify-content-center mb-3'>
                        <img className='imgModel' src="./img/glassesImage/model.jpg" alt='model' />
                        <img className='virtualGlass' src={this.state.virtualImg} alt='vg' />
                        <div className='glassInfo'></div>
                    </div>
                    <div className='glassesList'>
                        <div className='row'>
                            <div className='col-2' onClick={() => { this.onChangeGlass('1') }}>
                                <img className='img-fluid' src='./img/glassesImage/g1.jpg' alt='g1' />
                            </div>
                            <div className='col-2' onClick={() => { this.onChangeGlass('2') }}>
                                <img className='img-fluid' src='./img/glassesImage/g2.jpg' alt='g2' />
                            </div>
                            <div className='col-2' onClick={() => { this.onChangeGlass('3') }}>
                                <img className='img-fluid' src='./img/glassesImage/g3.jpg' alt='g3' />
                            </div>
                            <div className='col-2' onClick={() => { this.onChangeGlass('4') }}>
                                <img className='img-fluid' src='./img/glassesImage/g4.jpg' alt='g4' />
                            </div>
                            <div className='col-2' onClick={() => { this.onChangeGlass('5') }}>
                                <img className='img-fluid' src='./img/glassesImage/g5.jpg' alt='g5' />
                            </div>
                            <div className='col-2' onClick={() => { this.onChangeGlass('6') }}>
                                <img className='img-fluid' src='./img/glassesImage/g6.jpg' alt='g6' />
                            </div>
                            <div className='col-2' onClick={() => { this.onChangeGlass('7') }}>
                                <img className='img-fluid' src='./img/glassesImage/g7.jpg' alt='g7' />
                            </div>
                            <div className='col-2' onClick={() => { this.onChangeGlass('8') }}>
                                <img className='img-fluid' src='./img/glassesImage/g8.jpg' alt='g8' />
                            </div>
                            <div className='col-2' onClick={() => { this.onChangeGlass('9') }}>
                                <img className='img-fluid' src='./img/glassesImage/g9.jpg' alt='g9' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
