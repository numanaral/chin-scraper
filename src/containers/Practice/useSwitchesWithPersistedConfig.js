import useLocalStorage from 'hooks/useLocalStorage';
import useSwitches from 'hooks/useSwitches';
import {
	PRACTICE_CONFIG,
	PRACTICE_CONFIG_LOCAL_STORAGE_KEY,
} from './constants';

const useSwitchesWithPersistedConfig = () => {
	const [practiceConfig, setPracticeConfig] = useLocalStorage(
		PRACTICE_CONFIG_LOCAL_STORAGE_KEY,
		PRACTICE_CONFIG
	);

	return useSwitches(practiceConfig, setPracticeConfig);
};

export default useSwitchesWithPersistedConfig;
