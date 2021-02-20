import "./App.css";
// import NewMangaForm from "./Pages/Home";
// import MangaContextProvider from "./contexts/MangaContext";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   HttpLink,
// } from "@apollo/client";
// import ReadingTitle from "./Pages/ReadingTitle";
// import MangaList from "./Pages/MangaList";
import Navigation from "./Pages/Navbar";
import Routes from "./Pages/Routes";
import {
  Router,
  Switch,
  Route,
  HashRouter,
  BrowserRouter,
} from "react-router-dom";
import history from "./Pages/history";

function App() {
  // const client = new ApolloClient({
  //   cache: new InMemoryCache(),
  //   uri: "https://graphql.anilist.co",
  // });
  return (
    <div className="App">
      {/* <MangaContextProvider>
        {/* main goes here */}
      {/* <ReadingTitle />
        <MangaList /> */}
      {/* 
        <ApolloProvider client={client}>
          <NewMangaForm />
        </ApolloProvider>
      </MangaContextProvider> */}{" "}
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;

// import "./App.css";
// import NewMangaForm from "./Pages/Home";
// import MangaContextProvider from "./contexts/MangaContext";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   HttpLink,
// } from "@apollo/client";
// import ReadingTitle from "./Pages/ReadingTitle";
// import MangaList from "./Pages/MangaList";

// function App() {
//   const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     uri: "https://graphql.anilist.co",
//   });
//   return (
//     <div className="App">
//       <MangaContextProvider>
//         {/* main goes here */}
//         <ReadingTitle />
//         <MangaList />

//         <ApolloProvider client={client}>
//           <NewMangaForm />
//         </ApolloProvider>
//       </MangaContextProvider>
//     </div>
//   );
// }

// export default App;
