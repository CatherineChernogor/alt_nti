import React from 'react';
import Points from './Points';
import Table from './Table';
import '../App.css';

const task1 = 'Имеются изображения маркеров 8 типов. Задача - написать классификатор маркеров, который по одному изображению говорит его id и разворот относительно оригинального изображения.' + '<br></br>' + 'Для получения оригинальных изображений и их id следует отправить запрос на сервер с коммандо get_omarkers Для получения маркеров со стенда, которые следует распознать нужно отправить запрос на сервер get_merkerks Для проверки реализованного классификатора нужно сначала обратиться к серверу для получения маркеров расположенных на стенде, затем отправить запрос на проверку с командой check, в котором нужно передать массив типа [(id, x, y, r),...]. ';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Points />
                <div className="heading2 title">Классификатор маркеров</div>

                <div className="normal-text task">{task1 + task1 + task1}</div>

               <Table/>
            </div>
        );
    }
}

export default Main;