import { IonButton, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
       <IonButton id="openModal">Open Modal</IonButton>
              <IonModal trigger="openModal" id="modalElement">
      
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>Modal</IonTitle>
                    <IonButtons slot="end">
                      <IonButton onClick={() => { const modal = document.getElementById('modalElement') as any; if (modal) { modal.dismiss(); } }}>Close</IonButton>
                    </IonButtons>
                  </IonToolbar>
                  <h1>opennnnn</h1>
                </IonHeader>
      </IonModal>
      
    </div>
  );
};

export default ExploreContainer;