import React from 'react';
import {connect} from 'react-redux';
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonTitle,
    IonMenuButton,
    IonContent,
    IonList,
    IonGrid,
    IonRow,
    IonCol,
    IonItem
} from '@ionic/react';

import {Box} from '../store/branches/types';
import {History} from 'history';
import {RouteComponentProps, withRouter} from 'react-router';
import {RootState} from '../store';


interface ItemProps {
    box: Box;
    history: History;
}


const BoxItem = ({box, history}: ItemProps) => {
    function openBranchShare(box: Box) {
    }

    function openContact(box: Box) {
    }

    function goToLink(e: MouseEvent) {
        if (!e.currentTarget) {
            return;
        }
        e.preventDefault();
        history.push((e.currentTarget as HTMLAnchorElement).href);
    }

    return (
        <IonCard>
            <IonCardHeader >
                <IonItem button
                         detail={false}
                         href={`/home/box/${box.id}`}
                         onClick={goToLink}>
                <IonCardTitle >Box Title</IonCardTitle>
                <IonCardSubtitle>Box Subtitle</IonCardSubtitle>
                </IonItem>
            </IonCardHeader>

            <IonCardContent>
                Box Description Comes Here
            </IonCardContent>
        </IonCard>
    );
};

type ListProps = RouteComponentProps & ReturnType<typeof mapStateToProps>;

const BoxDisplay = ({branches, history}: ListProps) => (
    <>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">

                </IonButtons>
                <IonTitle>Boxes Sorted By Prices</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent class="outer-content branch-list">
            <IonList>
                <IonGrid fixed>
                    <IonRow align-items-stretch>
                        {branches.map((box) =>
                            <IonCol size="5" size-md="3" key={box.id}>
                                <BoxItem
                                    box = {box}
                                    history = {history}
                                />
                            </IonCol>
                        )}
                    </IonRow>
                </IonGrid>
            </IonList>
        </IonContent>
    </>
);

const mapStateToProps = (state: RootState) => ({
    branches: state.branches.branches,
});

export default connect(
    mapStateToProps
)(BoxDisplay);