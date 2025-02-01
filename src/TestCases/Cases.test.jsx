import { render, screen } from "@testing-library/react";
import  Cases from "./ Cases";

test("add two numbers correctly", () => {
  render(< Cases a={10} b={20} />);
  expect(screen.getByText("Addition Result: 30")).toBeInTheDocument();
});

test("renders greeting message", () => {
  render(< Cases a={0} b={0} />);
  expect(screen.getByText("greetings: HELLO GRACEFULL")).toBeInTheDocument();
});

test('multiplication two numbers correctly', () => {
  render(< Cases a={10} b={60} />);
  expect(screen.getByText(/multiplication Result:\s*600/)).toBeInTheDocument();
});
test('substract two numbers correctly',()=>{
  render(< Cases a={-20} b={30}/>)
  expect(screen.getAllByText(/substraction Result:\s*10/)).toBeInTheDocument();
})