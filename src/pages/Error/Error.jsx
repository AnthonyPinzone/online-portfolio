import { useRouteError } from "react-router-dom";
import "./Error.scss";

export default function Error() {
    const error = useRouteError();

    return (
        <div className="error-page">
            <div className="container">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.data || error.statusText || error.message}</i>
                </p>
                <p>
                    <a href="/">Return to the home page</a>
                </p>
            </div>
        </div>
    )
}
