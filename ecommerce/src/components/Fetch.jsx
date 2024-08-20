import { useEffect } from 'react';

const Fetch = () => {

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => console.log(json))
    }, []);
    return (
        <div>Fetch</div>
    );
}

export default Fetch