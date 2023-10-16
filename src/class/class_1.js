//карандаш -1
export class Pencil {
    constructor(canRef) {
        this.canvas = canRef;
        this.context = this.canvas.getContext('2d');
        this.onMouseDown_function = this.onMouseDown_function.bind(this);
        this.onMouseMove_function = this.onMouseMove_function.bind(this);
    }
    //нажата кнопка мыши
    onMouseDown_function(event) {
        this.context.beginPath();
        //начало координат для рисования
        let x = event.pageX - event.target.offsetLeft;
        let y = event.pageY - event.target.offsetTop;
        this.context.moveTo(x, y);
    }
    //если двигаем мышкой
    onMouseMove_function(event) {
        let X = event.pageX - event.target.offsetLeft;
        let Y = event.pageY - event.target.offsetTop;
        this.move(X, Y);
    }
    move(X, Y) {
        this.context.lineTo(X, Y);
        this.context.lineWidth = 0.8;
        this.context.stroke();
    }
}
//кисть
export class Brush extends Pencil {
    constructor(canRef) {
        super(canRef);
    }
    move(X, Y) {
        this.context.lineTo(X, Y);
        this.context.lineWidth = 1.8;
        this.context.stroke();
    }
}
//линия
export class Line {
    constructor(canRef, x, y, save_photo) {
        this.canvas = canRef;
        this.context = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.save_photo = save_photo;
        this.onMouseMove_function = this.onMouseMove_function.bind(this);
    }
    //если двигаем мышкой
    onMouseMove_function(event) {
        let X = event.pageX - event.target.offsetLeft;
        let Y = event.pageY - event.target.offsetTop;
        const image = new Image();
        image.src = this.save_photo;
        //слушатель события onLoad работает тогда, когда изображение установилось,это не мгновенно=>ф-ия асинхронная
        image.onload = () => {
            //полностью очищаем канвас от тех фигур, которые нарисовали,чтобы выидеть только тек объект
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            //но поскольку очищаем весь канвас надо вернуть старые рисунки=>
            this.context.drawImage(
                image,
                0,
                0,
                this.canvas.width,
                this.canvas.height
            );
            this.context.beginPath();

            this.context.moveTo(this.x, this.y);
            this.context.lineTo(X, Y);

            this.context.stroke();
        };
    }
}
//ластик
export class Eraser {
    constructor(canRef) {
        this.canvas = canRef;
        this.context = this.canvas.getContext('2d');
        this.onMouseDown_function = this.onMouseDown_function.bind(this);
        this.onMouseMove_function = this.onMouseMove_function.bind(this);
    }
    //нажата кнопка мыши
    onMouseDown_function(event) {
        this.context.beginPath();
        //начало координат для рисования
        let x = event.pageX - event.target.offsetLeft;
        let y = event.pageY - event.target.offsetTop;
    }
    //если двигаем мышкой
    onMouseMove_function(event) {
        let X = event.pageX - event.target.offsetLeft;
        let Y = event.pageY - event.target.offsetTop;
        this.context.fillStyle = 'white';
        this.context.fillRect(X, Y, 25, 25);
    }
}
export class Curve {
    constructor(canRef, x, y, save_photo) {
        this.canvas = canRef;
        this.context = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.save_photo = save_photo;
        this.onMouseMove_function = this.onMouseMove_function.bind(this);
    }

