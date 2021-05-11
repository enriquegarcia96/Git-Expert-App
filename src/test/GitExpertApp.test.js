import React from 'react'
import { shallow } from "enzyme"
import GitExpertApp from "../GitExpertApp"

describe('Pruebas en <GitExpertApp />', () => {

    test('debe mostrarse correctamente', () => {

        const wrapper = shallow(<GitExpertApp />);

        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de mostrar una lista de categoria', () => {

        const categories = ['Smash', 'Cars'];

        const wrapper = shallow(<GitExpertApp defaultCategories={ categories } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )

        
    })
    
    
    
})
