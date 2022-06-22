
export default function createBeanieDetail(root) {
    console.log(root);
    const img = root.querySelector('img');
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
        intro.innerHTML = `<a href=${beanie.link}>${beanie.title}</a> is a ${beanie.color} colored ${beanie.animal} animal released in ${beanie.releaseYear}.`;
        theme.textContent = `Theme: ${beanie.theme}`;
        subtheme.textContent = `Subtheme: ${beanie.subtheme}`;
        birthday.textContent = `Birthday: ${beanie.birthday}`;
        astroSign.textContent = `Zodiac Sign: ${beanie.astroSign}`;
        releaseDate.textContent = `Release Date: ${beanie.releaseDate}`;
        retirementDate.textContent = `Retirement Date: ${beanie.retirementDate}`;
        swingTagGeneration.textContent = `Swing Tag: ${beanie.swingTagGeneration}`;
        tushTagGeneration.textContent = `Tush Tag: ${beanie.tushTagGeneration}`;
        styleNumber.textContent = `Style Number: ${beanie.styleNumber}`;
    };
}
