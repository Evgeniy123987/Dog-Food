import React, { useState } from "react"
import { useEffect } from "react"
import { CardList } from "../../components/App/CardList/CardList.jsx"
import { Footer } from "../../components/App/Footer/Footer.jsx"
import { Header } from "../../components/App/Header/Header.jsx"
import { SearchInfo } from "../../components/App/Search/Search.jsx"
import { Product } from "../../components/product/product.jsx"
import Spinner from "../../components/spinner/index.jsx"
import useDebounce from "../../hocs/useDebaunce.js"
import api from "../../utils/Api.jsx"

export const ProductPage = () => {

    const [cards, setCards] = useState([]);
    const [searchQuery, setSearcQuery] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState(null);

    const handleFormSubmit = (e) => {
        e.preventDefault();
      }

    const handleRecuest = (eventFromInput) => {
        setSearcQuery(eventFromInput.target.value);
      }

      const debounceSearchQuery = useDebounce(searchQuery, 2000);

      useEffect(() => {
        api.search(searchQuery.toUpperCase())
          .then((cardsFromApi) => {
            setCards(cardsFromApi)
              // .catch((err) => console.log(err))
          })
      }, [debounceSearchQuery])

      useEffect((productId) => {
        setIsLoading(true);
        api.getUserInfo().then((userData)=>setCurrentUser(userData)).catch((err)=>console.log('!!!!', err))
        api.getProductById(productId)
        .then((productData)=>setProduct(productData))
        .catch((err)=>console.log('err', err))
        .finally(()=>setIsLoading(false))
      },[]) 

      // function handleUpdateUser(userUpdateData) {
      //   api.setUserInfo(userUpdateData)
      //     .then(newUser => {
      //       console.log({ newUser });
      //       setCurrentUser(newUser)
    
      //     })
      // }



      const onProductLike = ()=>{}
      // const { productId } = useParams()
      // console.log(productId)
    return <>
        <div className="App">
            <Header changeInput={handleRecuest} user={currentUser} />
            <SearchInfo searchText={handleFormSubmit} searchCount={cards.length} />
            {isLoading ? <Spinner /> : <Product {...product} currentUser={currentUser} onProductLike={onProductLike}/>}
            <Footer />
        </div>
    </>
}