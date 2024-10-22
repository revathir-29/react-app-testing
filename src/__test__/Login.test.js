import {render , screen} from "@testing-library/react";
import Login from "../Login";
test('Checking component loaded' , () =>{
    //steps for testing heading element loadedw
    render(<Login/>);
    expect(screen.getByText(/Login/)).toBeInTheDocument();

})

test('Checking email and password inputs are empty' , ()=>{
    render(<Login />);
    expect(screen.queryByPlaceholderText('Email')).toHaveValue("");
    expect(screen.queryByPlaceholderText('Password')).toHaveValue("");
})