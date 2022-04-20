import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
 it('renders appropriately', () => {
   render(<Header />);
   expect(screen.getByText("Xceed Liga Challenge 2021")).toBeInTheDocument();
 });
})