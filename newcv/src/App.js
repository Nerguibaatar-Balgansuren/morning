import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const data = {
    title: {
      welcome: "Welcome to component and props corner",
      title: "React",
      subtitle: "Javascript Library",
    },
    // welcome: "Welcome to component and props corner",
    // title: "React",
    // subtitle: "Javascript Library",
    user: {
      firstname: "John",
      lastname: "Sedrick",
    },
    techskill: ["HTML", "JS", "CSS", "React"],
    date: new Date(),
   

    proIMG:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPL41UnOVTuYlONpTUTcFbRQJWGwGyrepqQ&usqp=CAU",
  };

  const greetPeople = () => {
    alert("Get this shit Done!");
  };

  const showDate = () => {
    let date = new Date();
    
    alert(date);
  };

  


  return (
    <div className="App">
      <Header
        // welcome = {data.welcome}
        headtitle={data.title}
        // subtitle = {data.subtitle}
        firstname={data.user.firstname}
        lastname={data.user.lastname}
      />
      <Main 
      date={data.date} 
      techskill={data.techskill}
      month = {data.date.toLocaleString('default', {month: 'long'})}
      proIMG = {data.proIMG}
      firstname = {data.user.firstname}
      lastname = {data.user.lastname}
      greetPeople = {greetPeople}
      showDate = {showDate}
       />

       <Footer 
       date = {data.date}
       />
    </div>
  );
}

export default App;
