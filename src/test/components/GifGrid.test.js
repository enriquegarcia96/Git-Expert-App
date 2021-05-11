import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from '../../hooks/useFetchGifs';

//.- finge cualquier llamada a este archivo y controlar la informacion 
//.- que esto va a responder
jest.mock('../../hooks/useFetchGifs')


describe('Prubas en el <GifGrid />', () => {

   const category = 'Smash';

    test('debe de mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({

            data: [],
            loading: true

        });

        const wrapper = shallow(<GifGrid category={ category } />);
        expect( wrapper ).toMatchSnapshot();
        
    });




    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({

            data: gifs,
            loading: false
        });
        

        const wrapper = shallow(<GifGrid category={ category } />);

        //expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

            
    })
    
    
    
})
