import { useState } from 'react';

type ButtonProps = {
    startNumber: number;
}

export function Button(props: ButtonProps) {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + props.startNumber);
    }

    return (
        <button onClick={increment}>{count}</button>
    );
}