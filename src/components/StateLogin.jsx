import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));
  //   const [enteredValue, setEnteredValue] = useState({
  //     email: "",
  //     password: "",
  //   });

  //   const [didEdit, setDidEdit] = useState({
  //     email: false,
  //     password: false,
  //   });

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue);
  }

  //   function handleInputChange(identifier, value) {
  //     setEnteredValue((prevValues) => ({
  //       ...prevValues,
  //       [identifier]: value,
  //     }));
  //     setDidEdit((prevEdit) => ({
  //       ...prevEdit,
  //       [identifier]: false,
  //     }));
  //   }

  //   function handleInputBlur(identifier) {
  //     setDidEdit((prevEdit) => ({
  //       ...prevEdit,
  //       [identifier]: true,
  //     }));
  //   }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "Please enter a valid Password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
