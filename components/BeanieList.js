
export default function createBeanieList(root) {

    return ({ beanies }) => {
        root.innerHTML = '';

        for (const beanie of beanies) {
            const li = BeanieCard({ beanie });
            root.append(li);
        }
    };
}

function BeanieCard({ beanie }) {
    const li = document.createElement('li');
    li.classList.add('card');

    const a = document.createElement('a');
    a.href = `../detail/?id=${beanie.id}`;

    const img = document.createElement('img');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');


    p1.textContent = beanie.title;
    img.src = beanie.image;
    p2.textContent = beanie.astroSign;


    a.append(p1, img, p2);

    li.append(a);

    return li;
}