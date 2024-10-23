import "./App.css";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import RecipeContent from "./Components/RecipeContent";
import Recipes from "./Components/Recipes";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <>
      {/* header nav */}
      <Nav></Nav>

      {/* banner  */}
      <Banner></Banner>

      {/* recipes */}

      <RecipeContent></RecipeContent>

      {/* recipes card */}
      <section className="flex flex-col md:flex-row gap-6 w-11/12 mx-auto mt-12 pb-12">
        {/* card section */}
        <Recipes></Recipes>

        {/* sidebar section */}
        <SideBar></SideBar>
      </section>
    </>
  );
}

export default App;
