import { useContext, useEffect, useRef, useState } from 'react';
import { Context } from 'state/context';
import Pointer from 'assets/pointer.svg';
const Wheel = () => {
	const { inputs, setWinner } = useContext(Context);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
	const random = (min: number, max: number) =>
		Math.random() * (max - min) + min;
	const length = inputs.length;
	const diameter = ctx?.canvas.width;
	const radius = diameter! / 2;
	const PI = Math.PI;
	const TAU = 2 * PI;
	const arc = TAU / length;
	const friction = 0.993;
	let angVel = 0;
	let ang = 0;
	const getIndex = () => Math.floor(length - (ang / TAU) * length) % length;
	const drawItem = (item: { name: string; color: string }, idx: number) => {
		const ang = arc * idx;
		if (!ctx) return;
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = item.color;
		ctx.moveTo(radius, radius);
		ctx.arc(radius, radius, radius, ang, ang + arc);
		ctx.lineTo(radius, radius);
		ctx.fill();
		ctx.translate(radius, radius);
		ctx.rotate(ang + arc / 2);
		ctx.textAlign = 'left';
		ctx.fillStyle = '#ececec';
		ctx.font = '30px sans-serif';
		ctx.fillText(item.name, 60, 10);
		ctx.restore();
	};
	const rotate = () => {
		if (!ctx) return;
		const item = inputs[getIndex()];
		if (!angVel) setWinner(item);
		ctx.canvas.style.transform = `rotate(${ang - PI / 2}rad)`;
	};
	const frame = () => {
		if (!angVel) return;
		angVel *= friction;
		if (angVel < 0.002) angVel = 0;
		ang += angVel;
		ang %= TAU;
		rotate();
	};
	const engine = () => {
		frame();
		requestAnimationFrame(engine);
	};
	const onClickSpin = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (!angVel) angVel = random(0.25, 0.35);
	};
	engine();
	useEffect(() => {
		const tempCtx = canvasRef.current?.getContext('2d');
		setCtx(() => tempCtx);
		inputs.forEach(drawItem);
	}, [canvasRef, ctx, inputs]);
	return (
		<div className='canvas-container'>
			<div className='pointer'>
				<img src={Pointer} alt='' />
			</div>
			<canvas className='canvas' ref={canvasRef} width='600' height='600'>
				Your browser doesn't support HTML5 canvas
			</canvas>
			<button className='spinner' onClick={onClickSpin}>
				Spin
			</button>
		</div>
	);
};

export default Wheel;
