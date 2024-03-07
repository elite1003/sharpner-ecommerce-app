import classes from "./ProfileForm.module.css";
import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
const ProfileForm = () => {
  const passwordInputRef = useRef(null);
  const authCtx = useContext(AuthContext);
  const { token } = authCtx;

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredPassword = passwordInputRef.current.value;

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBK8Hfm1ccNpEEMJ0Zi6Og3o-jwrbwt-JM",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: token,
            password: enteredPassword,
            returnSecureToken: false,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
