import { FaChevronRight } from "react-icons/fa";
export const categoryThemes = [
  {
    id: 1,
    icon: FaChevronRight,
    name: "Tashkilot haqida",
  },
  {
    id: 2,
    icon: FaChevronRight,
    name: "Hujjatlar",
  },
  {
    id: 3,
    icon: FaChevronRight,
    name: "Rahbariyat",
  },
  
];

export const categoryThemesInside = [
  {
    id: 1,
    name: "Tashkilot haqida",
    listCategoryNames: [
      {
        id: 1,
        subname: "Biz haqimizda",
        link: '/Aboutus'
      },
      {
        id: 2,
        subname: "Bosh ish o’rinlari",
        link:'/Vacancies'
      },
      {
        id: 3,
        subname: "Xududiy boshqarmalar",
        link:'/Administrations'
      },
      {
        id: 4,
        subname: "Vazirlik vazifalari va funksialari",
        link:'/Ministries'
      },
      {
        id: 5,
        subname: "Raxbariyat",
        link:'/LeaderShip'
      },
     
    ],
  },
  {
    id: 2,
    name: "Hujjatlar",
    listCategoryNames: [
      {
        id: 1,
        subname: "Biz haqimizda",
        link: '/Aboutus'
      },
      {
        id: 2,
        subname: "Bosh ish o’rinlari",
        link:'/Vacancies'
      },
      {
        id: 3,
        subname: "Xududiy boshqarmalar",
        link:'/Administrations'
      },
      {
        id: 4,
        subname: "Tarkiyib tuzilma",
        link:'/Structure'
      },
      
    ],
  },
  {
    id: 3,
    name: "Rahbariyat",
    listCategoryNames: [
      {
        id: 1,
        subname: "Biz haqimizda",
        link: '/Aboutus'
      },
      {
        id: 2,
        subname: "Bosh ish o’rinlari",
        link:'/Vacancies'
      },
      {
        id: 3,
        subname: "Xududiy boshqarmalar",
        link:'/Administrations'
      },
      {
        id: 4,
        subname: "Vazirlik vazifalari va funksialari",
        link:'/Ministries'
      },
    ],
  },
];
