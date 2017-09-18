import React, { Component } from 'react';
import './App.css';

import PageHeader from './components/PageHeader';
import Layout from './components/Layout';
import Card from './components/Card';

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentDetection: {
                imageUrl: 'https://i.ytimg.com/vi/GKZp1jbcg_s/maxresdefault.jpg',
                detectionGuess: 'Beach'
            }
        };
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyPress);
    }

    loadPreviousImage = () => {
        console.log('loadPreviousImage');
    }

    loadNextImage = () => {
        console.log('loadNextImage');
    }

    sendCorrectMessage = () => {
        console.log('sendCorrectMessage');
    }

    sendIncorrectMessage = () => {
        console.log('sendIncorrectMessage');
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
            case 'n':
                this.sendIncorrectMessage();
                break;
            default:
        }
    }

    render() {
        const { currentDetection } = this.state;

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
                            <h1 className="gds-text--header-lg -color-tx-lt-4 -block -text-center -m-v-3">{ currentDetection.detectionGuess }</h1>
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
                                <div className="gds-hotkey gds-hotkey--white -m-r-2">N</div>Incorrect
                            </button>

                            {/* Correct button */}
                            <button
                                className="gds-button gds-button--success -m-b-0 -m-r-2"
                                onClick={ () => { this.sendCorrectMessage(); } }
                            >
                                <div className="gds-hotkey gds-hotkey--white -m-r-2">Y</div>Correct
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
