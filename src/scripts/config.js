import homeTempalte from '../templates/home.html';
import dashboardTemplate from '../templates/dashboard.html';
import repositoryTemplate from '../templates/repository.html';
import gistTemplate from '../templates/gist.html';
import updateGistTemplate from '../templates/updateGist.html';
import issueTemplate from '../templates/issue.html';
import updateIssueTemplate from '../templates/updateIssue.html';
import loginTemplate from '../templates/login.html';
import searchTemplate from '../templates/search.html';

export const routing = ($routeProvider, $locationProvider) => {
  $locationProvider.html5Mode(true);
  $locationProvider;
  $routeProvider
    .when('/home', {
      template: homeTempalte,
      controller: 'homeController',
    })
    .when('/dashboard', {
      template: dashboardTemplate,
      controller: 'dashboardController',
    })
    .when('/login', {
      template: loginTemplate,
      controller: 'loginController',
    })
    .when('/repository/:user/:name/content', {
      template: repositoryTemplate,
      controller: 'repositoryController',
    })
    .when('/repository/:user/:name/content/:filePath*', {
      template: repositoryTemplate,
      controller: 'repositoryController',
    })
    .when('/repository/:user/:name/blob/:filePath*', {
      template: repositoryTemplate,
      controller: 'repositoryController',
    })
    .when('/repository/:user/:name/issues', {
      template: issueTemplate,
      controller: 'issueController',
    })
    .when('/repository/:user/:name/issues/new', {
      template: updateIssueTemplate,
      controller: 'updateIssueController',
    })
    .when('/repository/:user/:name/issues/:number', {
      template: updateIssueTemplate,
      controller: 'updateIssueController',
    })
    .when('/gist/:user', {
      template: gistTemplate,
      controller: 'gistController',
    })
    .when('/gist/:user/new', {
      template: updateGistTemplate,
      controller: 'updateGistController',
    })
    .when('/gist/:user/:id', {
      template: updateGistTemplate,
      controller: 'updateGistController',
    })
    .when('/search/:question', {
      template: searchTemplate,
      controller: 'searchController',
    })
    .otherwise({
      redirectTo: '/login',
    });
};

export default routing;
