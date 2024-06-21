import Newsmania from "./Components/Newsmania";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const App = ()=>{
    return <div className="bg-gradient-to-r from-green-100 via-green-400 to-green-900">
    <Navbar/>
    <Newsmania />
    <Footer/>
    </div>
}

export default App;