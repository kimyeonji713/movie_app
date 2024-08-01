import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Header } from "./components/Header";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { Search } from "./pages/search/Search";
import { Signup } from "./pages/Signup";
import { GenresList } from "./pages/List/GenreList";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signup} element={<Signup />} />
        <Route path={routes.genre} element={<GenresList />} />

        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
