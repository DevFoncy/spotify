/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpleRange from './index';

test('Simple Range render component and check the label', () => {
  const initialProps = {
    min: 10, 
    max: 90
  }
  render(<SimpleRange {...initialProps}/>);

  const start  = screen.getByTestId("value-start")
  const end  = screen.getByTestId("value-end")

  expect(start.innerHTML).toBe(initialProps.min + "€")
  expect(end.innerHTML).toBe(initialProps.max + "€")
});

  
