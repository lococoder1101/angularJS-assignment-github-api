export const translation = ($translateProvider) => {
  $translateProvider.translations('en', {
    LOGIN: 'Login',
    USERNAME: 'Username',
    PASSWORD: 'Password',
    SUBMIT: 'Submit',
    SIGNUP: 'Sign Up',
    DONT_ACCOUNT: "Don't have an account?",
    FORGET_PASSWORD: 'Forgot your password?',
    HOME: 'Home',
    DASHBOARD: 'Dashboard',
    ABOUT: 'About Us',
  });

  $translateProvider.translations('fa', {
    LOGIN: 'ورود',
    USERNAME: 'نام کاربری',
    PASSWORD: 'گذرواژه',
    SUBMIT: 'ثبت',
    SIGNUP: 'تبت نام',
    DONT_ACCOUNT: 'نام کاربری ندارید؟',
    FORGET_PASSWORD: 'گذرواژه خود را فراموش کرده اید؟',
    HOME: 'خانه',
    DASHBOARD: 'دشبورد',
    ABOUT: 'درباره ما',
  });
  
  $translateProvider.preferredLanguage('en');
};
export default translation;
