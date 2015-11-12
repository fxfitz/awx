/*************************************************
 * Copyright (c) 2015 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

import authenticationService from './authentication.service';
import checkAccess from './checkAccess.factory';
import isAdmin from './isAdmin.factory';
import timer from './timer.factory';
import pendoService from './pendo.service';

export default
    angular.module('authentication', [])
        .factory('Authorization', authenticationService)
        .factory('CheckAccess', checkAccess)
        .factory('IsAdmin', isAdmin)
        .factory('Timer', timer)
        .service('pendoService', pendoService);