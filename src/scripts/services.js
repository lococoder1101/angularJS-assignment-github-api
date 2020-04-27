export class githubService {
  apiRoot = 'https://api.github.com';
  gistRoot = 'https://gist.github.com';

  constructor($http) {
    this.$http = $http;
    this.$http.defaults.headers.common.Authorization = this.getCookie(
      'access_token'
    );
  }

  authentication(auth) {
    this.$http.defaults.headers.common.Authorization = auth;
    return this.$http.get(`${this.apiRoot}/user`, {
      headers: {
        Authorization: auth,
      },
    });
  }

  findAll(type = '') {
    return this.$http.get(
      `${this.apiRoot}/user/repos?page=1&per_page=100&type=${type}`
    );
  }

  find(user, name) {
    return this.$http.get(`${this.apiRoot}/repos/${user}/${name}`);
  }

  filter(question, user = '') {
    return this.$http.get(
      `${this.apiRoot}/search/repositories?user=${user}&q=${question}&page=1&per_page=10`
    );
  }

  content(user, name, path = '') {
    return this.$http.get(
      `${this.apiRoot}/repos/${user}/${name}/contents/${path}`
    );
  }

  fork(user, name) {
    return this.$http.post(`${this.apiRoot}/repos/${user}/${name}/forks`);
  }

  setIssue(user, name, issue) {
    return this.$http.post(
      `${this.apiRoot}/repos/${user}/${name}/issues`,
      issue
    );
  }

  issues(user, name) {
    return this.$http.get(`${this.apiRoot}/repos/${user}/${name}/issues`);
  }

  issue(user, name, number) {
    return this.$http.get(
      `${this.apiRoot}/repos/${user}/${name}/issues/${number}`
    );
  }

  gist(id) {
    return this.$http.get(`${this.apiRoot}/gists/${id}`);
  }

  gists() {
    return this.$http.get(`${this.apiRoot}/gists`);
  }

  setGist(body) {
    return this.$http.post(`${this.apiRoot}/gists`, body);
  }

  storeToken = (username, password) => {
    let auth = `Basic ${btoa(`${username}:${password}`)}`;
    const tokenLifespan = 20000 * 1000;
    this.setCookie('access_token', auth, tokenLifespan);
    this.setCookie('user', username, tokenLifespan);
  };

  getCookie(name) {
    const cookie = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return cookie ? cookie[2] : null;
  }

  setCookie = (name, value, duration = 20000) => {
    const now = new Date();
    now.setTime(now.getTime() + duration);
    document.cookie = `${name}=${value};path=/;expires=${now.toUTCString()}`;
  };
}

export default githubService;
