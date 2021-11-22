import { useEffect } from 'react'
import './Planets.scss'
import Navbar from "../../Navbar/Navbar"
import useCustom from '../../../Api/CustomHooks/useCustom'
import Spinner from "../../../Spinner/Spinner"
import { MdFavorite } from "react-icons/md";
// import { useSelector } from 'react-redux';

const Planets = () => {
    const { setRootName, allRoots, loader, handleFavorite } = useCustom()


    // MdFavoriteBorder

    useEffect(() => {
        setRootName('albums')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
    }, [allRoots])


    // const PersistedCart = useSelector((state: any) => state.Cart);

    // useEffect(() => {
    //     if(allRoots.length > 0 && counter === 0) {
    //         let cart = PersistedCart.items
    //         const list = [...allRoots]
    //         cart.forEach((item: any) => {
    //             list.forEach((items: any) => {
    //                 if(items.terrain  === item.terrain) {
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


    return (
        <main className='planets'>
            <Navbar/>
            {loader && <Spinner/>}
            <section className='section--1 flex--2'>
                {/* {JSON.stringify(allRoots)} */}
                {
                allRoots?.map((root: any, i) => {
                    return (<div className='card' key={i}>
                                <div className='flex--2'>
                                    <h1>{root.id}</h1>
                                    <MdFavorite className={`icon--favorite ${root.isLike && 'icon--red'}`} onClick={() => handleFavorite(root)}/>
                                </div>
                                <p><span>Rotation Period:</span> {root.rotation_period}</p>
                                <p><span>Orbital Period: </span> {root.orbital_period}</p>
                                <p><span>Diameter: </span> {root.title}</p>
                                <p><span>Climate: </span> {root.climate}</p>
                                <p><span>Gravity: </span> {root.gravity}</p>
                                <p><span>Terrain: </span> {root.terrain}</p>
                                <p><span>Surface Water: </span>{root.surface_water}</p>
                                <p><span>Population: </span>{root.population}</p>
                            </div>
                            )
                })
                }
            </section>
        </main>
    )
}

export default Planets