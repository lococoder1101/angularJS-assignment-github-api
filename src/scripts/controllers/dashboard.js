export const dashboardController = ($scope, githubService) => {
  $scope.selected = 'all';
  
  githubService
  .authentication(githubService.getCookie('access_token'))
  .then((res) => {
    $scope.user = res.data;
  });

  githubService.findAll($scope.selected).then((response) => {
    $scope.rawData = response.data;
    $scope.data = $scope.rawData;

    $scope.data.forEach((repo, index) => {
      githubService.find(repo.owner.login, repo.name).then((res) => {
        index > 0 ? ($scope.data[index].info = res.data) : true;
      });
    });
  });

  $scope.sort = () => {
    switch ($scope.selected) {
      case 'fork':
        $scope.data = $scope.rawData.filter((item) => {
          return item.fork == true;
        });
        break;
      case 'public':
        $scope.data = $scope.rawData.filter((item) => {
          return item.private == false;
        });
        break;
      case 'private':
        $scope.data = $scope.rawData.filter((item) => {
          return item.private == true;
        });
        break;
      default:
        $scope.data = $scope.rawData;
    }
  };

  $scope.filter = () => {
    $scope.data = $scope.rawData.filter((item) => {
      return item.name.toLowerCase().includes($scope.question.toLowerCase());
    });
  };


};
export default dashboardController;
