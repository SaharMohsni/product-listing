/**
 *
 * UseMobile : used for screen resizing - detect mobile version
 *
 */
import { useEffect, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

export const useMobile = () => {
	const [ mobileVersion, setMobileVersion ] = useState(false);
	const onlyWidth = useWindowWidth();
	useEffect(
		() => {
			if (onlyWidth >= 320 && onlyWidth < 993) {
				return setMobileVersion(true);
			}
			return setMobileVersion(false);
		},
		[ onlyWidth ]
	);
	return mobileVersion;
};
