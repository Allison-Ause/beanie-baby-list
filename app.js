import { getBeanies } from './services/select-service.js';

import createBeanieList from '../components/BeanieList.js';


let beanies = [];


async function handlePageLoad() {
    beanies = await getBeanies();
    display();
}

const BeanieList = createBeanieList(document.querySelector('#beanie-list'));


function display() {
    BeanieList({ beanies });
}

handlePageLoad();
