import style from "../../styles/login.module.sass";
import FacebookLogin from "react-facebook-login";
import { useRouter } from "next/router";
import GoogleLogin from "react-google-login";
import { GetServerSideProps } from "next";
interface ILoginProps {
  googleId: string;
  facebookId: string;
}
export default function Login(props: ILoginProps) {
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
              appId={props.facebookId}
              callback={callBackSocial}
            ></FacebookLogin>
          </div>
          <div className={style.google}>
            <GoogleLogin
              clientId={props.googleId}
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

export const getServerSideProps: GetServerSideProps<ILoginProps> = async () => {
  return {
    props: {
      googleId: process.env.ClIENT_ID_GOOGLE,
      facebookId: process.env.ClIENT_ID_FACEBOOK,
    },
  };
};
