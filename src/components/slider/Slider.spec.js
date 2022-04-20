import { render, screen } from '@testing-library/react'
import Slider from './Slider'

describe('Slider', () => {
 it('renders appropriately', () => {
   render(<Slider />);
   expect(screen.getByAltText("Background")).toBeInTheDocument();
 });
})