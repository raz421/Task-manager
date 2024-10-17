// import Footer from "./Component/Footer/footer"
import Footer from "./Component/Footer/footer"
import Header from "./Component/Header/Header"
import Hero from "./Component/Hero/Hero"
import TaskBoard from "./Component/Task-List/TaskBord"


function App() {
  return (
    <>
  <h3>hello react</h3>
     <Header></Header>
    <div className="flex flex-col justify-center items-center">
    <Hero></Hero>
    <TaskBoard></TaskBoard>
    </div>
     <Footer></Footer>
    </>
  )
}

export default App
