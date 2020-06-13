import Vue from 'vue'

/**
 * Fontawesome svg/core and component
 */
import {
    library
} from '@fortawesome/fontawesome-svg-core'

import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

/**
 * Import utilised icons
 */
//
import {
    faUserCircle,
    faCheckCircle
} from '@fortawesome/free-regular-svg-icons'

//
import {
    faUser,
    faSquare,
    faImage,
    faRedo,
    faSignInAlt,
    faSignOutAlt,
    faHome,
    faRocket,
    faLock,
    faHandshake,
    faUserPlus,
    faEnvelope,
    faPhone,
    faEye,
    faEyeSlash,
    faUserSecret,
    faFileContract,
    faCookieBite,
    faTimes,
    faServer,
    faAngleDown,
    faLink,
    faGlobe,
    faPlus
} from '@fortawesome/free-solid-svg-icons'

/**
 * Apply icons
 */
library.add(
    faUserCircle,
    faCheckCircle,
    faUser,
    faSquare,
    faImage,
    faRedo,
    faSignInAlt,
    faSignOutAlt,
    faHome,
    faRocket,
    faLock,
    faHandshake,
    faUserPlus,
    faEnvelope,
    faPhone,
    faEye,
    faEyeSlash,
    faUserSecret,
    faFileContract,
    faCookieBite,
    faTimes,
    faServer,
    faAngleDown,
    faLink,
    faGlobe,
    faPlus
)

// apply <fa icon="..." spin></fa> component
Vue.component('fa', FontAwesomeIcon)
