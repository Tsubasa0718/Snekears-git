import Swiper from 'swiper/bundle';
import 'swiper/css';
export const initializeSwiper = () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10, // 写真間の余白
        loop: true, // ループを有効にする
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            768: { // 769px未満の場合に適用される設定
                slidesPerView: 3,
                spaceBetween: 30, // 写真間の余白
            },
        },
    });
};
