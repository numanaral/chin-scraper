import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons/faMedal';
import { faLeanpub } from '@fortawesome/free-brands-svg-icons/faLeanpub';

export {
	Add as AddIcon,
	Replay as ReplayIcon,
	WbSunny as LightThemeIcon,
	Brightness2 as DarkThemeIcon,
	RecordVoiceOver as SpeakIcon,
	Info as InfoIcon,
	Create as PenIcon,
	Close as CancelIcon,
	AccountCircle as AccountIcon,
	Tune as PreferenceIcon,
	Favorite as HeartIcon,
	Star as FavoriteIcon,
	Gesture as GestureIcon,
	BugReport as BugReportIcon,
	Search as SearchIcon,
	SentimentVeryDissatisfied as SadIcon,
	Assessment as AnalyticsIcon,
	Home as HomeIcon,
	Menu as MenuIcon,
	Translate as TranslateIcon,
	Storage as StorageIcon,
	SettingsBrightness as ThemeIcon,
	Delete as DeleteIcon,
	SlowMotionVideo as AnimationIcon,
	Palette as PaletteIcon,
	ArrowBack as PreviousIcon,
	ArrowForward as NextIcon,
	Send as SubmitIcon,
	Settings as SettingsIcon,
	Close as CloseIcon,
} from '@material-ui/icons';

const MedalIcon = props => <FontAwesomeIcon icon={faMedal} {...props} />;
const LearnIcon = props => <FontAwesomeIcon icon={faLeanpub} {...props} />;
export { MedalIcon, LearnIcon };
