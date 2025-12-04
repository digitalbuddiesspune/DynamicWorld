import { Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import EntityListPage from "./pages/EntityListPage";
import NewsPage from "./pages/NewsPage";
import NotFound from "./pages/NotFound";
import { entityDefinitions } from "./data/entities";

const App = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="news" element={<NewsPage />} />
      {entityDefinitions
        .filter((entity) => entity.id !== "news")
        .map((entity) => (
          <Route
            key={entity.id}
            path={entity.path.replace(/^\//, "")}
            element={<EntityListPage />}
          />
        ))}
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
