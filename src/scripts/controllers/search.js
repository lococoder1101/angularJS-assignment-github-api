export const searchController = ($scope, githubService, $routeParams) => {
  $scope.questionAll = $routeParams.question;
  $scope.findAllRepository = () => {
    githubService.filter($scope.questionAll, null).then((response) => {
      $scope.data = response.data.items;
      $scope.data.forEach((repo, index) => {
        githubService.find(repo.owner.login, repo.name).then((res) => {
          index > 0 ? ($scope.data[index].info = res.data) : true;
        });
      });
    });
  };
  $scope.findAllRepository();
};

export default searchController;
