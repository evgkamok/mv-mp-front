//
// App path
//

type pathTypes = Record<string, string>

export const pathPublic: pathTypes = {
	home: '/',
	productDetails: '/products/:idOrSlug,',
	test: '/test',
}

export const pathPrivate: pathTypes = {
	accountSettings: '/account-settings',
}

export const paths: pathTypes = Object.assign({}, pathPublic, pathPrivate)

export const checkPathMatch = (
	pathName: string,
	paths: { [key: string]: string }
) => {
	let isMatch = false

	const allPath = Object.keys(paths).map(e => paths[e])
	const pathFirstSection = pathName.split('/')[1]

	allPath.forEach(e => {
		if (e.slice(1) === pathFirstSection) {
			isMatch = true
		}
	})
	return isMatch
}
