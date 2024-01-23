import { lazy } from "react";
import { Route, Navigate, Routes, useLocation } from 'react-router-dom';
import { checkPathMatch, paths } from "./helpers";

const HomePage = lazy(() => import('pages/HomePage'))
const ProductDetailsPage = lazy(() => import('pages/ProductDetailsPage'))
const TestPage = lazy(() => import('pages/TestPage'))

const PublickRoutes: React.FC = (): JSX.Element => {
    const location = useLocation();
    const isMatch = checkPathMatch(location.pathname, paths);

    return (
        <Routes>
            <Route path={paths.home} element={<HomePage />} />
            <Route path={paths.productDetails} element={<ProductDetailsPage />} />
            <Route path={paths.test} element={<TestPage />} />
            <Route path="*" element={!isMatch ? <Navigate to={paths.home} /> : null} />
        </Routes>
    )
}

export default PublickRoutes;