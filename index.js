const shapes = document.querySelectorAll('.shape');
const segments = document.querySelectorAll('.segment');
shapes.forEach(shape =>{
    shape.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

segments.forEach(segment => {

    segment.addEventListener('dragover', (e) => {
        e.preventDefault(); 
    });
    segment.addEventListener('drop', (e) => {
        e.preventDefault();                 

        const draggedId = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedId);
        const dropZone = e.target.closest('.segment');
        
        if (dropZone && draggedElement) {

            dropZone.appendChild(draggedElement);
            const newShape = dropZone.getAttribute('shape-type');
            draggedElement.className = `shape ${newShape}`;
        }
    });
});