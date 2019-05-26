import {
    IonApp,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React, {Component} from 'react';
import BoxDisplay from "./pages/BranchList"

class App extends Component {
    state = {
        chomps: 0,
    };
    unchomp = () => {
        if (this.state.chomps > 0) {
            this.setState({
                chomps: this.state.chomps -= 1,
            });
        }
    };
    chomp = () => {
        this.setState({
            chomps: this.state.chomps += 1,
        });
    };

    render() {
        return (
            <IonApp>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Subscription Boxes</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <BoxDisplay></BoxDisplay>
                </IonContent>
            </IonApp>
        );
    }
}

export default App;