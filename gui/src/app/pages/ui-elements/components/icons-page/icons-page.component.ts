import { Component } from '@angular/core';

@Component({
  selector: 'app-icons-page',
  templateUrl: './icons-page.component.html',
  styleUrls: ['./icons-page.component.scss']
})
export class IconsPageComponent {
  public materialIcons: string[] = [
    'AccessAlarm',
    'AccessAlarms',
    'Accessibility',
    'Accessible',
    'AccessibleForward',
    'AccessTime',
    'AccountBalance',
    'AccountBalanceWallet',
    'AccountBox',
    'AccountCircle',
    'AcUnit',
    'Adb',
    'Adjust',
    'AirlineSeatFlat',
    'AirlineSeatFlatAngled',
    'AirlineSeatIndividualSuite',
    'AirlineSeatLegroomExtra',
    'AirlineSeatLegroomNormal',
    'AirlineSeatLegroomReduced',
    'AirlineSeatReclineExtra',
    'AirlineSeatReclineNormal',
    'AirplanemodeActive',
    'AirplanemodeInactive',
    'Airplay',
    'AirportShuttle',
    'Alarm',
    'Album',
    'AllInbox',
    'AllInclusive',
    'AllOut',
    'AlternateEmail',
    'Android',
    'Announcement',
    'Apps',
    'Archive',
    'ArrowBack',
    'ArrowBackIos',
    'ArrowDownward',
    'ArrowDropDown',
    'ArrowDropDownCircle',
    'ArrowDropUp',
    'ArrowForward',
    'ArrowForwardIos',
    'ArrowLeft',
    'ArrowRight',
    'ArrowRightAlt',
    'ArrowUpward',
    'ArtTrack',
    'AspectRatio',
    'Assessment',
    'Assignment',
    'AssignmentInd',
    'AssignmentLate',
    'AssignmentReturn',
    'AssignmentReturned',
    'AssignmentTurnedIn',
    'Assistant',
    'AssistantPhoto',
    'Atm',
    'AttachFile',
    'Attachment',
    'AttachMoney',
    'Audiotrack',
    'Autorenew',
    'AvTimer',
    'Backspace',
    'Backup',
    'Ballot',
    'BarChart',
    'BatteryAlert',
    'BatteryChargingFull',
    'BatteryFull',
    'BatteryStd',
    'BatteryUnknown',
    'BeachAccess',
    'Beenhere',
    'Block',
    'Bluetooth',
    'BluetoothAudio',
    'BluetoothConnected',
    'BluetoothDisabled',
    'BluetoothSearching',
    'BlurCircular',
    'BlurLinear',
    'Book',
    'Bookmark',
    'BookmarkBorder',
    'Bookmarks',
    'BorderAll',
    'BorderBottom',
    'BorderClear',
    'BorderColor',
    'BorderHorizontal',
    'BorderInner',
    'BorderLeft',
    'BorderOuter',
    'BorderRight',
    'BorderStyle',
    'BorderTop',
    'BorderVertical',
    'BrandingWatermark',
    'Brightness_1',
    'Brightness_2',
    'Brightness_3',
    'Brightness_4',
    'Brightness_5',
    'Brightness_6',
    'Brightness_7',
    'BrightnessAuto',
    'BrightnessHigh',
    'BrightnessLow',
    'BrightnessMedium',
    'BrokenImage',
    'Brush',
    'BubbleChart',
    'BugReport',
    'Build',
    'BurstMode',
    'Business',
    'BusinessCenter',
    'Cached',
    'Cake',
    'CalendarToday',
    'CalendarViewDay',
    'Call',
    'CallEnd',
    'CallMade',
    'CallMerge',
    'CallMissed',
    'CallMissedOutgoing',
    'CallReceived',
    'CallSplit',
    'CallToAction',
    'Camera',
    'CameraAlt',
    'CameraEnhance',
    'CameraFront',
    'CameraRear',
    'CameraRoll',
    'Cancel',
    'CancelPresentation',
    'CardGiftcard',
    'CardMembership',
    'CardTravel',
    'Casino',
    'Cast',
    'CastConnected',
    'CastForEducation',
    'Category',
    'CellWifi',
    'CenterFocusStrong',
    'CenterFocusWeak',
    'ChangeHistory',
    'Chat',
    'ChatBubble',
    'ChatBubbleOutline',
    'Check',
    'CheckBox',
    'CheckBoxOutlineBlank',
    'CheckCircle',
    'CheckCircleOutline',
    'ChevronLeft',
    'ChevronRight',
    'ChildCare',
    'ChildFriendly',
    'ChromeReaderMode',
    'Class',
    'Clear',
    'ClearAll',
    'Close',
    'ClosedCaption',
    'Cloud',
    'CloudCircle',
    'CloudDone',
    'CloudDownload',
    'CloudQueue',
    'CloudUpload',
    'Code',
    'Collections',
    'CollectionsBookmark',
    'Colorize',
    'ColorLens',
    'Comment',
    'Commute',
    'Compare',
    'CompareArrows',
    'CompassCalibration',
    'Computer',
    'ConfirmationNumber',
    'ContactMail',
    'ContactPhone',
    'Contacts',
    'ContactSupport',
    'ControlCamera',
    'ControlPoint',
    'ControlPointDuplicate',
    'Copyright',
    'Create',
    'CreditCard',
    'Crop',
    'Crop_16_9',
    'Crop_3_2',
    'Crop_5_4',
    'Crop_7_5',
    'CropDin',
    'CropFree',
    'CropLandscape',
    'CropOriginal',
    'CropPortrait',
    'CropRotate',
    'CropSquare',
    'Dashboard',
    'DataUsage',
    'DateRange',
    'Dehaze',
    'Delete',
    'DeleteForever',
    'DeleteOutline',
    'DeleteSweep',
    'DepartureBoard',
    'Description',
    'DesktopAccessDisabled',
    'DesktopMac',
    'DesktopWindows',
    'Details',
    'DeveloperBoard',
    'DeveloperMode',
    'DeviceHub',
    'Devices',
    'DevicesOther',
    'DeviceUnknown',
    'DialerSip',
    'Dialpad',
    'Directions',
    'DirectionsBike',
    'DirectionsBoat',
    'DirectionsBus',
    'DirectionsCar',
    'DirectionsRailway',
    'DirectionsRun',
    'DirectionsSubway',
    'DirectionsTransit',
    'DirectionsWalk',
    'DiscFull',
    'Dns',
    'Dock',
    'Domain',
    'DomainDisabled',
    'Done',
    'DoneAll',
    'DoneOutline',
    'DonutLarge',
    'DonutSmall',
    'Drafts',
    'DragHandle',
    'DragIndicator',
    'DriveEta',
    'Duo',
    'Dvr',
    'Edit',
    'EditAttributes',
    'EditLocation',
    'Eject',
    'Email',
    'EnhancedEncryption',
    'Equalizer',
    'Error',
    'ErrorOutline',
    'EuroSymbol',
    'Event',
    'EventAvailable',
    'EventBusy',
    'EventNote',
    'EventSeat',
    'EvStation',
    'ExitToApp',
    'ExpandLess',
    'ExpandMore',
    'Explicit',
    'Explore',
    'Exposure',
    'ExposureNeg1',
    'ExposureNeg2',
    'ExposurePlus1',
    'ExposurePlus2',
    'ExposureZero',
    'Extension',
    'Face',
    'Fastfood',
    'FastForward',
    'FastRewind',
    'Favorite',
    'FavoriteBorder',
    'FeaturedPlayList',
    'FeaturedVideo',
    'Feedback',
    'FiberDvr',
    'FiberManualRecord',
    'FiberPin',
    'FiberSmartRecord',
    'FileCopy',
    'Filter',
    'Filter1',
    'Filter2',
    'Filter3',
    'Filter4',
    'Filter5',
    'Filter6',
    'Filter7',
    'Filter8',
    'Filter9',
    'Filter9Plus',
    'FilterBAndW',
    'FilterCenterFocus',
    'FilterDrama',
    'FilterFrames',
    'FilterHdr',
    'FilterList',
    'FilterNone',
    'FilterTiltShift',
    'FilterVintage',
    'FindInPage',
    'FindReplace',
    'Fingerprint',
    'FirstPage',
    'FitnessCenter',
    'Flag',
    'Flare',
    'FlashAuto',
    'Flight',
    'FlightLand',
    'FlightTakeoff',
    'Flip',
    'FlipToBack',
    'FlipToFront',
    'Folder',
    'FolderOpen',
    'FolderShared',
    'FolderSpecial',
    'FontDownload',
    'FormatAlignCenter',
    'FormatAlignJustify',
    'FormatAlignLeft',
    'FormatAlignRight',
    'FormatBold',
    'FormatClear',
    'FormatColorFill',
    'FormatColorReset',
    'FormatColorText',
    'FormatIndentDecrease',
    'FormatIndentIncrease',
    'FormatItalic',
    'FormatLineSpacing',
    'FormatListBulleted',
    'FormatListNumbered',
    'FormatListNumberedRtl',
    'FormatPaint',
    'FormatQuote',
    'FormatShapes',
    'FormatSize',
    'FormatStrikethrough',
    'FormatTextdirectionLToR',
    'FormatTextdirectionRToL',
    'FormatUnderlined',
    'Forum',
    'Forward',
    'Forward10',
    'Forward30',
    'Forward5',
    'FourK',
    'FreeBreakfast',
    'Fullscreen',
    'FullscreenExit',
    'Functions',
    'Gamepad',
    'Games',
    'Gavel',
    'Gesture',
    'GetApp',
    'Gif',
    'GolfCourse',
    'GpsFixed',
    'GpsNotFixed',
    'Grade',
    'Gradient',
    'Grain',
    'GraphicEq',
    'Group',
    'GroupWork',
    'GTranslate',
    'Hd',
    'HdrStrong',
    'HdrWeak',
    'Headset',
    'HeadsetMic',
    'Healing',
    'Hearing',
    'Help',
    'HelpOutline',
    'Highlight',
    'HighQuality',
    'History',
    'Home',
    'HorizontalSplit',
    'Hotel',
    'HotTub',
    'HourglassEmpty',
    'HourglassFull',
    'HowToReg',
    'HowToVote',
    'Http',
    'Https',
    'Image',
    'ImageAspectRatio',
    'ImageSearch',
    'ImportantDevices',
    'ImportContacts',
    'ImportExport',
    'Inbox',
    'IndeterminateCheckBox',
    'Info',
    'Input',
    'InsertChart',
    'InsertComment',
    'InsertDriveFile',
    'InsertEmoticon',
    'InsertInvitation',
    'InsertLink',
    'InsertPhoto',
    'InvertColors',
    'Iso',
    'Keyboard',
    'KeyboardArrowDown',
    'KeyboardArrowLeft',
    'KeyboardArrowRight',
    'KeyboardArrowUp',
    'KeyboardBackspace',
    'KeyboardCapslock',
    'KeyboardHide',
    'KeyboardReturn',
    'KeyboardTab',
    'KeyboardVoice',
    'Kitchen',
    'Label',
    'LabelImportant',
    'Landscape',
    'Language',
    'Laptop',
    'LaptopChromebook',
    'LaptopMac',
    'LaptopWindows',
    'LastPage',
    'Launch',
    'Layers',
    'LayersClear',
    'LeakRemove',
    'Lens',
    'LibraryBooks',
    'LibraryMusic',
    'LinearScale',
    'LineStyle',
    'LineWeight',
    'Link',
    'LinkedCamera',
    'List',
    'ListAlt',
    'LiveHelp',
    'LiveTv',
    'LocalActivity',
    'LocalAirport',
    'LocalAtm',
    'LocalBar',
    'LocalCafe',
    'LocalCarWash',
    'LocalConvenienceStore',
    'LocalDining',
    'LocalDrink',
    'LocalFlorist',
    'LocalGasStation',
    'LocalGroceryStore',
    'LocalHospital',
    'LocalHotel',
    'LocalLaundryService',
    'LocalLibrary',
    'LocalMall',
    'LocalMovies',
    'LocalParking',
    'LocalPharmacy',
    'LocalPhone',
    'LocalPizza',
    'LocalPlay',
    'LocalPrintshop',
    'LocalSee',
    'LocalShipping',
    'LocalTaxi',
    'LocationCity',
    'LocationDisabled',
    'LocationSearching',
    'Lock',
    'LockOpen',
    'Looks',
    'Looks3',
    'Looks4',
    'Looks5',
    'Looks6',
    'LooksTwo',
    'Loop',
    'Loupe',
    'LowPriority',
    'Loyalty',
    'Mail',
    'MailOutline',
    'Map',
    'Markunread',
    'MarkunreadMailbox',
    'Maximize',
    'MeetingRoom',
    'Memory',
    'Menu',
    'MergeType',
    'Message',
    'Mic',
    'MicNone',
    'Minimize',
    'MissedVideoCall',
    'Mms',
    'MobileFriendly',
    'MobileScreenShare',
    'ModeComment',
    'Money',
    'MonochromePhotos',
    'Mood',
    'MoodBad',
    'More',
    'MoreHoriz',
    'MoreVert',
    'Motorcycle',
    'Mouse',
    'MoveToInbox',
    'Movie',
    'MovieCreation',
    'MovieFilter',
    'MultilineChart',
    'MusicNote',
    'MusicVideo',
    'MyLocation',
    'Nature',
    'NaturePeople',
    'NavigateBefore',
    'NavigateNext',
    'Navigation',
    'NearMe',
    'NetworkCell',
    'NetworkCheck',
    'NetworkLocked',
    'NetworkWifi',
    'NextWeek',
    'Nfc',
    'NoEncryption',
    'NoMeetingRoom',
    'NoSim',
    'Note',
    'Notes',
    'NotificationImportant',
    'Notifications',
    'NotificationsActive',
    'NotificationsNone',
    'NotificationsPaused',
    'NotInterested',
    'NotListedLocation',
    'Opacity',
    'OpenInBrowser',
    'OpenWith',
    'Pages',
    'Pageview',
    'Palette',
    'Panorama',
    'PanoramaFishEye',
    'PanoramaHorizontal',
    'PanoramaVertical',
    'PanoramaWideAngle',
    'PanTool',
    'PartyMode',
    'Pause',
    'PauseCircleFilled',
    'PauseCircleOutline',
    'PausePresentation',
    'Payment',
    'People',
    'PeopleOutline',
    'PermCameraMic',
    'PermContactCalendar',
    'PermDataSetting',
    'PermDeviceInformation',
    'PermIdentity',
    'PermMedia',
    'PermPhoneMsg',
    'PermScanWifi',
    'Person',
    'PersonalVideo',
    'PersonOutline',
    'PersonPin',
    'PersonPinCircle',
    'Pets',
    'Phone',
    'PhoneAndroid',
    'PhoneBluetoothSpeaker',
    'PhoneCallback',
    'PhoneForwarded',
    'PhoneInTalk',
    'PhoneIphone',
    'Phonelink',
    'PhonelinkErase',
    'PhonelinkLock',
    'PhonelinkRing',
    'PhonelinkSetup',
    'PhoneLocked',
    'PhoneMissed',
    'PhonePaused',
    'Photo',
    'PhotoAlbum',
    'PhotoCamera',
    'PhotoFilter',
    'PhotoLibrary',
    'PhotoSizeSelectActual',
    'PhotoSizeSelectLarge',
    'PhotoSizeSelectSmall',
    'PictureAsPdf',
    'PictureInPicture',
    'PictureInPictureAlt',
    'PieChart',
    'PinDrop',
    'Place',
    'PlayArrow',
    'PlayCircleFilled',
    'PlayCircleFilledWhite',
    'PlayCircleOutline',
    'PlayForWork',
    'PlaylistPlay',
    'Poll',
    'Polymer',
    'Pool',
    'Portrait',
    'Power',
    'PowerInput',
    'PregnantWoman',
    'PresentToAll',
    'Print',
    'PrintDisabled',
    'PriorityHigh',
    'Public',
    'Publish',
    'QueryBuilder',
    'QuestionAnswer',
    'Queue',
    'QueueMusic',
    'QueuePlayNext',
    'Radio',
    'RadioButtonChecked',
    'RadioButtonUnchecked',
    'RateReview',
    'Receipt',
    'RecentActors',
    'RecordVoiceOver',
    'Redeem',
    'Redo',
    'Refresh',
    'Remove',
    'RemoveCircle',
    'RemoveCircleOutline',
    'RemoveFromQueue',
    'RemoveRedEye',
    'RemoveShoppingCart',
    'Reorder',
    'Repeat',
    'Replay',
    'Replay10',
    'Replay30',
    'Replay5',
    'Reply',
    'ReplyAll',
    'Report',
    'ReportProblem',
    'Restaurant',
    'RestaurantMenu',
    'Restore',
    'RestoreFromTrash',
    'RestorePage',
    'RingVolume',
    'Room',
    'RoomService',
    'Rotate90DegreesCcw',
    'RotateLeft',
    'RotateRight',
    'Router',
    'Rowing',
    'RssFeed',
    'RvHookup',
    'Satellite',
    'Save',
    'SaveAlt',
    'Scanner',
    'ScatterPlot',
    'Schedule',
    'School',
    'Score',
    'ScreenLockLandscape',
    'ScreenLockPortrait',
    'ScreenLockRotation',
    'ScreenRotation',
    'ScreenShare',
    'SdCard',
    'SdStorage',
    'Search',
    'Security',
    'SelectAll',
    'Send',
    'SentimentDissatisfied',
    'SentimentSatisfied',
    'SentimentSatisfiedAlt',
    'SentimentVeryDissatisfied',
    'SentimentVerySatisfied',
    'Settings',
    'SettingsApplications',
    'SettingsBackupRestore',
    'SettingsBluetooth',
    'SettingsBrightness',
    'SettingsCell',
    'SettingsEthernet',
    'SettingsInputAntenna',
    'SettingsInputComponent',
    'SettingsInputComposite',
    'SettingsInputHdmi',
    'SettingsInputSvideo',
    'SettingsOverscan',
    'SettingsPhone',
    'SettingsPower',
    'SettingsRemote',
    'SettingsSystemDaydream',
    'SettingsVoice',
    'Share',
    'Shop',
    'ShoppingBasket',
    'ShoppingCart',
    'ShopTwo',
    'ShortText',
    'ShowChart',
    'Shuffle',
    'ShutterSpeed',
    'SimCard',
    'SkipNext',
    'SkipPrevious',
    'Slideshow',
    'SlowMotionVideo',
    'Smartphone',
    'SmokeFree',
    'SmokingRooms',
    'Sms',
    'SmsFailed',
    'Snooze',
    'Sort',
    'SortByAlpha',
    'Spa',
    'SpaceBar',
    'Speaker',
    'SpeakerGroup',
    'SpeakerNotes',
    'SpeakerPhone',
    'Spellcheck',
    'Star',
    'StarBorder',
    'StarHalf',
    'StarRate',
    'Stars',
    'StayCurrentLandscape',
    'StayCurrentPortrait',
    'StayPrimaryLandscape',
    'StayPrimaryPortrait',
    'Stop',
    'StopScreenShare',
    'Storage',
    'Store',
    'StoreMallDirectory',
    'Straighten',
    'Streetview',
    'StrikethroughS',
    'Style',
    'SubdirectoryArrowLeft',
    'SubdirectoryArrowRight',
    'Subject',
    'Subscriptions',
    'Subtitles',
    'Subway',
    'SupervisedUserCircle',
    'SupervisorAccount',
    'SurroundSound',
    'SwapCalls',
    'SwapHoriz',
    'SwapHorizontalCircle',
    'SwapVert',
    'SwapVerticalCircle',
    'SwitchCamera',
    'SwitchVideo',
    'Sync',
    'SyncDisabled',
    'SyncProblem',
    'SystemUpdate',
    'Tab',
    'TableChart',
    'Tablet',
    'TabletAndroid',
    'TabletMac',
    'TabUnselected',
    'TagFaces',
    'TapAndPlay',
    'Terrain',
    'TextFields',
    'TextFormat',
    'TextRotateUp',
    'TextRotateVertical',
    'TextRotationDown',
    'TextRotationNone',
    'Textsms',
    'Texture',
    'Theaters',
    'ThreeDRotation',
    'ThreeSixty',
    'ThumbDown',
    'ThumbDownAlt',
    'ThumbsUpDown',
    'ThumbUp',
    'ThumbUpAlt',
    'Timelapse',
    'Timeline',
    'Timer',
    'Timer10',
    'Timer3',
    'TimeToLeave',
    'Title',
    'Toc',
    'Today',
    'Toll',
    'Tonality',
    'TouchApp',
    'Toys',
    'TrackChanges',
    'Traffic',
    'Train',
    'Tram',
    'TransferWithinAStation',
    'Transform',
    'TransitEnterexit',
    'Translate',
    'TrendingDown',
    'TrendingFlat',
    'TrendingUp',
    'TripOrigin',
    'Tune',
    'TurnedIn',
    'TurnedInNot',
    'Tv',
    'Unarchive',
    'Undo',
    'UnfoldLess',
    'UnfoldMore',
    'Unsubscribe',
    'Update',
    'Usb',
    'VerifiedUser',
    'VerticalAlignBottom',
    'VerticalAlignCenter',
    'VerticalAlignTop',
    'VerticalSplit',
    'Vibration',
    'VideoCall',
    'Videocam',
    'VideogameAsset',
    'VideoLabel',
    'VideoLibrary',
    'ViewAgenda',
    'ViewArray',
    'ViewCarousel',
    'ViewColumn',
    'ViewComfy',
    'ViewCompact',
    'ViewDay',
    'ViewHeadline',
    'ViewList',
    'ViewModule',
    'ViewQuilt',
    'ViewStream',
    'ViewWeek',
    'Vignette',
    'Visibility',
    'VoiceChat',
    'Voicemail',
    'VolumeDown',
    'VolumeMute',
    'VolumeUp',
    'VpnKey',
    'VpnLock',
    'Wallpaper',
    'Warning',
    'Watch',
    'WatchLater',
    'Waves',
    'WbAuto',
    'WbCloudy',
    'WbIncandescent',
    'WbIridescent',
    'WbSunny',
    'Wc',
    'Web',
    'WebAsset',
    'Weekend',
    'Whatshot',
    'WhereToVote',
    'Widgets',
    'Wifi',
    'WifiLock',
    'WifiTethering',
    'Work',
    'WorkOutline',
    'WrapText',
    'YoutubeSearchedFor',
    'ZoomIn',
    'ZoomOut',
    'ZoomOutMap',
  ];

