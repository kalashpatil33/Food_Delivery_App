import { fireEvent, screen, render } from "@testing-library/react"
import Header from "../Header"
import appStore from "../../../utils/appStore"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header Component with a login button", () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <Header />;
        </Provider>
    </BrowserRouter>);
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
});

it("To check login logout feature...", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />;
            </Provider>
        </BrowserRouter>);
const loginButton = screen.getByRole("button",{name: "Login"});
fireEvent.click(loginButton);
const logoutButton = screen.getByRole("button",{name: "Logout"});
    expect(logoutButton).toBeInTheDocument();
});