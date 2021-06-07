import ir35questions from '../components/ir35_tax/new-patern';

// Sidebar
export const SET_SIDEBAR_TOGGLE_MOBILE =
  'THEME_OPTIONS/SET_SIDEBAR_TOGGLE_MOBILE';

export const SET_SIDEBAR_SHADOW = 'THEME_OPTIONS/SET_SIDEBAR_SHADOW';
export const SET_SIDEBAR_STYLE = 'THEME_OPTIONS/SET_SIDEBAR_STYLE';
export const SET_SIDEBAR_FOOTER = 'THEME_OPTIONS/SET_SIDEBAR_FOOTER';
export const SET_SIDEBAR_TOGGLE = 'THEME_OPTIONS/SET_SIDEBAR_TOGGLE';
export const SET_SIDEBAR_FIXED = 'THEME_OPTIONS/SET_SIDEBAR_FIXED';
export const SET_SIDEBAR_USERBOX = 'THEME_OPTIONS/SET_SIDEBAR_USERBOX';
export const MINI_PROFILE = 'MINI_PROFILE';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const GET_IR35_QUESTIONS_SUCCESS = 'GET_IR35_QUESTIONS_SUCCESS';
export const GET_IR35_QUESTIONS = 'GET_IR35_QUESTIONS';
export const SET_NEXT_QUESTIONS = 'SET_NEXT_QUESTIONS';
export const SET_CHECKED_QUESTIONS = 'SET_CHECKED_QUESTIONS';
export const SET_EDIT_QUESTIONS = 'SET_EDIT_QUESTIONS';
export const SET_EDIT_QUESTIONS_ID = 'SET_EDIT_QUESTIONS_ID';
export const SET_LOADER = 'SET_LOADER';
export const SET_EDIT_DOC = 'SET_EDIT_DOC';
export const SET_PLACES_SEARCH = 'SET_PLACES_SEARCH';
export const SET_JOBS_SEARCH = 'SET_JOBS_SEARCH';

export const setSidebarShadow = (sidebarShadow) => ({
  type: SET_SIDEBAR_SHADOW,
  sidebarShadow
});
export const setSidebarFixed = (sidebarFixed) => ({
  type: SET_SIDEBAR_FIXED,
  sidebarFixed
});
export const setSidebarStyle = (sidebarStyle) => ({
  type: SET_SIDEBAR_STYLE,
  sidebarStyle
});
export const setSidebarFooter = (sidebarFooter) => ({
  type: SET_SIDEBAR_FOOTER,
  sidebarFooter
});
export const setSidebarToggleMobile = (sidebarToggleMobile) => ({
  type: SET_SIDEBAR_TOGGLE_MOBILE,
  sidebarToggleMobile
});
export const setSidebarToggle = (sidebarToggle) => ({
  type: SET_SIDEBAR_TOGGLE,
  sidebarToggle
});
export const setSidebarUserbox = (sidebarUserbox) => ({
  type: SET_SIDEBAR_USERBOX,
  sidebarUserbox
});

export const closeMiniProfile = (miniProfile) => ({
  type: MINI_PROFILE,
  miniProfile
});

export const setCloseModal = (closeModal) => ({
  type: CLOSE_MODAL,
  closeModal
});

export const getIr35QuestionsSuccess = (ir35answers) => ({
  type: GET_IR35_QUESTIONS_SUCCESS,
  ir35answers
});

export const onIr35Questions = (irQuestions) => ({
  type: GET_IR35_QUESTIONS,
  irQuestions
});

export const setNextQuestion = (nextQuestion) => ({
  type: SET_NEXT_QUESTIONS,
  nextQuestion
});

export const setChecked = (checked) => ({
  type: SET_CHECKED_QUESTIONS,
  checked
});

export const setEditMode = (editMode) => ({
  type: SET_EDIT_QUESTIONS,
  editMode
});

export const setQuestionId = (editQuestionId) => ({
  type: SET_EDIT_QUESTIONS_ID,
  editQuestionId
});

export const setLoader = (isLoading) => ({
  type: SET_LOADER,
  isLoading
});

export const setEditDoc = (editDoc) => ({
  type: SET_EDIT_DOC,
  editDoc
});

export const setPlacesSearch = (placesSearch) => ({
  type: SET_PLACES_SEARCH,
  placesSearch
});

export const setSearchResult = (searchResult) => ({
  type: SET_JOBS_SEARCH,
  searchResult
});

// Header

export const SET_HEADER_FIXED = 'THEME_OPTIONS/SET_HEADER_FIXED';
export const SET_HEADER_SHADOW = 'THEME_OPTIONS/SET_HEADER_SHADOW';
export const SET_HEADER_BG_TRANSPARENT =
  'THEME_OPTIONS/SET_HEADER_BG_TRANSPARENT';
