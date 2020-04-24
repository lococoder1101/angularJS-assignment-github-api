export const gistController = ($scope, $routeParams, githubService) => {
  $scope.user = $routeParams.user;

  githubService.gists().then((response) => {
    $scope.data = response.data;
  });
};

export default gistController;
