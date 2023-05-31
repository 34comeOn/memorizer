import { RouteObject, useRoutes } from "react-router-dom"
import App from "../App";
import { ROUTS_CONSTANTS } from "../constants/stringConstants";
import { CollectionPage } from "../pages/collectionPage";
import { MainPage } from "../pages/mainPage";
import { NewCollectionItemPage } from "../pages/newCollectionItemPage";
import { SignInPage } from "../pages/signInPage";

export const AppRouter = () => {
    const routes: RouteObject[] = [
        {
            path: ROUTS_CONSTANTS.MAIN_PAGE,
            element: <App />,
            children: [
                {index: true, element: <MainPage /> },
                {path: ROUTS_CONSTANTS.CURRENT_COLLECTION_PAGE, element: <CollectionPage /> },
                {path: ROUTS_CONSTANTS.SIGN_IN_AND_UP_PAGE, element: <SignInPage /> },
                {path: ROUTS_CONSTANTS.NEW_COLLECTION_ITEM_PAGE, element: <NewCollectionItemPage /> },
            ]
        }
    ];

    return useRoutes(routes);
}