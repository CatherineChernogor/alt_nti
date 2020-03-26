import React, { useEffect, useState } from 'react';

import Result from './Result';
import Test from './Test'

const TestRender = () => {


    let [rectangle, setRectangle] = useState(0);
    let [pyramid, setPyramid] = useState(0);
    let [cylinder, setCylinder] = useState(0);

    let [state, setState] = useState(0);
    let [result, setResult] = useState(3);
    let [image, setImage] = useState('default');

    let action = {
        incrementRect: () => {
            setRectangle(rectangle++);
            setState(state++)
        },
        incrementPyr: () => {
            setPyramid(pyramid++);
            setState(state++)
        },
        incrementCyl: () => {
            setCylinder(cylinder++);
            setState(state++)
        }
    }
    useEffect(() => {

        if (state === 10) {
            let res, img;
            if (cylinder > pyramid && cylinder > rectangle) {
                res = 0;
                img = `cyl${Math.round(Math.random()) + 1}`;
            } else if (pyramid > cylinder && pyramid > rectangle) {
                res = 1;
                img = 'pyr';

            } else if (rectangle > pyramid && rectangle > cylinder) {
                res = 2;
                img = `rect${Math.round(Math.random()) + 1}`;

            } else {
                res = 3;
                img = 'default';
            }

            setResult(res);
            setImage(img)
        }

    }, [
        state,
        image,
        result
    ])

    return (
        
        state !== 10 ?
            <Test
                action={action}
                state={state}
            />
            :
            < Result
                result={result}
                img={image}
            />
    )
}
export default TestRender;