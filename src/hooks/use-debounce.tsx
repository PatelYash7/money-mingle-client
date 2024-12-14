import { useEffect, useState } from 'react';

export function useDedounce<T>({
	value,
	timer,
}: {
	value: T;
	timer: number;
}): T {
	const [debouncedValue, setDebounceValue] = useState<T>(value);
	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebounceValue(value);
		}, timer);

		return () => {
			clearInterval(timeout);
		};
		// @ts-ignore
	}, [value]);
	return debouncedValue;
}
