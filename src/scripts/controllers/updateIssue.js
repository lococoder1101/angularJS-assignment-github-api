export const updateIssueController = (
  $scope,
  $routeParams,
  githubService,
  $location
) => {
  $scope.name = $routeParams.name;
  $scope.user = $routeParams.user;
  $scope.number = $routeParams.number;
  $scope.updateMode = false;

  if ($scope.number) {
    $scope.updateMode = true;
    githubService
      .issue($scope.user, $scope.name, $scope.number)
      .then((response) => {
        $scope.data = response.data;
      });
  }

  githubService.find($scope.user, $scope.name).then((res) => {
    $scope.repo = res.data;
  });

  $scope.fork = () => {
    githubService.fork($scope.user, $scope.name).then((response) => {
      $location.path(`/dashboard`);
      $location.replace();
    });
  };

  $scope.setIssue = () => {
    $scope.issue = {
      body: $scope.data.body,
      title: $scope.data.title,
    };
    githubService
      .setIssue($scope.user, $scope.name, $scope.issue)
      .then((response) => {
        $location.path(`/repository/${$scope.user}/${$scope.name}/issues`);
        $location.replace();
      });
  };
};

export default updateIssueController;
