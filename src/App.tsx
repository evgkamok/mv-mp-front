import { Suspense } from "react";
import PrivateRoutes from "routes/PrivateRoutes";
import PublickRoutes from "routes/PublicRoutes";

const App = () => {
    return (
        <Suspense fallback={"Loading, please wait..."}>
            <PublickRoutes />
            <PrivateRoutes />
        </Suspense>
    )
}

export default App;