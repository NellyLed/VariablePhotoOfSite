import React, { useRef } from 'react';
import '../../style/Space/space_canvas.css';
const Space = () => {
    const canvasRef = useRef();
    class Constellation {
        canvas = null;
        constructor(canvas) {
            this.canvas = canvas;
            this.ctx = canvas.getContext('2d');
            this.points = [
                {
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    vx: (0.5 - Math.random()) / 5,
                    vy: (0.5 - Math.random()) / 5,
                },
            ];
            this.p = [];
            this.star = {
                color: 'rgba(255, 255, 255, .5)',
                width: 3,
            };
            this.stars = [];
            this.init = this.init.bind(this);
            this.Star = this.Star.bind(this);
            this.draw = this.draw.bind(this);
            this.animate = this.animate.bind(this);
            this.drawPoints = this.drawPoints.bind(this);
        }

        Star() {
            this.x = Math.random() * this.canvas.width;
            this.y = Math.random() * this.canvas.height;
            this.radius = Math.random() * this.star.width;
            this.draw(this.x, this.y, this.star.color);
        }

        draw(x, y, color) {
            this.ctx.beginPath();
            this.ctx.fillStyle = color;
            this.ctx.shadowColor = '#D3D3D3';
            this.ctx.shadowBlur = 6;
            this.ctx.arc(x, y, this.radius, 0, Math.PI * 2, false);
            this.ctx.fill();
            this.ctx.closePath();
        }

        drawPoints() {
            this.points.forEach((point) => {
                this.ctx.beginPath();
                this.ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
                this.ctx.fillStyle = 'linear-gradient(blue, pink)';
                this.ctx.shadowColor = 'pink';
                this.ctx.shadowBlur = 3;
                this.ctx.fill();
                this.ctx.closePath();
            });
        }
        animate() {
            this.points.forEach((point) => {
                for (let i = 0; i < this.length; i++) {
                    if (point.y < 0 || point.y > this.canvas.height) {
                        point.vy = -point.vy;
                    } else if (point.x < 0 || point.x > this.canvas.width) {
                        point.vx = -point.vx;
                    }

                    point.x += point.vx;
                    point.y += point.vy;
                }
            });
            this.drawPoints();
            requestAnimationFrame(this.animate);
        }
        init() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            const min = Math.ceil(1);
            const max = Math.floor(3);
            this.length =
                Math.sqrt(
                    Math.pow(window.innerWidth, 2) +
                        Math.pow(window.innerHeight, 2)
                ) / Math.floor(Math.random() * (max - min) + min);

            for (let i = 0; i < this.length; i++) {
                this.stars.push(this.Star());
            }
            this.p.push(this.animate());
        }
    }

    function Constellation_f() {
        let c = new Constellation(canvasRef.current);

        c.init();
    }

    return (
        <div>
            <canvas
                width={window.innerWidth}
                height={window.innerHeight}
                ref={canvasRef}
                onClick={Constellation_f}
                className="canvas_space"
            ></canvas>
        </div>
    );
};
export default Space;
