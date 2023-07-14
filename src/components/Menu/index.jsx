import React from 'react';
import {
  IonFooter,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonMenuToggle,
  IonIcon,
} from '@ionic/react';
import { ChevronForwardCircle } from 'react-ionicons';
import { useLocation } from 'react-router-dom';
import { logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';
import './index.css';

const Menu = ({ appPages }) => {
  const location = useLocation();

  const handleMenuClose = () => {
    const menu = document.querySelector('ion-menu');
    menu.toggle();
  };
  const handleSignOut = () => {
    alert('you are sign out');
  };

  return (
    <>
      {/* Closed Menu */}
      <IonHeader no-shadow>
        <IonToolbar color="primary-contrast" className="border-0" no-border>
          <IonButtons slot="start" className="">
            <IonButton
              onClick={handleSignOut}
              shape="round"
              fill="solid"
              color="danger"
              className="bg-danger rounded-2xl"
            >
              <div className="p-2 font-bold text-white">Sign Out</div>
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      {/* Open Menu */}
      <IonMenu contentId="main" type="overlay" side="start" className="w-full">
        <IonContent className="w-full">
          <IonToolbar
            color="primary-contrast"
            className="ion-align-items-end border-0"
          >
            <IonButtons slot="end" className="m-10">
              <IonButton onClick={handleMenuClose} className="text-2xl">
                <ChevronForwardCircle
                  color={'#00000'}
                  title={'che'}
                  className="p-1"
                />
                Close
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonList id="inbox-list" className=" flex flex-col justify-around">
            {appPages.map((appPage, index) =>
              appPage && appPage.url == '/instructions' ? (
                ''
              ) : (
                <IonMenuToggle
                  key={index}
                  autoHide={false}
                  className=" flex  flex-col justify-start items-start"
                >
                  <IonItem
                    className={`${
                      location.pathname === appPage.url ? 'selected' : ''
                    } mx-12 `}
                    routerLink={appPage.url}
                    routerDirection="none"
                    lines="none"
                    detail={false}
                  >
                    <IonLabel
                      className={`${
                        location.pathname === appPage.url ? 'active-link' : ''
                      } flex items-center justify-center i-label text-2xl`}
                    >
                      {appPage.title}
                    </IonLabel>
                  </IonItem>
                </IonMenuToggle>
              ),
            )}
          </IonList>
          <IonIcon slot="start" icon={logoTwitter} />
        </IonContent>
        <IonFooter className="flex item-center justify-around p-3">
          <a rel="facebook" href="https://facebook.com">
            <IonIcon
              slot="start"
              icon={logoFacebook}
              size="large"
              color="tertiary"
            />
          </a>
          <a rel="twitter" href="https://twitter.com">
            <IonIcon
              slot="start"
              icon={logoTwitter}
              size="large"
              color="tertiary"
            />
          </a>
          <a rel="instagram" href="https://instagram.com">
            <IonIcon
              slot="start"
              icon={logoInstagram}
              size="large"
              color="tertiary"
            />
          </a>
        </IonFooter>
      </IonMenu>
    </>
  );
};

export default Menu;