  public fontAwesomeIcons: string[] = [
    'Bed',
    'Bank',
    'Behance',
    'Behance-square',
    'Bomb',
    'Building',
    'Cab',
    'Car',
    'Child',
    'Circle-o-notch',
    'Circle-thin',
    'Codepen',
    'Cube',
    'Cubes',
    'Database',
    'Delicious',
    'Deviantart',
    'Digg',
    'Drupal',
    'Empire',
    'Envelope-square',
    'Fax',
    'File-archive-o',
    'File-audio-o',
    'File-code-o',
    'File-excel-o',
    'File-image-o',
    'File-movie-o',
    'File-pdf-o',
    'File-photo-o',
    'File-picture-o',
    'File-powerpoint-o',
    'File-sound-o',
    'File-video-o',
    'File-word-o',
    'File-zip-o',
    'Ge',
    'Git',
    'Git-square',
    'Google',
    'Graduation-cap',
    'Hacker-news',
    'Header',
    'History',
    'Institution',
    'Joomla',
    'Jsfiddle',
    'Language',
    'Life-bouy',
    'Life-ring',
    'Life-saver',
    'Mortar-board',
    'Openid',
    'Paper-plane',
    'paper-plane-o',
    'Paragraph',
    'Paw',
    'Pied-piper',
    'Pied-piper-alt',
    'Pied-piper-square',
    'Qq',
    'Ra',
    'Rebel',
    'Recycle',
    'Reddit',
    'Reddit-square',
    'Send',
    'Send-o',
    'Share-alt',
    'Share-alt-square',
    'Slack',
    'Sliders',
    'Soundcloud',
    'Space-shuttle',
    'Spoon',
    'Spotify',
    'Steam',
    'Steam-square',
    'Stumbleupon',
    'Stumbleupon-circle',
    'Support',
    'Taxi',
    'Tencent-weibo',
    'Tree',
    'University',
    'Vine',
    'Wechat',
    'Weixin',
    'Wordpress',
    'Yahoo',
  ];

  public toShakeCase(name: string) {
    return name[0].toLowerCase() + name.slice(1).replace(/[A-Z]/g, (m: string) => {
      return '_' + m.toLowerCase();
    });
  }

  public toFontAwesomeText(name: string): string {
    return 'fa-' + name.toLowerCase();
  }
}
