import React from "react";

import NewMangaForm from "./Home";
import MangaContextProvider from "../contexts/MangaContext";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import ReadingTitle from "./ReadingTitle";
import MangaList from "./MangaList";

function MangaForm() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://graphql.anilist.co",
  });
  return (
    <div className="App">
      {/* <MangaContextProvider> */}
      {/* main goes here */}
      {/* <ReadingTitle />
      <MangaList /> */}

      <ApolloProvider client={client}>
        <NewMangaForm />
      </ApolloProvider>
      {/* </MangaContextProvider> */}
    </div>
  );
}

export default MangaForm;

// function App() {

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
