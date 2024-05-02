import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import Android from '../assets/images/techstack/android.svg';
import Postgres from '../assets/images/techstack/postgresql.svg';
import MongoDB from '../assets/images/techstack/mongodb.svg';
import MySql from '../assets/images/techstack/mysql.svg';
import Java from '../assets/images/techstack/java.svg';
import NodeJS from '../assets/images/techstack/nodejs.svg';
import Python from '../assets/images/techstack/python.svg';
import PHP from '../assets/images/techstack/php.svg';
import JQuery from '../assets/images/techstack/jquery.svg';
import JavaScript from '../assets/images/techstack/javascript.svg';

import HTML from '../assets/images/techstack/html.svg';
import CSS from '../assets/images/techstack/css.svg';
import TailwindCSS from '../assets/images/techstack/tailwind-css.svg';
import SpringBoot from '../assets/images/techstack/spring-boot.svg';
import Flutter from '../assets/images/techstack/flutter.svg';
import ReactNative from '../assets/images/techstack/react.svg';
import AngularJS from '../assets/images/techstack/angularjs.svg';
import VueJS from '../assets/images/techstack/vue-dot-js.svg';
import BootStrap from '../assets/images/techstack/bootstrap.svg';
import Django from '../assets/images/techstack/django.svg';
import Laravel from '../assets/images/techstack/laravel.svg';

export const TechList1 = [
  {
    id: 1,
    icon: Android,
    name: 'Android',
  },
  {
    id: 2,
    icon: Postgres,
    name: 'Postgres',
  },
  {
    id: 3,
    icon: MongoDB,
    name: 'mongoDB',
  },
  {
    id: 4,
    icon: MySql,
    name: 'MySql',
  },
  {
    id: 5,
    icon: Java,
    name: 'Java',
  },
  {
    id: 6,
    icon: NodeJS,
    name: 'NodeJS',
  },
  {
    id: 7,
    icon: Python,
    name: 'Python',
  },
  {
    id: 8,
    icon: PHP,
    name: 'PHP',
  },
  {
    id: 9,
    icon: JQuery,
    name: 'JQuery',
  },
  {
    id: 10,
    icon: JavaScript,
    name: 'JavaScript',
  },
];

export const TechList2 = [
  {
    id: 1,
    icon: HTML,
    name: 'HTML',
  },
  {
    id: 2,
    icon: CSS,
    name: 'CSS',
  },
  {
    id: 3,
    icon: TailwindCSS,
    name: 'TailwindCSS',
  },
  {
    id: 4,
    icon: SpringBoot,
    name: 'SpringBoot',
  },
  {
    id: 5,
    icon: Flutter,
    name: 'Flutter',
  },
  {
    id: 6,
    icon: ReactNative,
    name: 'React Native',
  },
  {
    id: 7,
    icon: AngularJS,
    name: 'Angular Js',
  },
  {
    id: 8,
    icon: VueJS,
    name: 'Vue Js',
  },
  {
    id: 9,
    icon: BootStrap,
    name: 'Bootstrap',
  },
  {
    id: 10,
    icon: Django,
    name: 'DJango',
  },
  {
    id: 11,
    icon: Laravel,
    name: 'Laravel',
  },
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
