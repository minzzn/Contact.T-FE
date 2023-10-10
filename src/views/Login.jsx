export const Login = () => {

  const bringData = async () => {
    const response = await fetch("43.202.161.139:8080/");

    console.log(response);
  }

  bringData();

  return <h1>It's Login Page</h1>;
};
