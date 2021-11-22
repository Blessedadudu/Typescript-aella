import { useEffect } from 'react'
import './Films.scss'
import Navbar from "../../Navbar/Navbar"
import useCustom from '../../../Api/CustomHooks/useCustom'
import Spinner from "../../../Spinner/Spinner"
import { MdFavorite } from "react-icons/md";
import { useSelector } from 'react-redux';



const Films = () => {
    const { counter, setCounter, setRootName, allRoots, setAllRoots, loader, handleFavorite } = useCustom()

    useEffect(() => {
        // setRootName('films')
        setRootName('posts')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const PersistedCart = useSelector((state: any )=> state.Cart);

    // useEffect(() => {
    //     if(allRoots.length > 0 && counter === 0) {
    //         let cart = PersistedCart.items
    //         const list = [...allRoots]
    //         cart.forEach((item: any) => {
    //             list.forEach((items: any) => {
    //                 if(items.episode_id === item.episode_id) {
    //                     items.isLike = true
    //                 }
    //             })
    //         })
    //         console.log(list, ';ssss')
    //         setCounter(c => c += 1)
    //         setAllRoots(() => list)
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [allRoots])

    // useEffect(() => {

    // },[allRoots])

    console.log(allRoots, '1111 11')




    return (
        <main className='films'>
            <Navbar/>
            <section className='section--1 flex--2'>
                {loader && <Spinner/>}
                {
                allRoots?.map((root: any, i) => {
                    return (<div className='card' key={i}>
                                <div className='flex--2'>
                                    <h1>{root.title}</h1>   
                                    <MdFavorite className={`icon--favorite ${root.isLike && 'icon--red'}`} onClick={() => handleFavorite(root)}/>
                                </div>
                                {/* <p><span>Episode: </span> {root.episode_id}</p>
                                <p><span>Opening Crawl:</span> {root.opening_crawl}</p>
                                <p><span>Director: </span> {root.director}</p>
                                <p><span>Producer: </span> {root.producer}</p>
                                <p><span>Release Date: </span>{root.release_date}</p> */}
                                <p><span>Episode: </span> {root.episode_id}</p>
                                <p><span>Opening Crawl:</span> {root.title}</p>
                                <p><span>Director: </span> {root.body}</p>
                                <p><span>Producer: </span> {root.producer}</p>
                                <p><span>Release Date: </span>{root.release_date}</p>
                            </div>
                            )
                })
                }
            </section>
        </main>
    )
}

export default Films
