import MOCK_DATA from "../mocks/resCardMock.json"
import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import "@testing-library/jest-dom"
test("Should render RestaurantCard", () => {
    render(
        <BrowserRouter>
            <RestaurantCard resData={MOCK_DATA} />;
        </BrowserRouter>
    );
    const name = screen.getByText("Wow! Momo");
    expect(name).toBeInTheDocument();
})