export const SET_HEADER_SEARCH_HOVER = 'THEME_OPTIONS/SET_HEADER_SEARCH_HOVER';
export const SET_HEADER_DRAWER_TOGGLE =
  'THEME_OPTIONS/SET_HEADER_DRAWER_TOGGLE';

export const setHeaderFixed = (headerFixed) => ({
  type: SET_HEADER_FIXED,
  headerFixed
});
export const setHeaderShadow = (headerShadow) => ({
  type: SET_HEADER_SHADOW,
  headerShadow
});
export const setHeaderBgTransparent = (headerBgTransparent) => ({
  type: SET_HEADER_BG_TRANSPARENT,
  headerBgTransparent
});
export const setHeaderSearchHover = (headerSearchHover) => ({
  type: SET_HEADER_SEARCH_HOVER,
  headerSearchHover
});
export const setHeaderDrawerToggle = (headerDrawerToggle) => ({
  type: SET_HEADER_DRAWER_TOGGLE,
  headerDrawerToggle
});

// Main content

export const SET_CONTENT_BACKGROUND = 'THEME_OPTIONS/SET_CONTENT_BACKGROUND';
export const SET_THEME_CONFIGURATOR_TOGGLE =
  'THEME_OPTIONS/SET_THEME_CONFIGURATOR_TOGGLE';

export const setContentBackground = (contentBackground) => ({
  type: SET_CONTENT_BACKGROUND,
  contentBackground
});

export const setThemeConfiguratorToggle = (themeConfiguratorToggle) => ({
  type: SET_THEME_CONFIGURATOR_TOGGLE,
  themeConfiguratorToggle
});

// Footer

export const SET_FOOTER_FIXED = 'THEME_OPTIONS/SET_FOOTER_FIXED';
export const SET_FOOTER_SHADOW = 'THEME_OPTIONS/SET_FOOTER_SHADOW';
export const SET_FOOTER_BG_TRANSPARENT =
  'THEME_OPTIONS/SET_FOOTER_BG_TRANSPARENT';

export const setFooterFixed = (footerFixed) => ({
  type: SET_FOOTER_FIXED,
  footerFixed
});
export const setFooterShadow = (footerShadow) => ({
  type: SET_FOOTER_SHADOW,
  footerShadow
});
export const setFooterBgTransparent = (footerBgTransparent) => ({
  type: SET_FOOTER_BG_TRANSPARENT,
  footerBgTransparent
});

// Page title

export const SET_PAGE_TITLE_STYLE = 'THEME_OPTIONS/SET_PAGE_TITLE_STYLE';
export const SET_PAGE_TITLE_BACKGROUND =
  'THEME_OPTIONS/SET_PAGE_TITLE_BACKGROUND';
export const SET_PAGE_TITLE_SHADOW = 'THEME_OPTIONS/SET_PAGE_TITLE_SHADOW';
export const SET_PAGE_TITLE_ICON_BOX = 'THEME_OPTIONS/SET_PAGE_TITLE_ICON_BOX';
export const SET_PAGE_TITLE_DESCRIPTION =
  'THEME_OPTIONS/SET_PAGE_TITLE_DESCRIPTION';

export const setPageTitleStyle = (pageTitleStyle) => ({
  type: SET_PAGE_TITLE_STYLE,
  pageTitleStyle
});
export const setPageTitleBackground = (pageTitleBackground) => ({
  type: SET_PAGE_TITLE_BACKGROUND,
  pageTitleBackground
});
export const setPageTitleShadow = (pageTitleShadow) => ({
  type: SET_PAGE_TITLE_SHADOW,
  pageTitleShadow
});
export const setPageTitleIconBox = (pageTitleIconBox) => ({
  type: SET_PAGE_TITLE_ICON_BOX,
  pageTitleIconBox
});
export const setPageTitleDescription = (pageTitleDescription) => ({
  type: SET_PAGE_TITLE_DESCRIPTION,
  pageTitleDescription
});

