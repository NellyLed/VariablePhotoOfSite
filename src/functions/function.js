export function undo(mas, arr, canvas) {
    let context = canvas.getContext('2d');
    if (mas.length > 0) {
        let lastPhoto = mas.pop();
        arr.push(canvas.toDataURL());
        let image = new Image();
        image.src = lastPhoto;
        image.onload = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
    }
}

export function redo(arr, mas, canvas) {
    let context = canvas.getContext('2d');
    if (arr.length > 0) {
        let lastPhoto = arr.pop();
        mas.push(canvas.toDataURL());
        let image = new Image();
        image.src = lastPhoto;
        image.onload = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
    }
}
export function download_save(event, canvas) {
    const context = canvas.getContext('2d');
    let href = event.currentTarget;
    href.setAttribute('download', 'picture');
    let image = canvas.toDataURL('image/jpg');
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    href.setAttribute('href', image);
}

//цвет заливки
export function Casting(color, canvas) {
    let context = canvas.getContext('2d');
    context.fillStyle = color;
}
//цвет обводки
export function Stroke(color, canvas) {
    let context = canvas.getContext('2d');
    context.strokeStyle = color;
}
//ширина линии
export function width_line(width, canvas) {
    let context = canvas.getContext('2d');
    context.lineWidth = width;
}
export function Start(event, setX, setY, setPhoto, canvas) {
    let context = canvas.getContext('2d');
    context.beginPath();
    setX(event.pageX - event.target.offsetLeft);
    setY(event.pageY - event.target.offsetTop);
    setPhoto(canvas.toDataURL());
}
