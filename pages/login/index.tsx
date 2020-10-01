import style from "../../styles/login.module.sass";
import FacebookLogin from "react-facebook-login";
import { useRouter } from "next/router";
import GoogleLogin from "react-google-login";
export default function Login() {
  const Router = useRouter();
  const callBackSocial = (response) => {
    localStorage.setItem("accessToken", response.accessToken);
    redirect();
  };

  const redirect = () => {
    void Router.push("/", undefined, { shallow: true });
  };
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.text}>LOGIN</div>
        <form
          onSubmit={() => {
            localStorage.setItem("accessToken", "manual");
            redirect();
          }}
        >
          <input required type="text" placeholder="Username"></input>
          <input required type="password" placeholder="Password"></input>
          <div className={style.signInAndCheckBox}>
            <div className={style.checkBox}>
              <input id="remember-me" type="checkBox"></input>
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <button className={style.signIn}>
              <span>Sign In</span>
            </button>
          </div>
          <div className={style.facebook}>
            <FacebookLogin
              appId={process.env.ClIENT_ID_FACEBOOK}
              callback={callBackSocial}
            ></FacebookLogin>
          </div>
          <div className={style.google}>
            <GoogleLogin
              clientId={process.env.ClIENT_ID_GOOGLE}
              buttonText="Login"
              onSuccess={callBackSocial}
              onFailure={callBackSocial}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
