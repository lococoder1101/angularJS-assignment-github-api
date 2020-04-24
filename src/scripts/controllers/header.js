import header from '../../templates/header.html';
export const headerController = ($rootScope, $location, githubService) => {
  $rootScope.search = () => {
    $location.path(`/search/${$rootScope.questionAll}`);
    $location.replace();
  };

  $rootScope.toggelHeader = () => {
    let nav = document.getElementById('myTopnav');
    if (nav.className === 'topnav') {
      nav.className += ' responsive';
    } else {
      nav.className = 'topnav';
    }
  };

  $rootScope.username = githubService.getCookie('user');
  $rootScope.logout = () => {
    githubService.setCookie('access_token', '', 6000);
    githubService.setCookie('user', '', 6000);
    $location.path(`/`);
    $location.replace();
  };

  return {
    template: header,
    rootScope: {},
  };
};

export default headerController;
