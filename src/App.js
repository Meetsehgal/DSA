import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MainNavbar from "./Components/MainNavbar/MainNavbar";
import AboutUs from "./Pages/AbouUs";
import TestimonialSection from "./Components/Home/TestimonialSection/TestimonialSection";
import GroupWebsites from "./Components/Home/GroupWebsites/GroupWebsites";
import EditionsPage from "./Components/MagazinePage/EditionsPage/EditionsPage";
import ArticlesPage from "./Components/MagazinePage/ArticlesPage/ArticlesPage";
import PodcastEventsPage from "./Components/MagazinePage/PodcastEventsPage/PodcastEventsPage";
import DefSecEduPage from "./Components/MagazinePage/DefSecEdu/DefSecEduPage";
import NewsletterPage from "./Components/NewsletterPage/NewsletterPage";
import NewsDetailSection from "./Components/NewsletterPage/NewsPage/NewsDetailSection/NewsDetailSection";
import NewsPage from "./Components/NewsletterPage/NewsPage/NewsPage";
import ArticlePage from "./Components/NewsletterPage/ArticlePage/ArticlePage";
import AlertPage from "./Components/NewsletterPage/AlertPage/AlertPage";
import DefSecWivesPage from "./Components/NewsletterPage/DefSecWivesPage/DefSecWivesPage";
import HomeMaster from "./AdminPanel/HomeMaster";
import LoginPage from "./AdminPanel/LoginPage";
import AdminNav from "./AdminPanel/AdminNav";
import ContactUs from "./Components/ContactUs/ContactUs";
import MainFooter from "./Components/MainFooter/MainFooter";
import Provider from "./Helpers/Store/Store";
import MagazinePage from "./Components/MagazinePage/MagazinePage";
import Services from "./Pages/Services";
import ArticleDetails from "./Components/MagazinePage/ArticlesPage/ArticleDetails";
import FlipBook from "./Components/FlipBook/FlipBook";

function App() {
  // const location = useLocation();
  const WebsiteLayout = () => (
    <div>
      <MainNavbar />
      <Outlet />
      <MainFooter />
      {/* {window.location.pathname === '/' ? " " : <TestimonialSection />}
      {window.location.pathname === '/' ? " " : <GroupWebsites />} */}
    </div>
  );

  const AdminLayout = () => (
    <div>
      {window.location.pathname === "/admin" ? " " : <AdminNav />}
      <Outlet />
    </div>
  );
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          {/* Website */}
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="magazine" element={<MagazinePage />} />
            <Route path="editions" element={<EditionsPage />} />
            <Route path="articles" element={<ArticlesPage />} />
            <Route path="article/:id" element={<ArticleDetails />} />
            <Route path="podcast-and-events" element={<PodcastEventsPage />} />
            <Route path="def-sec-edu" element={<DefSecEduPage />} />
            <Route path="services" element={<Services />} />

            <Route path="newsletter" element={<NewsletterPage />} />
            <Route path="newsletter-news" element={<NewsPage />} />
            <Route path="newsletter-article-page" element={<ArticlePage />} />
            <Route path="newsletter-alert-page" element={<AlertPage />} />
            <Route path="newsletter-def-page" element={<DefSecWivesPage />} />
            <Route path="news/:id" element={<NewsDetailSection />} />
            <Route path="flip-book" element={<FlipBook />} />
          </Route>
          {/* Admin Panel */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<LoginPage />} />
            <Route path="home-master" element={<HomeMaster />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
