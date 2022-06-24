import { getBeanies } from './services/select-service.js';

import createFilter from '../components/Filter.js';
import createBeanieList from '../components/BeanieList.js';


let beanies = [];
let title = '';
let astroSign = '';


async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);

    title = params.get('title') || '';
    astroSign = params.get('astrosign') || '';

    beanies = await getBeanies(title, astroSign);
    display();
}

function handleFilter(filter) {
    const params = new URLSearchParams(window.location.search);

    params.set('title', filter.title);
    params.set('astrosign', filter.astroSign);

    window.location.search = params.toString();
}

const Filter = createFilter(document.querySelector('#filter'), { handleFilter });
const BeanieList = createBeanieList(document.querySelector('#beanie-list'));


function display() {
    BeanieList({ beanies });
    Filter({ title, astroSign });
}

handlePageLoad();
