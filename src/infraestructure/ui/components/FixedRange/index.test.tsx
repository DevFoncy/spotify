/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react';
import { render, screen } from '@testing-library/react';
import FixedRange from './index';

test('Fixed Range render component and check the label', () => {
  const initialProps = {
    values: [3.4, 5, 9 , 120],
    start: 5, 
    end: 9
  }
  const {container} = render(<FixedRange {...initialProps}/>);

  const values  = screen.getByTestId("values")
  
  for(var i =0 ; i<4 ; i++ ){
    expect(values).toHaveTextContent(initialProps.values[i].toString())
  }
  const activeElements = container.getElementsByClassName("active")

  expect(activeElements[0].innerHTML).toBe(initialProps.start.toString())
  expect(activeElements[1].innerHTML).toBe(initialProps.end.toString())

});
