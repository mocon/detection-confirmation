import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

import PageHeader from './components/PageHeader';
import Layout from './components/Layout';
import Card from './components/Card';

const API_BASE_URL = 'https://mycoolapi.com/v1';

class App extends Component {
    constructor() {
        super();
        this.state = {
            detectionConfirmation: null, // Can be 'yes', 'no', or 'not-sure'
            currentDetection: {
                imageUrl: 'https://i.ytimg.com/vi/GKZp1jbcg_s/maxresdefault.jpg',
                detectionGuess: 'Beach'
            }
        };
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress);
    }

    setDetectionConfirmation = (status) => {
        // Can be 'yes', 'no', or 'not-sure'
        this.setState({ detectionConfirmation: status });
    }

    loadPreviousImage = () => {
        Axios.get(`${API_BASE_URL}/previous-image`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    loadNextImage = () => {
        Axios.get(`${API_BASE_URL}/next-image`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    sendCorrectMessage = () => {
        const imageId = 12345; // Replace this with current image ID

        // Update state
        this.setDetectionConfirmation('yes');

        // Send to API
        Axios.post(`${API_BASE_URL}/confirm/${imageId}`, {
                confirmation: 'si'
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    sendIncorrectMessage = () => {
        const imageId = 12345; // Replace this with current image ID

        // Update state
        this.setDetectionConfirmation('no');

        // Send to API
        Axios.post(`${API_BASE_URL}/confirm/${imageId}`, {
                confirmation: 'no'
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    sendNotSureMessage = () => {
        const imageId = 12345; // Replace this with current image ID

        // Update state
        this.setDetectionConfirmation('not-sure');

        // Send to API
        Axios.post(`${API_BASE_URL}/confirm/${imageId}`, {
                confirmation: 'yo no se'
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleKeyPress = (event) => {
        switch (event.key) {
            case 'ArrowLeft':
                this.loadPreviousImage();
                break;
            case 'ArrowRight':
                this.loadNextImage();
                break;
            case 'y':
                this.sendCorrectMessage();
                break;
            case 'c':
                this.sendNotSureMessage();
                break;
            case 'n':
                this.sendIncorrectMessage();
                break;
            default:
        }
    }

    render() {
        const { detectionConfirmation, currentDetection } = this.state;

        let confirmationClass = '';
        switch (detectionConfirmation) {
            case 'yes':
                confirmationClass = 'Confirmed--Yes';
                break;
            case 'no':
                confirmationClass = 'Confirmed--No';
                break;
            case 'not-sure':
                confirmationClass = 'Confirmed--NotSure';
                break;
            default:
        }

        return (
            <div className="App">
                <PageHeader
                    productName="Vertex"
                    pageName="Detection Confirmation"
                />
                <Layout>
                    <Card>
                        <div className="Card__ImageHolder">
                            <h1 className="gds-text--header-lg -block -text-center -m-t-1 -m-b-2">&nbsp;</h1>
                            <img
                                className="Card__Image"
                                src={ currentDetection.imageUrl }
                                alt="Processed file"
                            />
                            <h1 className={ `gds-text--header-lg -block -text-center -m-v-3 DetectionText ${confirmationClass}` }>
                                { currentDetection.detectionGuess }
                            </h1>
                        </div>
                        <div className="gds-card__block gds-card__block--divide-top gds-flex gds-flex--justify-center">
                            {/* Previous button */}
                            <button
                                className="gds-button gds-button--outline -m-b-0 -m-r-2"
                                onClick={ () => { this.loadPreviousImage(); } }
                            >
                                <div className="gds-hotkey gds-hotkey--primary -m-r-2"><i className="fa fa-long-arrow-left" /></div>Previous
                            </button>

                            {/* Incorrect button */}
                            <button
                                className="gds-button gds-button--danger -m-b-0 -m-r-2"
                                onClick={ () => { this.sendIncorrectMessage(); } }
                            >
                                <div className="gds-hotkey gds-hotkey--white -m-r-2">N</div>No
                            </button>

                            {/* Not sure button */}
                            <button
                                className="gds-button gds-button--warning -m-b-0 -m-r-2"
                                onClick={ () => { this.sendNotSureMessage(); } }
                            >
                                <div className="gds-hotkey gds-hotkey--white -m-r-2">C</div>Can't Tell
                            </button>

                            {/* Correct button */}
                            <button
                                className="gds-button gds-button--success -m-b-0 -m-r-2"
                                onClick={ () => { this.sendCorrectMessage(); } }
                            >
                                <div className="gds-hotkey gds-hotkey--white -m-r-2">Y</div>Yes
                            </button>

                            {/* Next button */}
                            <button
                                className="gds-button gds-button--outline -m-b-0"
                                onClick={ () => { this.loadNextImage(); } }
                            >
                                <div className="gds-hotkey gds-hotkey--primary -m-r-2"><i className="fa fa-long-arrow-right" /></div>Next
                            </button>
                        </div>
                    </Card>
                </Layout>
            </div>
        );
    }
}

export default App;