export default function reducer(
  state = {
    // Sidebar

    sidebarFixed: true,
    sidebarFooter: true,
    sidebarShadow: false,
    sidebarStyle: 'app-sidebar--dark',
    sidebarUserbox: true,
    sidebarToggleMobile: false,
    sidebarToggle: false,

    // Header

    headerFixed: true,
    headerShadow: true,
    headerBgTransparent: true,
    headerSearchHover: false,
    headerDrawerToggle: false,

    // Main content

    contentBackground: '',
    themeConfiguratorToggle: false,

    // Footer

    footerFixed: false,
    footerShadow: false,
    footerBgTransparent: true,

    // Page title

    pageTitleStyle: '',
    pageTitleBackground: '',
    pageTitleShadow: false,
    pageTitleIconBox: true,
    pageTitleDescription: true,

    miniProfile: false,
    closeModal: false,
    nextQuestion: 0,
    irQuestions: ir35questions,
    ir35answers: [],
    editMode: false,
    editQuestionId: 0,
    isLoading: false,
    editDoc: {},
    placesSearch: [],
    searchResult: []
  },
  action
) {
  switch (action.type) {
    // Sidebar

    case SET_SIDEBAR_SHADOW:
      return {
        ...state,
        sidebarShadow: action.sidebarShadow
      };
    case SET_SIDEBAR_FIXED:
      return {
        ...state,
        sidebarFixed: action.sidebarFixed
      };
    case SET_SIDEBAR_STYLE:
      return {
        ...state,
        sidebarStyle: action.sidebarStyle
      };
    case SET_SIDEBAR_FOOTER:
      return {
        ...state,
        sidebarFooter: action.sidebarFooter
      };
    case SET_SIDEBAR_TOGGLE_MOBILE:
      return {
        ...state,
        sidebarToggleMobile: action.sidebarToggleMobile
      };
    case SET_SIDEBAR_TOGGLE:
      return {
        ...state,
        sidebarToggle: action.sidebarToggle
      };
    case SET_SIDEBAR_USERBOX:
      return {
        ...state,
        sidebarUserbox: action.sidebarUserbox
      };

    // Header

    case SET_HEADER_FIXED:
      return {
        ...state,
        headerFixed: action.headerFixed
      };
    case SET_HEADER_SHADOW:
      return {
        ...state,
        headerShadow: action.headerShadow
      };
    case SET_HEADER_BG_TRANSPARENT:
      return {
        ...state,
        headerBgTransparent: action.headerBgTransparent
      };
    case SET_HEADER_SEARCH_HOVER:
      return {
        ...state,
        headerSearchHover: action.headerSearchHover
      };
    case SET_HEADER_DRAWER_TOGGLE:
      return {
        ...state,
        headerDrawerToggle: action.headerDrawerToggle
      };

    // Main content

    case SET_CONTENT_BACKGROUND:
      return {
        ...state,
        contentBackground: action.contentBackground
      };
    case SET_THEME_CONFIGURATOR_TOGGLE:
      return {
        ...state,
        themeConfiguratorToggle: action.themeConfiguratorToggle
      };

    // Footer

    case SET_FOOTER_FIXED:
      return {
        ...state,
        footerFixed: action.footerFixed
      };
    case SET_FOOTER_SHADOW:
      return {
        ...state,
        footerShadow: action.footerShadow
      };
    case SET_FOOTER_BG_TRANSPARENT:
      return {
        ...state,
        footerBgTransparent: action.footerBgTransparent
      };

    // Page title

    case SET_PAGE_TITLE_STYLE:
      return {
        ...state,
        pageTitleStyle: action.pageTitleStyle
      };
    case SET_PAGE_TITLE_BACKGROUND:
      return {
        ...state,
        pageTitleBackground: action.pageTitleBackground
      };
    case SET_PAGE_TITLE_SHADOW:
      return {
        ...state,
        pageTitleShadow: action.pageTitleShadow
      };
    case SET_PAGE_TITLE_ICON_BOX:
      return {
        ...state,
        pageTitleIconBox: action.pageTitleIconBox
      };
    case SET_PAGE_TITLE_DESCRIPTION:
      return {
        ...state,
        pageTitleDescription: action.pageTitleDescription
      };

    case MINI_PROFILE:
      return {
        ...state,
        miniProfile: action.miniProfile
      };

    case CLOSE_MODAL:
      return {
        ...state,
        closeModal: action.closeModal
      };

    case GET_IR35_QUESTIONS_SUCCESS:
      return {
        ...state,
        ir35answers: action.ir35answers
      };

    case GET_IR35_QUESTIONS:
      return {
        ...state,
        irQuestions: action.irQuestions
      };

    case SET_NEXT_QUESTIONS:
      return {
        ...state,
        nextQuestion: action.nextQuestion
      };

    case SET_CHECKED_QUESTIONS:
      return {
        ...state,
        checked: action.checked
      };

    case SET_EDIT_QUESTIONS:
      return {
        ...state,
        editMode: action.editMode
      };

    case SET_EDIT_QUESTIONS_ID:
      return {
        ...state,
        editQuestionId: action.id
      };

    case SET_LOADER:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case SET_EDIT_DOC:
      return {
        ...state,
        editDoc: action.editDoc
      };

    case SET_PLACES_SEARCH:
      return {
        ...state,
        placesSearch: action.placesSearch
      };

    case SET_JOBS_SEARCH:
      return {
        ...state,
        searchResult: action.searchResult
      };

    default:
      break;
  }
  return state;
}
