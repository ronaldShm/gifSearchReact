import { render, screen } from '@testing-library/react'
import { GiftItem } from '../../src/components'

describe('Pruebas en <GifItem/>', () => {
    
    const title = 'Dragon Ball Z'
    const url = 'https://www.google.com/'
    
    test('Debe de hacer match con el snapshot', () => { 
        const {container} = render( <GiftItem title={title} url={url}/>)
        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar la imagen con el URL y ALT indicado', () => { 
        render( <GiftItem title={title} url={url}/>)
        // screen.debug()
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)
        
    })

    test('Debe de mostrar el titulo en el componente', () => { 
        render( <GiftItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy();

    })
 })