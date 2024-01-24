import { render, screen } from "@testing-library/react"
import ContactUS from "../ContactUS"
import "@testing-library/jest-dom";


describe("Contact Us page", function () {
    test("Should Load contact us component", () => {
        render(<ContactUS />)
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
});