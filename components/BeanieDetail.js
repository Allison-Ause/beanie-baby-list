//include anchor tag that pulls specific link from supabase
export default function createBeanieDetail(root) {
    console.log(root);
    const img = root.querySelector('img');
    const a = root.querySelector('a');
    const intro = root.querySelector('.intro');
    const theme = root.querySelector('.theme');
    const subtheme = root.querySelector('.subtheme');
    const birthday = root.querySelector('.birthday');
    const astroSign = root.querySelector('.astro-sign');
    const releaseDate = root.querySelector('.release-date');
    const retirementDate = root.querySelector('.retirement-date');
    const swingTagGeneration = root.querySelector('.swing-tag-generation');
    const tushTagGeneration = root.querySelector('.tush-tag-generation');
    const styleNumber = root.querySelector('.style-number');

    return ({ beanie }) => {

        img.src = beanie.image;
        a.href = beanie.link;
        intro.textContent = `${beanie.title} is a ${beanie.color} ${beanie.animal} released in ${beanie.releaseYear}.`;
        theme.textContent = beanie.theme;
        subtheme.textContent = beanie.subtheme;
        birthday.textContent = beanie.birthday;
        astroSign.textContent = beanie.astroSign;
        releaseDate.textContent = beanie.releaseDate;
        retirementDate.textContent = beanie.retirementDate;
        swingTagGeneration.textContent = beanie.swingTagGeneration;
        tushTagGeneration.textContent = beanie.tushTagGeneration;
        styleNumber.textContent = beanie.styleNumber;
    };
}