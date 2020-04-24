export const updateGistController = (
  $scope,
  $routeParams,
  githubService,
  $location
) => {
  $scope.user = $routeParams.user;
  $scope.id = $routeParams.id;
  $scope.updateMode = false;

  if ($scope.id) {
    $scope.updateMode = true;

    githubService.gist($scope.id).then((response) => {
      $scope.data = response.data;
      for (let [key, value] of Object.entries($scope.data.files)) {
        $scope.data.filename = key;
        $scope.data.fileContent = value.content;
        return;
      }
    });
  }
  $scope.setGist = () => {
    $scope.gist = {
      description: $scope.data.description,
      public: true,

      files: {
        [$scope.data.filename]: {
          content: $scope.data.fileContent,
        },
      },
    };
    githubService.setGist($scope.gist).then((response) => {
      $location.path(`/gist/${$scope.user}`);
      $location.replace();
    });
  };
};

export default updateGistController;
