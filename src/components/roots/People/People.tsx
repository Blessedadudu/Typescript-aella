import { useEffect } from 'react'
import './People.scss'
import Navbar from "../../Navbar/Navbar"
import useCustom from '../../../Api/CustomHooks/useCustom'
import Spinner from "../../../Helpers/Spinner/Spinner"
import { MdFavorite } from "react-icons/md";
// import { useSelector } from 'react-redux';



const People = () => {
    const { setRootName, allRoots, loader, handleFavorite } = useCustom()

    useEffect(() => {
        setRootName('comments')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const PersistedCart = useSelector((state: any) => state.Cart);

    // useEffect(() => {
    //     if(allRoots.length > 0 && counter === 0) {
    //         let cart = PersistedCart.items
    //         const list = [...allRoots]
    //         cart.forEach((item: any) => {
    //             list.forEach((items: any) => {
    //                 if(items.name  === item.name) {
    //                     items.isLike = true
    //                 }
    //             })
    //         })
    //         setCounter(c => c += 1)
    //         setAllRoots(() => list)
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [allRoots])

    return (
        <main className='people'>
            <Navbar/>
            {loader && <Spinner/>}
            <section className='section--1 flex--2'>
                {
                allRoots?.map((root: any, i) => {
                    return (
                        <div className='card' key={i}>
                            <div className='flex--2'>
                                <h1>{root.name}</h1>
                                <MdFavorite className={`icon--favorite ${root.isLike && 'icon--red'}`} onClick={() => handleFavorite(root)}/>
                            </div>
                            <p><span>Height:</span> {root.height}</p>
                            <p><span>Mass: </span> {root.mass}</p>
                            <p><span>Hair Color: </span> {root.name}</p>
                            <p><span>Skin Color: </span> {root.email}</p>
                            <p><span>Eye Color: </span> {root.body}</p>
                            <p><span>Birth Year: </span> {root.birth_year}</p>
                            <p><span>Gender: </span>{root.gender}</p>
                        </div>
                    )
                })
                }
            </section>
        </main>
    )
}

export default People
