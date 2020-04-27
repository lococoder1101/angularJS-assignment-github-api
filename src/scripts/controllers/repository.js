export const repositoryController = (
  $scope,
  $routeParams,
  githubService,
  $location
) => {
  $scope.name = $routeParams.name;
  $scope.user = $routeParams.user;
  $scope.filePath = $routeParams.filePath;
  githubService.find($scope.user, $scope.name).then((res) => {
    $scope.repo = res.data;
  });

  if (githubService.getCookie('user') === $scope.user) {
  }

  githubService
    .content($scope.user, $scope.name, $scope.filePath)
    .then((response) => {
      $scope.isBlob = !Array.isArray(response.data);

      if ($scope.isBlob) {
        $scope.blob = response.data;
        $scope.blob.content = atob($scope.blob.content).replace(/\n/g, '<br/>');
      } else {
        $scope.data = response.data;
        $scope.data
          .sort((a, b) => (a.type < b.type ? 1 : -1))
          .sort((a, b) => (a - b ? -1 : 1))
          .reverse();
      }
    });

  $scope.fork = () => {
    githubService.fork($scope.user, $scope.name).then((response) => {
      $location.path(`/dashboard`);
      $location.replace();
    });
  };
};

export default repositoryController;
