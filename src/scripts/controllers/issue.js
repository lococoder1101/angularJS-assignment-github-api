export const issueController = (
  $scope,
  $routeParams,
  githubService,
  $location
) => {
  $scope.name = $routeParams.name;
  $scope.user = $routeParams.user;

  githubService.find($scope.user, $scope.name).then((res) => {
    $scope.repo = res.data;
  });

  githubService.issues($scope.user, $scope.name).then((response) => {
    $scope.data = response.data;
  });

  $scope.fork = () => {
    githubService.fork($scope.user, $scope.name).then((response) => {
      $location.path(`/dashboard`);
      $location.replace();
    });
  };
};

export default issueController;
