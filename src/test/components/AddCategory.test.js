import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";



describe('Pruebas en <AddCategory />', () => {


    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);



    //.- ciclo de vida de las pruebas .-//
    beforeEach( () => {

        //.- si tenemos una simulacion de algo; que todo se limpie .-//
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    } );




    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })



    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');

        const value = 'Hola Mundo';

        // recibe el evento "e"
        input.simulate('change', { target: { value }});

        expect( wrapper.find('p').text() ).toBe( value );
        
    })



    //.- Simular un submit del Formulario .-//
    test('NO debe de postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { 
            preventDefault(){}  
        });

        expect( setCategories ).not.toHaveBeenCalled();
    })


    //.- Simular submit llamando la funcion y limpiando el inputvalue .-// 
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';

        //.- 1. Simular el inputChange .-//
        wrapper.find('input').simulate('change', { target: {value} });


        //.- 2. Simular el Submit .-//
        wrapper.find('form').simulate('submit', {preventDefault(){}});



        //.- 3. SetCategories se debe de haber llamado .-//
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );//para llamar una funcion


        //.- 4. el valor del input debe de estar vacio '' .-//
        expect( wrapper.find('input').prop('value') ).toBe('');


    })
    
    
    
    
})
