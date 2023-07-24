import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IonApp, IonContent, IonPage, IonButton } from '@ionic/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Instructions.css';
import monkey from '../assets/monkey.svg';
import { Pagination, Navigation } from 'swiper/modules';

const instructionsData = [
  { id: 1, text: 'Welcome to Primate' },
  { id: 2, text: 'Promoting ethical primate tourism' },
  { id: 3, text: 'Helping you and primates stay safe' },
  { id: 4, text: "Let's get exploring" },
];

const Instructions = ({ onDismiss }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (activeSlide < 3) {
      swiperRef.current.swiper.slideNext();
    } else {
      onDismiss();
    }
  };

  const handleBack = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <IonApp className="overflow-hidden background">
      <IonContent>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper instructions"
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          ref={swiperRef}
        >
          {instructionsData.map((item) =>
            activeSlide === 2 ? (
              <SwiperSlide
                key={item.id}
                className="flex flex-col no-bg text-white font-bold text-5xl text-center p-12"
              >
                {item.text}
                <IonButton shape="round" className="mt-6" color="dark">
                  See illustrated guidelines
                  <svg
                    className="px-1"
                    width="27"
                    height="28"
                    viewBox="0 0 27 28"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.33792 3.34675C4.22047 3.59463 2.99014 4.61321 2.45745 5.73152C2.21326 6.24412 2.09558 6.69265 2.01933 7.4015C1.8827 8.67071 1.97961 18.5233 2.13605 19.2676C2.19963 19.5703 2.44531 20.2247 2.68194 20.722C3.38832 22.2067 4.68234 23.3801 6.25442 23.9617C6.77518 24.1543 7.28827 24.2139 9.17578 24.3008C11.4209 24.4042 19.6401 24.3324 20.3409 24.2033C21.0981 24.0637 21.3748 22.8322 20.7986 22.1657C20.5059 21.8271 20.4561 21.8115 19.5207 21.7653L18.5473 21.7172V19.6944C18.5473 18.5203 18.5889 17.6716 18.6464 17.6716C18.7009 17.6716 19.3892 18.3279 20.176 19.13C21.7956 20.7812 22.165 21.4007 22.3873 22.8394C22.5319 23.7749 22.8793 24.2664 23.4113 24.288C24.6499 24.338 25.0088 23.8922 24.909 22.4271C24.8383 21.3895 24.3594 19.9737 23.8243 19.2202C23.6158 18.9268 22.6279 17.8638 21.6288 16.8583L19.8123 15.0299H18.6972C16.9512 15.0299 16.0776 14.6651 14.8036 13.404L14.0949 12.7027L13.2673 13.0452C11.1081 13.9388 9.43627 15.7233 8.77046 17.8448C8.56131 18.5114 8.34129 19.9842 8.29496 21.0287L8.27058 21.579L7.79135 21.5731C6.75026 21.5602 5.43675 20.6034 4.86818 19.4437L4.59427 18.8852L4.56882 13.0776C4.54006 6.53283 4.5046 6.83904 5.35731 6.25578C5.68371 6.03256 5.95634 5.94825 6.446 5.91941C7.2478 5.87208 7.74087 6.11446 8.03522 6.70058C8.45599 7.53854 7.98783 8.45102 6.95526 8.80555C6.08914 9.10285 5.67679 9.78143 5.88616 10.5652C6.28754 12.0676 8.89613 11.4643 10.0817 9.59486C11.1009 7.98773 10.9327 6.01869 9.65426 4.59153C8.80934 3.64823 8.13927 3.34642 6.78764 3.29997C6.19755 3.27972 5.54516 3.30085 5.33792 3.34675ZM17.5889 3.34862C16.7231 3.54686 15.4408 4.53881 14.9161 5.41617C14.7482 5.69696 14.567 5.82189 14.1428 5.94935C12.6713 6.3915 11.8615 8.06401 12.4239 9.49976C12.6716 10.1321 13.5055 10.8939 14.1273 11.0557C14.6304 11.1867 14.7022 11.2494 15.2422 12.0293C15.9806 13.0961 17.2512 13.7424 18.6006 13.7378C19.8493 13.7334 20.5343 13.4339 21.4195 12.5053C21.8019 12.1041 22.2006 11.6416 22.3055 11.4776C22.4103 11.3136 22.626 11.1522 22.7848 11.1189C24.3259 10.7955 25.3502 9.00048 24.7876 7.60876C24.4554 6.78709 23.3936 5.90334 22.7306 5.89652C22.5627 5.89476 22.3893 5.7247 22.1328 5.31029C21.6989 4.60925 21.0381 4.00387 20.2985 3.62985C19.7058 3.33013 18.3047 3.18473 17.5889 3.34862ZM20.6804 6.14175C21.2605 6.44466 21.5935 6.938 21.6857 7.63122C21.8001 8.49064 21.4032 9.19212 20.5441 9.64879C20.2432 9.80873 20.1448 9.92914 20.1448 10.1375C20.1448 10.54 19.8949 11.0821 19.5641 11.3976C19.3195 11.6309 19.1728 11.6728 18.599 11.6728C17.9937 11.6728 17.8865 11.638 17.5828 11.3425C17.2062 10.9765 16.9499 10.4464 16.9499 10.0338C16.9499 9.82513 16.869 9.73597 16.5947 9.64241C15.3852 9.22987 15.0474 7.40557 16.0087 6.47791C16.5138 5.99041 16.9056 5.90301 18.6046 5.89839C20.0586 5.89454 20.2498 5.91688 20.6804 6.14175ZM16.9042 7.38785C16.6919 7.60744 16.6877 8.13644 16.897 8.31596C17.1317 8.51728 17.6042 8.48327 17.7669 8.25333C18.0801 7.81063 17.8253 7.21493 17.3226 7.21493C17.1846 7.21493 16.9963 7.29275 16.9042 7.38785ZM19.4601 7.38785C19.2477 7.60744 19.2436 8.13644 19.4529 8.31596C19.6876 8.51728 20.1601 8.48327 20.3228 8.25333C20.636 7.81063 20.3812 7.21493 19.8785 7.21493C19.7405 7.21493 19.5522 7.29275 19.4601 7.38785Z"
                      fill="white"
                    />
                  </svg>
                </IonButton>
              </SwiperSlide>
            ) : (
              <SwiperSlide
                key={item.id}
                className="no-bg text-white font-bold text-5xl text-center p-12"
              >
                {item.text}
              </SwiperSlide>
            ),
          )}
          <div className="flex items-center justify-between w-full">
            <IonButton
              className={`${activeSlide <= 0 ? 'opacity-0' : 'font-bold m-3'}`}
              fill="clear"
              onClick={handleBack}
              color="secondary"
              size="large"
            >
              Back
            </IonButton>
            <IonButton
              onClick={handleNext}
              color="secondary"
              size="large"
              className="font-bold m-3"
            >
              {activeSlide < 3 ? 'Next' : 'Explore'}
            </IonButton>
          </div>
        </Swiper>
      </IonContent>
    </IonApp>
  );
};

export default Instructions;
