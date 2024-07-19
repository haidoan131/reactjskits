import Header from "./components/header/Header"
import {Main1,Main2} from "./components/main/Main"
import Footer from "./components/footer/Footer"
import Main from "./components/main/Main"
import Hook from "./components/hook/Hook"
import Hook2 from "./components/hook/Hook2"
function App() {

    const name="hải"
    const age=25
    return(
        <div>
           {/* <Header/>
        <Main1/>
        <Main2/>
        <Footer nam1={name} age1={age}/> */}
        <Hook/>
        <Hook2/>
        
        </div>

    )
}

export default App;