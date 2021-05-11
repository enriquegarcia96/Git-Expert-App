import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks'


describe('Pruebas en el hook <useFetchGifs />', () => {

    test('debe de retornar el estado inicial', async() => {

        const { result,waitForNextUpdate  } = renderHook( () => useFetchGifs('Smash') );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        //console.log(data, loading);


        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    })

    test('debe de retornar un arreglo de imagenes y el loadign en false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Smash') );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        //console.log(data, loading);


        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);

        
    })
    
    
    
})
