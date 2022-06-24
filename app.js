import { getBeanies } from './services/select-service.js';

import createFilter from '../components/Filter.js';
import createBeanieList from '../components/BeanieList.js';
import createPaging from '../components/Paging.js';


let beanies = [];
let title = '';
let astroSign = '';
let page = 1;
const pageSize = 8;
let totalPages = 0;


async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);

    title = params.get('title') || '';
    astroSign = params.get('astrosign') || '';

    page = Number(params.get('page') || 1);

    const start = (page - 1) * pageSize;
    const end = start + pageSize - 1;

    const { data, count } = await getBeanies(title, astroSign, { start, end });
    beanies = data;
    

    totalPages = Math.ceil(count / pageSize);

    display();
}

function handleFilter(filter) {
    const params = new URLSearchParams(window.location.search);

    params.set('title', filter.title);
    params.set('astrosign', filter.astroSign);
    
    params.set('page', 1);

    window.location.search = params.toString();
}

function handlePaging(change) {
    const params = new URLSearchParams(window.location.search);

    page = Math.max(1, page + change);
    params.set('page', page);

    window.location.search = params.toString();
}

const Filter = createFilter(document.querySelector('#filter'), { handleFilter });
const Paging = createPaging(document.querySelector('#paging'), { handlePaging });
const BeanieList = createBeanieList(document.querySelector('#beanie-list'));



function display() {
    BeanieList({ beanies });
    Filter({ title, astroSign });
    Paging({ page, totalPages }); 
}

handlePageLoad();
