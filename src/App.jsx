import Header from "./components/layout/Header";
import Main from "./components//layout/Main";
import Footer from "./components/layout/Footer";

import comics from "./assets/data/comics";

export default function App() {
  return (
    <>
      <Header />
      <Main comics={comics}></Main>
      <Footer />
    </>
  );
}
