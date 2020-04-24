import './theme/base.scss';
import angular from 'angular';
import { ngRoute, $routeProvider } from 'angular-route';
import { translate, $translateProvider } from 'angular-translate';
import homeController from './scripts/controllers/home';
import dashboardController from './scripts/controllers/dashboard';
import repositoryController from './scripts/controllers/repository';
import loginController from './scripts/controllers/login';
import headerController from './scripts/controllers/header';
import gistController from './scripts/controllers/gist';
import updateGistController from './scripts/controllers/updateGist';
import issueController from './scripts/controllers/issue';
import updateIssueController from './scripts/controllers/updateIssue';
import searchController from './scripts/controllers/search';
import routing from './scripts/config';
import translation from './scripts/translation';
import githubService from './scripts/services';

const app = angular.module('myApp', ['ngRoute', 'pascalprecht.translate']);

app.controller('homeController', homeController);
app.controller('dashboardController', dashboardController);
app.controller('loginController', loginController);
app.controller('repositoryController', repositoryController);
app.controller('issueController', issueController);
app.controller('updateIssueController', updateIssueController);
app.controller('gistController', gistController);
app.controller('updateGistController', updateGistController);
app.controller('searchController', searchController);

app.controller('headerController', headerController);
app.directive('header', [
  '$rootScope',
  '$location',
  'githubService',
  headerController,
]);

app.service('githubService', ['$http', githubService]);

app.config(translation);
app.config(routing);
