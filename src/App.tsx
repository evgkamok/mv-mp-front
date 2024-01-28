import Header from 'features/Header'
import { Suspense } from 'react'
import PrivateRoutes from 'routes/PrivateRoutes'
import PublicRoutes from 'routes/PublicRoutes'
import { AppStyles, Footer } from './App.styled'

const App = () => {
	return (
		<>
			<AppStyles />
			<Header />
			<Suspense fallback={'Loading, please wait...'}>
				<PublicRoutes />
				{/* <PrivateRoutes /> */}
			</Suspense>
			<Footer>Footer Market Place 2024</Footer>
		</>
	)
}

export default App
