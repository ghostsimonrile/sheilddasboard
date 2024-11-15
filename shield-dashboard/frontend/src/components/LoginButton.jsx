function LoginButton() {
  const handleLogin = () => {
    window.location.href = '/auth/discord';
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-800 transition text-white font-medium"
    >
      Login with Discord
    </button>
  );
}

export default LoginButton;
