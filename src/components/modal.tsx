'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
	const dialogRef = useRef<ElementRef<'dialog'>>(null);

	useEffect(() => {
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
	}, []);

	return createPortal(
		<div className=' absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50'>
			<dialog
				ref={dialogRef}
				className='w-[80%] max-w-md h-auto max-h-[500px] border-none bg-transparent p-5 relative flex justify-center items-center text-5xl font-medium'
			>
				{children}
			</dialog>
		</div>,
		document.getElementById('modal-root')!,
	);
}
