import LoginButton from '../components/LoginButton';

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to Shield Dashboard</h1>
      <p className="mb-4">Login to manage your bot</p>
      <LoginButton />
    </div>
  );
}

export default Login;
