import { getBeanie } from '../services/select-service.js';
import createBeanieDetail from '../components/BeanieDetail.js';
//component creators

let beanie = {};

async function handlePageLoad() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);
    if (!id) window.location = '/';

    beanie = await getBeanie(id);
    console.log(beanie);

    if (!beanie) window.location = '/';

    display();
}

const BeanieDetail = createBeanieDetail(document.querySelector('#beanie-detail'));

function display() {

    BeanieDetail({ beanie });
}

handlePageLoad();