    //если двигаем мышкой
    onMouseMove_function(event) {
        let X = event.pageX - event.target.offsetLeft;
        let Y = event.pageY - event.target.offsetTop;

        const image = new Image();
        image.src = this.save_photo;
        //слушатель события onLoad работает тогда, когда изображение установилось,это не мгновенно=>ф-ия асинхронная
        image.onload = () => {
            //полностью очищаем канвас от тех фигур, которые нарисовали,чтобы выидеть только тек объект
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            //но поскольку очищаем весь канвас надо вернуть старые рисунки=>
            this.context.drawImage(
                image,
                0,
                0,
                this.canvas.width,
                this.canvas.height
            );
            this.context.beginPath();
            this.context.moveTo(this.x, this.y);
            this.context.quadraticCurveTo(this.x, X, Y, this.y);

            this.context.stroke();
        };
    }
}
//прямоугольник
export class Rect {
    constructor(canRef, x, y, save_photo) {
        this.canvas = canRef;
        this.context = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.save_photo = save_photo;
        this.onMouseMove_function = this.onMouseMove_function.bind(this);
    }
    //если двигаем мышкой
    onMouseMove_function(event) {
        this.context.beginPath();
        let X = event.pageX - event.target.offsetLeft;
        let Y = event.pageY - event.target.offsetTop;
        let width = X - this.x;
        let height = Y - this.y;

        const image = new Image();
        image.src = this.save_photo;
        //слушатель события onLoad работает тогда, когда изображение установилось,это не мгновенно=>ф-ия асинхронная
        image.onload = () => {
            //полностью очищаем канвас от тех фигур, которые нарисовали,чтобы выидеть только тек объект
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            //но поскольку очищаем весь канвас надо вернуть старые рисунки=>
            this.context.drawImage(
                image,
                0,
                0,
                this.canvas.width,
                this.canvas.height
            );
            this.context.beginPath();
            this.context.rect(this.x, this.y, width, height);
            this.context.fill();
            this.context.stroke();
        };
    }
}
//круг
export class Circle {
    constructor(canRef, x, y, save_photo) {
        this.canvas = canRef;
        this.context = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.save_photo = save_photo;
        this.onMouseMove_function = this.onMouseMove_function.bind(this);
    }
    //если двигаем мышкой
    onMouseMove_function(event) {
        this.context.beginPath();
        let X = event.pageX - event.target.offsetLeft;
        let Y = event.pageY - event.target.offsetTop;
        let width = X - this.x;
        let height = Y - this.y;
        let radius = Math.sqrt(width * width + height * height);

        const image = new Image();
        image.src = this.save_photo;
        //слушатель события onLoad работает тогда, когда изображение установилось,это не мгновенно=>ф-ия асинхронная
        image.onload = () => {
            //полностью очищаем канвас от тех фигур, которые нарисовали,чтобы выидеть только тек объект
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            //но поскольку очищаем весь канвас надо вернуть старые рисунки=>
            this.context.drawImage(
                image,
                0,
                0,
                this.canvas.width,
                this.canvas.height
            );
            this.context.beginPath();
            this.context.arc(this.x, this.y, radius, 0, 2 * Math.PI);
            this.context.fill();
            this.context.stroke();
        };
    }
}
//переделать
export class Triangle {
    constructor(canRef, x, y, save_photo) {
        this.canvas = canRef;
        this.context = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.save_photo = save_photo;
        this.onMouseMove_function = this.onMouseMove_function.bind(this);
    }
    //если двигаем мышкой
    onMouseMove_function(event) {
        //    this.context.beginPath();
        let X = event.pageX - event.target.offsetLeft;
        let Y = event.pageY - event.target.offsetTop;

        const image = new Image();
        image.src = this.save_photo;
        //слушатель события onLoad работает тогда, когда изображение установилось,это не мгновенно=>ф-ия асинхронная
        image.onload = () => {
            //полностью очищаем канвас от тех фигур, которые нарисовали,чтобы выидеть только тек объект
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            //но поскольку очищаем весь канвас надо вернуть старые рисунки=>
            this.context.drawImage(
                image,
                0,
                0,
                this.canvas.width,
                this.canvas.height
            );
            this.context.beginPath();
            this.context.moveTo(this.x, this.y);
            let length = Math.sqrt((X - this.x) ** 2 + (Y - this.y) ** 2);
            var height = (Math.sqrt(3) / 2) * length;
            /*
            this.context.lineTo(X, Y);
            this.context.lineTo(X + length / 2, Y + height);
            this.context.lineTo(this.x, this.y);*/

            this.context.lineTo(this.x + length / 2, this.y + height); // Промежуточная точка 1
            this.context.lineTo(this.x - length / 2, this.y + height);
            this.context.lineTo(this.x, this.y);
            this.context.fill();
            this.context.stroke();
        };
    }
}
export class Poligon {
    constructor(canRef, x, y, save_photo) {
        this.canvas = canRef;
        this.context = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.save_photo = save_photo;
        this.onMouseMove_function = this.onMouseMove_function.bind(this);
    }
    //если двигаем мышкой
    onMouseMove_function(event) {
        let X = event.pageX - event.target.offsetLeft;
        let Y = event.pageY - event.target.offsetTop;
        this.context.moveTo(
            this.x + this.x * Math.cos(0),
            this.y + this.y * Math.sin(0)
        );
        const image = new Image();
        image.src = this.save_photo;
        //слушатель события onLoad работает тогда, когда изображение установилось,это не мгновенно=>ф-ия асинхронная
        image.onload = () => {
            //полностью очищаем канвас от тех фигур, которые нарисовали,чтобы выидеть только тек объект
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            //но поскольку очищаем весь канвас надо вернуть старые рисунки=>
            this.context.drawImage(
                image,
                0,
                0,
                this.canvas.width,
                this.canvas.height
            );
            this.context.beginPath();

            for (let i = 0; i <= 6; i++) {
                this.context.lineTo(
                    X + X * Math.cos((i * 2 * Math.PI) / 6),
                    Y + Y * Math.sin((i * 2 * Math.PI) / 6)
                );
            }
            this.context.fill();
            this.context.stroke();
        };
    }
}
export class Heart {
    constructor(canRef, x, y, save_photo) {
        this.canvas = canRef;
        this.context = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.save_photo = save_photo;
        this.onMouseMove_function = this.onMouseMove_function.bind(this);
    }
    //если двигаем мышкой
    onMouseMove_function(event) {
        let X = event.pageX - event.target.offsetLeft;
        let Y = event.pageY - event.target.offsetTop;
        const image = new Image();
        image.src = this.save_photo;
        //слушатель события onLoad работает тогда, когда изображение установилось,это не мгновенно=>ф-ия асинхронная
        image.onload = () => {
            //полностью очищаем канвас от тех фигур, которые нарисовали,чтобы выидеть только тек объект
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            //но поскольку очищаем весь канвас надо вернуть старые рисунки=>
            this.context.drawImage(
                image,
                0,
                0,
                this.canvas.width,
                this.canvas.height
            );
            this.context.beginPath();
            this.context.moveTo(X, Y);
            this.context.bezierCurveTo(
                X,
                0.925 * Y,
                0.933 * X,
                0.625 * Y,
                0.666 * X,
                0.625 * Y
            );
            this.context.bezierCurveTo(
                0.266 * X,
                0.625 * Y,
                0.266 * X,
                1.5625 * Y,
                0.266 * X,
                1.5625 * Y
            );
            this.context.bezierCurveTo(
                0.266 * X,
                2 * Y,
                0.533 * X,
                2.55 * Y,
                X,
                3 * Y
            );
            this.context.bezierCurveTo(
                1.46 * X,
                2.55 * Y,
                1.73 * X,
                2 * Y,
                1.73 * X,
                1.5625 * Y
            );
            this.context.bezierCurveTo(
                1.73 * X,
                1.5625 * Y,
                1.73 * X,
                0.625 * Y,
                1.33 * X,
                0.625 * Y
            );
            this.context.bezierCurveTo(1.13 * X, 0.625 * Y, X, 0.925 * Y, X, Y);
            this.context.fill();
            this.context.stroke();
        };
    }
}
export class Star {
    constructor(canRef, x, y, save_photo) {
        this.canvas = canRef;
        this.context = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.save_photo = save_photo;
        this.onMouseMove_function = this.onMouseMove_function.bind(this);
    }
    //если двигаем мышкой
    onMouseMove_function(event) {
        let X = event.pageX - event.target.offsetLeft;
        let Y = event.pageY - event.target.offsetTop;
        let r = (Math.PI / 2) * 3;
        let step = Math.PI / 5;
        let or = X / 2;
        let vr = X / 4;

        const image = new Image();
        image.src = this.save_photo;
        //слушатель события onLoad работает тогда, когда изображение установилось,это не мгновенно=>ф-ия асинхронная
        image.onload = () => {
            //полностью очищаем канвас от тех фигур, которые нарисовали,чтобы выидеть только тек объект
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            //но поскольку очищаем весь канвас надо вернуть старые рисунки=>
            this.context.drawImage(
                image,
                0,
                0,
                this.canvas.width,
                this.canvas.height
            );
            this.context.beginPath();
            for (let i = 0; i < 5; i++) {
                let x1 = this.x + Math.cos(r) * or;
                let y1 = this.y + Math.sin(r) * or;
                this.context.lineTo(x1, y1);
                r += step;

                let x2 = this.x + Math.cos(r) * vr;
                let y2 = this.y + Math.sin(r) * vr;
                this.context.lineTo(x2, y2);
                r += step;
            }
            this.context.lineTo(this.x, this.y - or);
            this.context.fill();
            this.context.stroke();
        };
    }
}
