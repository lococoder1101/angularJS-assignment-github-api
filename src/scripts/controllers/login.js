export const loginController = (
  $scope,
  githubService,
  $translate,
  $location
) => {
  $scope.login = () => {
    let auth = `Basic ${btoa(`${$scope.username}:${$scope.password}`)}`;

    githubService
      .authentication(auth)
      .then(
        (data) => {
          githubService.storeToken($scope.username,$scope.password);
          $location.path(`/dashboard`);
          $location.replace();
        },
        (error) => {
          alert(error.message);
        }
      )
      .finally(() => {
        $scope.username = '';
        $scope.password = '';
      });
  };


  $scope.setLocale = (locale,dir) => {
    document.getElementById('login').dir=dir;
    $translate.use(locale);
  };
};

export default loginController;
