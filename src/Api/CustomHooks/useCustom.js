import { useState, useEffect, useCallback } from 'react';
import axios from 'axios'  
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux-manager/actions';
import { useSelector } from 'react-redux';


const useCustom = () => {
    const dispatch = useDispatch(); 
    // const baseUrl = "https://swapi.dev/api/";
    const baseUrl = "https://jsonplaceholder.typicode.com/";
    const [loader, setLoader] = useState(false)
    const [allRoots, setAllRoots] = useState([])
    const [rootName, setRootName] = useState('')
    const [array, setArray] = useState([])
    const [counter, setCounter] = useState(0)

    
    useEffect(() => {
        array.length > 0 && dispatch(addToCart(array));
        if(array.length === 0 && counter > 0) dispatch(addToCart(array));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [array])
    
    
    const PersistedCart = useSelector(state => state.Cart)

    useEffect(() => {
        setArray(PersistedCart.items)
    }, [PersistedCart.items])

    const handlePeopleFavorite = (item) => {
        console.log(allRoots, 'iteeeeeeem');
        const list = [...allRoots];
        const curItem = list.find(el => el.name === item.name);
        curItem.isLike = !curItem.isLike;
        // setAllRoots(() => list);
        if(curItem.isLike) {
            console.log(array, 'arrayarray')
            const found = array.find(item => item.name === curItem.name)
            if(array.length > 0 && found) {
                const check = array.filter(item => item.name !== curItem.name)
                setArray(check)
            } else {
                setArray(a => [...a, curItem])
            }
        } else {
            const found = array.filter(item => item.name !== curItem.name)
            setArray(found)
        }

    }

    const handleStarshipsFavorite = (item) => {
        const list = [...allRoots];
        const curItem = list.find(el => el.name === item.name);
        curItem.isLike = !curItem.isLike;
        setAllRoots(() => list);
        if(curItem.isLike) {
            console.log(array, 'arrayarray')
            const found = array.find(item => item.name === curItem.name)
            if(array.length > 0 && found) {
                const check = array.filter(item => item.name !== curItem.name)
                setArray(check)
            } else {
                setArray(a => [...a, curItem])
            }
        } else {
            const found = array.filter(item => item.name !== curItem.name)
            setArray(found)
        }
    }
    
    const handlePlanetsFavorite = (item) => {
        const list = [...allRoots];
        const curItem = list.find(el => el.terrain === item.terrain);
        curItem.isLike = !curItem.isLike;
        setAllRoots(() => list);
        if(curItem.isLike) {
            console.log(array, 'arrayarray')
            const found = array.find(item => item.terrain === curItem.terrain)
            if(array.length > 0 && found) {
                const check = array.filter(item => item.terrain !== curItem.terrain)
                setArray(check)
            } else {
                setArray(a => [...a, curItem])
            }
        } else {
            const found = array.filter(item => item.terrain !== curItem.terrain)
            setArray(found)
        }
    }

    const handleFilmFavorite = (item) => {
        const list = [...allRoots];
        const curItem = list.find(el => el.episode_id === item.episode_id);
        curItem.isLike = !curItem.isLike;
        setAllRoots(() => list);
        if(curItem.isLike) {
            console.log(array, 'arrayarray')
            const found = array.find(item => item.episode_id === curItem.episode_id)
            if(array.length > 0 && found) {
                const check = array.filter(item => item.episode_id !== curItem.episode_id)
                setArray(check)
            } else {
                setArray(a => [...a, curItem])
            }
        } else {
            const found = array.filter(item => item.episode_id !== curItem.episode_id)
            setArray(found)
        }
    }

    const handleFavorite = (item) => {
        rootName === 'people' && handlePeopleFavorite(item)
        rootName === 'films' && handleFilmFavorite(item)
        rootName === 'planets' && handlePlanetsFavorite(item)
        rootName === 'starships' && handleStarshipsFavorite(item)
    }

    const getAllRoots = useCallback(async () => {
        setLoader(true)
        console.log('rannnn');
        try {
            const response = await axios.get(`${baseUrl}${rootName}`); 
            console.log(response.data.results)
            if(response.status === 200){
                // let newArray = [...response.data.results]
                let newArray = [...response.data]
                for (let i = 0; i < newArray.length; i++){
                    newArray[i].isLike = false
                }
                setAllRoots(newArray)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoader(false)
        }
    },[rootName])

    useEffect(() => {
        rootName && getAllRoots()
    }, [rootName, getAllRoots])

    return { counter, setCounter, loader, getAllRoots, allRoots, setRootName, setAllRoots, handleFavorite }
}

export default useCustom
