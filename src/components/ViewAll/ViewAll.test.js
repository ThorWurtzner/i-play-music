import { render, screen } from "@testing-library/react";
import ViewAll from "./ViewAll";

test("if ViewAll renders with the text 'View All' ", function() {
    render(<ViewAll />);
    var Text = screen.getByText(/view all/i);
    expect(Text).toBeInTheDocument();
})