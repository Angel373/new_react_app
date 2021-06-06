import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import React from 'react';
import {GifGridItem} from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    const title = 'holamundo';
    const url = 'https://localhost.cualquier.com'
    const wrapper = shallow( <GifGridItem title={title} url={url}/>);

    test('debe de mostrar el componente <GifGridItem /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar la clase del div animate__fadeIn', ()=>{
        const findClass = 'animate__fadeIn';
        const div = wrapper.find('div');
        const hasClass = div.prop('className');


        expect(hasClass.includes(findClass)).toBe(true);
    })
    
})
