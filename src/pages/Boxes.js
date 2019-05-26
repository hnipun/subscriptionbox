import React from 'react';

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
    IonCol
} from '@ionic/react';

let branches = [
    {id: 1}, {id: 2}, {id: 3},
    {id: 4}, {id: 5}, {id: 6},
    {id: 7}, {id: 8}, {id: 9},
    {id: 10}, {id: 11}, {id: 12},
    {id: 13}, {id: 14}, {id: 15},
    {id: 16}, {id: 17}, {id: 18},
];

const Box: React.FC<{}> = () => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Box Title</IonCardTitle>
                <IonCardSubtitle>Box Subtitle</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
               Box Description Comes Here
            </IonCardContent>
        </IonCard>
    );
};

const BoxDisplay: React.FC<{}> = () => (
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
                        {branches.map((branch) =>
                            <IonCol size="5" size-md="3" key={branch.id}>
                                <Box/>
                            </IonCol>
                        )}
                    </IonRow>
                </IonGrid>
            </IonList>
        </IonContent>
    </>
);
export default BoxDisplay;