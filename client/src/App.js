import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App w-[100vw] h-[100vh] flex flex-col justify-center items-center">
      <div className="image_container w-64 h-auto">
        <img src={logo} alt="logo" />
      </div>
      <p className="text-2xl select-none">yo!</p>
    </div>
  );
}

export default App;
