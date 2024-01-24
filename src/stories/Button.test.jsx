import { Button } from './Button';
import { render, screen, fireEvent} from "@testing-library/react";

describe('Button test cases',()=>{
    test('render large button',()=>{
        render(<Button size="large" label="Click me"/>);
        expect(screen.getByRole("button")).toHaveTextContent(/click/i);
    });
    test("render large button and click button element",()=>{
        render(<Button size="large" label="Large Button"/>);
        const ButtonElement = screen.getByText('Large Button');
        fireEvent.click(ButtonElement);
    })
})
