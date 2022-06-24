import { getBeanie } from '../services/select-service.js';

import createBeanieDetail from '../components/BeanieDetail.js';
import createBeanieName from '../components/BeanieName.js';
//component creators

let beanie = {};

async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (!id) window.location = '/';

    beanie = await getBeanie(id);

    if (!beanie) window.location = '/';

    display();
}

const BeanieDetail = createBeanieDetail(document.querySelector('#beanie-detail'));
const BeanieName = createBeanieName(document.querySelector('.title'));

function display() {
    BeanieDetail({ beanie });
    BeanieName({ name : beanie.title, link: beanie.link }); 
}

handlePageLoad();