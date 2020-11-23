import React from 'react';
import baseLoadable from '@loadable/component';

import LoadingIndicator from 'components/LoadingIndicator';

/**
 * @typedef FallbackSizeOptions <LoadingIndicator /> size options
 * @property {String} size <LoadingIndicator /> size
 * - 'small' | 'medium' | 'large'
 * - defaults to medium
 * @property {String} noFallback If you don't want a fallback option
 * - true | false
 * - defaults to false
 */

/**
 * Creates lazily loadable component with default fallback using the
 * <LoadingIndicator />
 *
 * @example
 * ```js
 * // Default - creates medium sized <LoadingIndicator /> as a fallback
 * const LazySomeComponent = loadable(() => import('components/SomeComponent'));
 * const Container = () => <LazySomeComponent />;
 *
 * // Custom Size - creates large sized <LoadingIndicator /> as a fallback
 * const LazySomeComponent = loadable(() => import('components/SomeComponent'), 'large');
 * const Container = () => <LazySomeComponent />;
 *
 * // Custom Fallback - uses custom component passed in as the fallback
 * const LazySomeComponent = loadable(() => import('components/SomeComponent'), { fallback: <MyCustomLoadingIndicator /> });
 * const Container = () => <LazySomeComponent />;
 *
 * // No fallback - does not create a loading indicator as a fallback
 * const LazySomeComponent = loadable(() => import('components/SomeComponent'), { noFallback: true });
 * const Container = () => <LazySomeComponent />;
 *
 * // Shared Component - prevents caching when different instantiations are needed based on the given key and passed in prop
 * const LazySharedComponent = loadable(() => import('components/SharedComponent'), 'entity');
 * const ContainerA = () => <LazySharedComponent entity="A" />;
 * const ContainerB = () => <LazySharedComponent entity="B" />;
 *
 * // Multiple options - You have to pass in an object so that it can be differentiated
 * const LazySharedComponent = loadable(() => import('components/SharedComponent'), { size: 'small', entity: 'entity'});
 * const ContainerA = () => <LazySharedComponent entity="A" />;
 * const ContainerB = () => <LazySharedComponent entity="B" />;
 *
 * ```
 *
 * @param {Function} loadFn Import function, eg:
 * - () => import('components/SomeComponent')
 * @param {import('@loadable/component').OptionsWithoutResolver|FallbackSizeOptions|string} fallback Loadable options as object or string
 * - Leaving this empty will result in the following options object to be passed in
 * - {
 *		fallback: <LoadingIndicator size={options.size || 'medium'} />,
 *	}
 * - Otherwise, you can provide OptionsWithoutResolver & FallbackSizeOptions with the following keys:
 * 	- fallback, cacheKey, size, noFallback
 * - Or pass in one of the following:
 * 	- 'small' | 'medium' | 'large' | cacheKey
 */
const loadable = (loadFn, { fallback, cacheKey, size, noFallback } = {}) => {
	const fallbackOption = {
		...((noFallback && {}) || {
			fallback: fallback || <LoadingIndicator size={size || 'medium'} />,
		}),
	};
	const options = {
		...(cacheKey && { cacheKey: props => props[cacheKey] }),
		...fallbackOption,
	};

	return baseLoadable(loadFn, options);
};

export default loadable;
