import { RouteObject, useRoutes } from "react-router-dom"
import App from "../App";
import { CollectionPage } from "../pages/collectionPage";
import { MainPage } from "../pages/mainPage";

export const AppRouter = () => {
    const routes: RouteObject[] = [
        {
            path: '/',
            element: <App />,
            children: [
                {index: true, element: <MainPage /> },
                { path: 'collection', element: <CollectionPage /> },
            ]
        }
    ];

    return useRoutes(routes);
}