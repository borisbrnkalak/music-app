import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";

export default function Root() {
    return (
        <Fragment>
            <h1>Maros je gejom a gejom bude</h1>
        </Fragment>
    );
}

let app = document.getElementById("app");
if (app) {
    const root = createRoot(app);
    root.render(<Root />);
}
