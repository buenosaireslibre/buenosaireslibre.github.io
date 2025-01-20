function showModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

function hideModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
} 