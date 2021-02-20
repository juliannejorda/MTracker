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
      <Routes />
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
