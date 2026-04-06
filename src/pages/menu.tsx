import { IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react";
import { Redirect, Route } from "react-router";
import Home from './Home';
import { homeOutline } from 'ionicons/icons';



function Menu() {
    return (

        <IonPage>
            <IonSplitPane contentId="main">
                <IonMenu contentId="main">
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>



                    <IonContent>
                        {/* Side Items */}
                        {path.map((item, index) => (
                            <IonMenuToggle key={index} />
                            ,
                            <IonItem RouterLink={item.url} routerDirection="forward">
                                <IonIcon icon={item, icon} slot="start"></IonIcon>
                                {item.name}
                            </IonItem>))}
                    </IonMenuToggle>
                    ))}

                </IonContent>


            </IonMenu>

            <IonRouterOutlet id="main" />
            <Route exact path="/app/Home" component={Home} />
            <Route exact path="/app">
                <Redirect to="/app/Home" />

                <Route></Route>

            </Route>
        </IonSplitPane>);
}
            </IonPage>
    );
};
export default Menu;