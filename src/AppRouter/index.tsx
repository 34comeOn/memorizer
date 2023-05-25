import { RouteObject, useRoutes } from "react-router-dom"
import App from "../App";
import { CollectionPage } from "../pages/collectionPage";
import { MainPage } from "../pages/mainPage";
import { NewCollectionPage } from "../pages/newCollectionPage";
import { SignInPage } from "../pages/signInPage";

export const AppRouter = () => {
    const routes: RouteObject[] = [
        {
            path: '/',
            element: <App />,
            children: [
                {index: true, element: <MainPage /> },
                {path: 'new_collection', element: <NewCollectionPage /> },
                {path: 'collection', element: <CollectionPage /> },
                {path: 'sign_in&up', element: <SignInPage /> },
            ]
        }
    ];

    return useRoutes(routes);
}