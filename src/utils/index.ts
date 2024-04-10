import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Swift from '../assets/svgs/techstacks/swift.svg';
import Kotlin from '../assets/svgs/techstacks/kotlin.svg';
import ReactNative from '../assets/svgs/techstacks/react.svg';
import Java from '../assets/svgs/techstacks/java.svg';
import JavaScript from '../assets/svgs/techstacks/javascript.svg';
import NodeJs from '../assets/svgs/techstacks/nodejs.svg';
import HTML from '../assets/svgs/techstacks/html.svg';
import Redis from '../assets/svgs/techstacks/redis.svg';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const webTechList = [
  {
    id: 1,
    icon: JavaScript,
    name: 'JavaScript',
  },
  {
    id: 2,
    icon: NodeJs,
    name: 'NodeJs',
  },
  {
    id: 3,
    icon: HTML,
    name: 'HTML',
  },
  {
    id: 4,
    icon: Redis,
    name: 'Redis',
  },
];

export const appTechList = [
  {
    id: 1,
    icon: Swift,
    name: 'Swift',
  },
  {
    id: 2,
    icon: Kotlin,
    name: 'Kotlin',
  },
  {
    id: 3,
    icon: ReactNative,
    name: 'React Native',
  },
  {
    id: 4,
    icon: Java,
    name: 'Java',
  },
];
