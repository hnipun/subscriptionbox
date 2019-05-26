import React from 'react';

import {
    IonTabs,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonPage,
    IonContent,
    IonSplitPane
} from '@ionic/react';
import {Route, Redirect} from 'react-router';
import BoxDisplay from "./Boxes"
import DeliveryDisplay from "./Deliveries"
import SettingsDisplay from "./Settings"
import SubscriptionsDisplay from "./Subscriptions"
import NotificationsDisplay from "./Notifications"

const AppStack: React.FC = () => (
    <IonPage>
        <Route exact path="/" render={() => <Redirect to="/home"/>}/>
        {
            /**
             * Only render exact matches.  Only destroy on back button click
             * On history.push keep previous route stored for back button
             *
             * TabBar does a push on iontabbutton click.
             * TabBar updates the tab links based on the current route path.
             */
        }

        <IonTabs>
            <IonRouterOutlet>
                <Route path="/:tab(home)" component={BoxDisplay} exact={true}/>
                <Route path="/:tab(subscriptions)" component={SubscriptionsDisplay} exact={true}/>
                <Route path="/:tab(deliveries)" component={DeliveryDisplay} exact={true}/>
                <Route path="/:tab(notifications)" component={NotificationsDisplay} exact={true}/>
                <Route path="/:tab(settings)" component={SettingsDisplay} exact={true}/>
                {/*<Route path="/:tab(fishes|branches)/fishes/:id" component={FishDetail} />*/}
                {/*<Route path="/:tab(map)" component={Background} />*/}
                {/*<Route path="/:tab(about)" component={About} />*/}
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home">
                    <IonIcon name="home"/>
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="subscriptions" href="/subscriptions">
                    <IonIcon name="briefcase"/>
                    <IonLabel>My Subscriptions</IonLabel>
                </IonTabButton>
                <IonTabButton tab="deliveries" href="/deliveries">
                    <IonIcon name="bicycle"/>
                    <IonLabel>My Deliveries</IonLabel>
                </IonTabButton>
                <IonTabButton tab="notifications" href="/notifications">
                    <IonIcon name="notifications-outline"/>
                    <IonLabel>Notifications</IonLabel>
                </IonTabButton>
                <IonTabButton tab="settings" href="/settings">
                    <IonIcon name="settings"/>
                    <IonLabel>Settings</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    </IonPage>
);

export default AppStack;