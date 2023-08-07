import axios from "axios";
import { useEffect } from "react";

export default function Home() {
    useEffect(function () {
        axios.post("/back/test", {}).then(function (response) {
            console.log(response);
        });
    }, []);

    const heading = "Laravel 9 Vite  with React JS";
    return <div> {heading}</div>;
}
