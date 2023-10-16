import React, { useRef, useState } from 'react';
import '../../style/Paint_meni/menu.css';
import {
    Pencil,
    Brush,
    Line,
    Curve,
    Eraser,
    Rect,
    Circle,
    Triangle,
    Poligon,
    Heart,
    Star,
} from '../../class/class_1';

import '../../style/Paint_meni/paint.css';

import {
    Start,
    undo,
    redo,
    Casting,
    Stroke,
    width_line,
    download_save,
} from '../../functions/function';
const Paint_menu = () => {
    const canvasRef = useRef();
    const [pencil, setPencil] = useState(false);
    const [brush, setBrush] = useState(false);
    const [line, setLine] = useState(false);
    const [eraser, setEraser] = useState(false);
    const [curve, setCurve] = useState(false);
    const [rect, setRect] = useState(false);
    const [circle, setCircle] = useState(false);
    const [triangle, setTriangle] = useState(false);
    const [poligon, setPoligon] = useState(false);
    const [heart, setHeart] = useState(false);
    const [star, setStar] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [photo, setPhoto] = useState(null);
    const [value, setValue] = useState('');
    const [listUndo, setListUndo] = useState([]);
    const [listRedo, setListRedo] = useState([]);

    function Down(event) {
        if (value == 'pencil') {
            setPencil(true);
            canvasRef.current.style.cursor = 'crosshair';
            new Pencil(canvasRef.current).onMouseDown_function(event);
        }
        if (value == 'brush') {
            setBrush(true);
            canvasRef.current.style.cursor = 'crosshair';
            new Brush(canvasRef.current).onMouseDown_function(event);
        }
        if (value == 'line') {
            setLine(true);
            canvasRef.current.style.cursor = 'crosshair';
            Start(event, setX, setY, setPhoto, canvasRef.current);
        }
        if (value == 'curve') {
            setCurve(true);
            canvasRef.current.style.cursor = 'crosshair';
            Start(event, setX, setY, setPhoto, canvasRef.current);
        }
        if (value == 'eraser') {
            setEraser(true);
            canvasRef.current.style.cursor = 'crosshair';
            new Eraser(canvasRef.current).onMouseDown_function(event);
        }
        if (value == 'rect') {
            setRect(true);
            canvasRef.current.style.cursor = 'crosshair';
            Start(event, setX, setY, setPhoto, canvasRef.current);
        }
        if (value == 'circle') {
            setCircle(true);
            canvasRef.current.style.cursor = 'crosshair';
            Start(event, setX, setY, setPhoto, canvasRef.current);
        }
        if (value == 'triangle') {
            setTriangle(true);
            canvasRef.current.style.cursor = 'crosshair';
            Start(event, setX, setY, setPhoto, canvasRef.current);
        }
        if (value == 'poligon') {
            setPoligon(true);
            canvasRef.current.style.cursor = 'crosshair';
            Start(event, setX, setY, setPhoto, canvasRef.current);
        }
        if (value == 'heart') {
            setHeart(true);
            canvasRef.current.style.cursor = 'crosshair';
            Start(event, setX, setY, setPhoto, canvasRef.current);
        }
        if (value == 'star') {
            setStar(true);
            canvasRef.current.style.cursor = 'crosshair';
            Start(event, setX, setY, setPhoto, canvasRef.current);
        }
        listUndo.push(canvasRef.current.toDataURL());
    }

    function Move(event) {
        if (value == 'pencil') {
            if (pencil) {
                new Pencil(canvasRef.current).onMouseMove_function(event);
            }
        }

        if (value == 'brush') {
            if (brush) new Brush(canvasRef.current).onMouseMove_function(event);
        }
        if (value == 'line') {
            if (line)
                new Line(canvasRef.current, x, y, photo).onMouseMove_function(
                    event
                );
        }
        if (value == 'curve') {
            if (curve)
                new Curve(canvasRef.current, x, y, photo).onMouseMove_function(
                    event
                );
        }
        if (value == 'eraser') {
            if (eraser)
                new Eraser(canvasRef.current).onMouseMove_function(event);
        }
        if (value == 'rect') {
            if (rect)
                new Rect(canvasRef.current, x, y, photo).onMouseMove_function(
                    event
                );
        }
        if (value == 'circle') {
            if (circle)
                new Circle(canvasRef.current, x, y, photo).onMouseMove_function(
                    event
                );
        }
        if (value == 'triangle') {
            if (triangle)
                new Triangle(
                    canvasRef.current,
                    x,
                    y,
                    photo
                ).onMouseMove_function(event);
        }
        if (value == 'poligon') {
            if (poligon)
                new Poligon(
                    canvasRef.current,
                    x,
                    y,
                    photo
                ).onMouseMove_function(event);
        }
        if (value == 'heart') {
            if (heart)
                new Heart(canvasRef.current, x, y, photo).onMouseMove_function(
                    event
                );
        }
        if (value == 'star') {
            if (star)
                new Star(canvasRef.current, x, y, photo).onMouseMove_function(
                    event
                );
        }
    }
    function Up() {
        if (value == 'pencil') {
            setPencil(false);
        }
        if (value == 'brush') {
            setBrush(false);
        }
        if (value == 'line') {
            setLine(false);
        }
        if (value == 'curve') {
            setCurve(false);
        }
        if (value == 'eraser') {
            setEraser(false);
        }
        if (value == 'rect') {
            setRect(false);
        }
        if (value == 'circle') {
            setCircle(false);
        }
        if (value == 'triangle') {
            setTriangle(false);
        }
        if (value == 'poligon') {
            setPoligon(false);
        }
        if (value == 'heart') {
            setHeart(false);
        }
        if (value == 'star') {
            setStar(false);
        }
    }
    return (
        <div>
            <div className="menu">
                <button
                    className="url1"
                    onClick={() => setValue('pencil')}
                ></button>
                <button
                    className="url2"
                    onClick={() => setValue('brush')}
                ></button>
                <button
                    className="url3"
                    onClick={() => setValue('line')}
                ></button>
                <button
                    className="url4"
                    onClick={() => setValue('curve')}
                ></button>
                <button
                    className="url5"
                    onClick={() => setValue('eraser')}
                ></button>
                <button
                    className="url6"
                    onClick={() => setValue('rect')}
                ></button>

                <button
                    className="url7"
                    onClick={() => setValue('circle')}
                ></button>
            </div>
            <div className="menu_2">
                <button
                    className="url8"
                    onClick={() => setValue('triangle')}
                ></button>
                <button
                    className="url9"
                    onClick={() => setValue('poligon')}
                ></button>
                <button
                    className="url10"
                    onClick={() => setValue('heart')}
                ></button>
                <button
                    className="url11"
                    onClick={() => setValue('star')}
                ></button>
            </div>

            <line className="line" />
            <div className="menu_3">
                <label htmlFor="color_casting">Заливка </label>
                <input
                    type="color"
                    id="color_casting"
                    onChange={(e) => Casting(e.target.value, canvasRef.current)}
                />
            </div>
            <div className="menu_4">
                <label htmlFor="line_width">Толщина линии</label>
                <input
                    type="number"
                    id="line_width"
                    min={1}
                    max={50}
                    defaultValue={1}
                    onChange={(e) =>
                        width_line(e.target.value, canvasRef.current)
                    }
                />
            </div>
            <div className="menu_5">
                <label htmlFor="stroke_color">Обводка</label>
                <input
                    type="color"
                    id="stroke_color"
                    onChange={(e) => Stroke(e.target.value, canvasRef.current)}
                />
            </div>
            <line className="line_2" />
            <div className="menu_6">
                <button
                    className="url12"
                    onClick={() => undo(listUndo, listRedo, canvasRef.current)}
                ></button>
                <button
                    className="url13"
                    onClick={() => redo(listRedo, listUndo, canvasRef.current)}
                ></button>
            </div>
            <div className="menu_7">
                <label htmlFor="save">Скачать(темный фон)</label>
                <a
                    className="url14"
                    id="save"
                    onClick={(event) => download_save(event, canvasRef.current)}
                ></a>
            </div>
            <div className="menu_8">
                <label htmlFor="an_save">Скачать(светлый фон)</label>
                <a
                    className="url14"
                    id="ad_save"
                    onClick={(event) => download_save(event, canvasRef.current)}
                ></a>
            </div>
            <canvas
                style={{
                    border: '1px solid black',
                    backgroundColor: '#fff',
                }}
                ref={canvasRef}
                width={800}
                height={500}
                onMouseDown={Down}
                onMouseMove={Move}
                onMouseUp={Up}
                /*    onMouseDown={onMouseDownHandler()}*/
            ></canvas>
        </div>
    );
};
export default Paint_menu;
