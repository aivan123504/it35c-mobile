        import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter} from '@ionic/react';

        const Login: React.FC = () => {
            const navigation = useIonRouter ();

const dologin = () => {
    navigation.push('/app', 'forward', 'replace');
}



              return (

                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Login </IonTitle>
                        </IonToolbar>
                          </IonHeader>
                          
                          
                                          <IonContent className="ion-padding">
                                            <IonButton expand="full" onClick={() => dologin()}>
                                                Login
                                            </IonButton>
                                          </IonContent>
                                </IonPage>
                              );
                            }
                
                export default Login;
                    
