
export default function createPaging(root, { handlePaging }) {
    
    const [previous, next] = root.querySelectorAll('.page-button');
    const pageInfo = root.querySelector('#page-info');

    previous.addEventListener('click', () => {
        handlePaging(-1);
    });

    next.addEventListener('click', () => {
        handlePaging(1);
    });

    return ({ page, totalPages }) => {
        previous.disabled = page === 1;
        next.disabled = page === totalPages;
        
        pageInfo.textContent = `Page ${page} of ${totalPages}`;
    };
}