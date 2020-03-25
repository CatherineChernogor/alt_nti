import React, { useEffect } from 'react';
import './test.css';
import style from '../../../modules/style';
import { useState } from 'react';

const Test = (props) => {

    let [state, setState] = useState(false);

    const openNotPanel = () => {
        setState(true);
    }
    const closeNotPanel = () => {
        setState(false);
    }

    const RenderBtn = () => {
        return (
            <button
                className="btn not-open-btn"
                style={style.unabledElement}
                onClick={openNotPanel}>

            </button>
        );
    }
    const RenderBox = () => {
        return (
            <div className="screen not-panel-align">
                <div
                    className="gray-screen"
                    style={style.lowerElement}>
                </div>

                <div
                    className='msg-box'
                    style={style.upperElement}>
                    <button className='btn not-close-btn' onClick={closeNotPanel}></button>
                    <div className='not-text normal-text'>
                        <TestRender />
                    </div>
                </div>

            </div>
        );
    }

    return (
        state ? <RenderBox /> : <RenderBtn />
    );
}

export default Test;

const TestRender = () => {


    let [rectangle, setRectangle] = useState(0);
    let [pyramid, setPyramid] = useState(0);
    let [cylinder, setCylinder] = useState(0);
    let [state, setState] = useState(0);
    let [result, setResult] = useState('');

    let incrementRect = () => {
        { console.log("rerender", rectangle, pyramid, cylinder, state, result) }
        setRectangle(rectangle++);
        setState(state++)
    }
    let incrementPyr = () => {
        { console.log("rerender", rectangle, pyramid, cylinder, state, result) }
        setPyramid(pyramid++);
        setState(state++)
    }
    let incrementCyl = () => {
        { console.log("rerender", rectangle, pyramid, cylinder, state, result) }
        setCylinder(cylinder++);
        setState(state++)
    }
    useEffect(() => {

        if (state === 10) {
            let res;
            if (cylinder > pyramid && cylinder > rectangle) res = "Поздравляем, ты Цилиндр! Ты активный, веселый, шумный и никогда не унываешь. Энергия переполняет тебя, потому ты всегда первый рвешься на любое приключение. Ты стремишься к цели и радуешься жизни.";
            else if (pyramid > cylinder && pyramid > rectangle) res = "Поздравляем, ты Пирамидка! Ты многогранный и загадочный. От тебя стоит ожидать сюрпризов, ведь . Ты всегда мыслишь здраво и сохраняешь спокойствие в самой неожиданной ситуации, но при этом можешь удивить непредсказуемым решением.";
            else if (rectangle > pyramid && rectangle > cylinder) res = "Поздравляем, ты Расплывшийся. Ты бываешь везде, где успеваешь и где не успеваешь. С таким ритмом жизни скучать тебе не приходиться. Тебе не нужен сон и ты не боишься усталости, всегда готов к вечеринке.";
            else res = "default";
            setResult(res);
        }


    }, [state])
    return (
        state !== 10 ?
            <div className="test">
                <p>Пройди тест и узнай какой ты кубитоклобус</p>
                <p className="question">{test_data[state][0]}</p>
                <p
                    className="answer"
                    onClick={incrementRect}>

                    {test_data[state][1]}

                </p>
                <p
                    className="answer"
                    onClick={incrementPyr}>

                    {test_data[state][2]}

                </p>
                <p
                    className="answer"
                    onClick={incrementCyl}>

                    {test_data[state][3]}

                </p>
            </div>
            :
            <div>
                {result}
            </div>
    )
}
let test_data = [
    [
        "Ты больше видишь себя",
        "осторожным",
        "непоследовательным",
        "импульсивным"
    ],
    [
        "Какой ты в душе?",
        "мягкий, как подушка",
        "загадочный",
        "твердый, как камень"
    ],
    [
        "Что выберешь?",
        "кофе",
        "чай",
        "воду"
    ],
    [
        "Про что ты расскажешь друзьям в первую очередь?",
        "про шумную вечеринку",
        "про забавную ситуацию",
        "про интересную встречу",
    ],
    [
        "Чем вы будете заниматься с друзьями?",
        "слушать музыку",
        "смотреть фильм",
        "играть на гитаре"
    ],
    [
        "Что ты оденешь на важное мероприятие?",
        "оденусь как обычно",
        "покажу свой стиль",
        "буду блистать",
    ],
    [
        "Как ты отреагируешь на преследователя?",
        "исчезну",
        "убегу",
        "побью его"
    ],
    [
        "Что привлечет твое внимание на вечеринке?",
        "танцпол",
        "стол с закусками",
        "диджейский пульт"
    ],
    [
        "Чему ты доверишься?",
        "голосу разума",
        "зову сердца",
        "своему опыту"
    ],
    [
        "Ты стал роботом.Твоя первая фраза:",
        " кто я?",
        "где я?",
        "как выбраться?"
    ]
]