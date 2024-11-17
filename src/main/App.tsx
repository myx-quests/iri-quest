import {FC} from "react";
import { PrimeReactProvider } from 'primereact/api'
import Tailwind from "primereact/passthrough/tailwind";
import {HintsListPage} from "./components/HintsListPage";
import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import {HintPreviewPage} from "./components/hints/HintPreviewPage";

const router = createHashRouter([
    {
        path: "/",
        element: <HintsListPage/>
    },
    {
        path: "/hint/:id",
        element: <HintPreviewPage/>
    }
]);

export const App: FC = () => {

    return (
        <PrimeReactProvider value={{ unstyled: false, pt: Tailwind }}>
            <RouterProvider router={router} />
        </PrimeReactProvider>
    )
}