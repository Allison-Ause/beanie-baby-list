

export default function createBeanieName(root) {
    
    const h1 = root.querySelector('h1');

    return ({ name, link }) => {
        h1.textContent = name;
        root.href = link;
    };
}