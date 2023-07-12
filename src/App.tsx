import { Provider } from 'react-redux';
import {Routes, Route} from 'react-router-dom';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import store from './store';
import FormPage from './pages/FormPage';
import ArticlePage from './pages/backOffice/articles/ArticlePage';
import AddArticle from './pages/backOffice/articles/AddArticle';
import UpdateArticle from './pages/backOffice/articles/UpdateArticle';
import HomeBack from './pages/backOffice/HomeBack';
import CategoryPage from './pages/backOffice/categories/CategoryPage';
import AddCategory from './pages/backOffice/categories/AddCategory';
import UpdateCategory from './pages/backOffice/categories/UpdateCategory';
import LoginPage from './pages/users/login';




function App() {

  
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='cart' element={ <CartPage />} />
        <Route path='/form' element= {<FormPage />} />
        <Route path='/homeback' element={<HomeBack />} />
        <Route path='/articles' element={<ArticlePage />} />
        <Route path='/addArticle' element={<AddArticle />} />
        <Route path='/updateArticle/:id' element={<UpdateArticle />} />
        <Route path='/categories' element={<CategoryPage />} />
        <Route path='/addCategory' element={<AddCategory />} />
        <Route path='/updateCategory/:id' element={<UpdateCategory />} />

        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
