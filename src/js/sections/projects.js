import Swiper from 'swiper';
import { Pagination, Grid } from 'swiper/modules';

const swiper = new Swiper('.projects-slider', {
  modules: [
    Grid,
    Pagination,
  ],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  observer: true,
  observeParents: true,
  longSwipesRatio: 0.01,
  resistanceRatio: 0,
  breakpoints: {
    0: {
      grid: {
        fill: 'row',
        rows: 2,
      },
      spaceBetween: 10,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    481: {
      grid: {
        fill: 'row',
        rows: 2,
      },
      spaceBetween: 10,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    769: {
      grid: {
        fill: 'row',
        rows: 2,
      },
      spaceBetween: 15,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1000: {
      grid: {
        fill: 'row',
        rows: 2,
      },
      spaceBetween: 20,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

swiper;
