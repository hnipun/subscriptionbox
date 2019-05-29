import React from "react";
import {IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar} from "@ionic/react";
import BoxDisplay from "./Boxes";
import {RootState} from '../store';
import {RouteComponentProps} from 'react-router';

type Props = RouteComponentProps<{ id: string, tab: string}> & ReturnType<typeof mapStateToProps> & {
    goBack: () => void;
};

const SettingsDisplay: React.FunctionComponent<Props> = ({branches, match, goBack}) => {

    return (

        <IonHeader>
            <h1>Settings Page Comes Here </h1>
        </IonHeader>


    );
};

const mapStateToProps = (state: RootState) => ({
    branches: state.branches.branches
});

export default SettingsDisplay;