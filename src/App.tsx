import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      <Header />
      <div className="pt-16">
        {" "}
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
