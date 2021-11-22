import { useState, useEffect } from 'react'
import './Starship.scss'
import Navbar from "../../Navbar/Navbar"
import useCustom from '../../../Api/CustomHooks/useCustom'
import Spinner from "../../../Spinner/Spinner"
import { MdFavorite } from "react-icons/md";
import { useSelector } from 'react-redux';


const Starship = () => {
    const { setRootName, setAllRoots, setCounter, allRoots, loader, handleFavorite, counter } = useCustom()
    const [slicedManufacture, setSlicedManufacture] = useState([])

    useEffect(() => {
        setRootName('photos')
    })

    useEffect(() => {
        // str.slice(0, 5);
        // const add = allRoots.
        if(allRoots) {
            const sliced: any = allRoots?.slice(0, 6)
            setSlicedManufacture(sliced)
        }
    }, [allRoots])

    const PersistedCart = useSelector((state: any) => state.Cart);

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


    console.log(slicedManufacture, 'slicedManufactureslicedManufacture')


    return (
        <main className='starship'>
            <Navbar/>
            {loader && <Spinner/>}
            <section className='section--1 flex--2'>
                {
                slicedManufacture?.map((root: any, i) => {
                    return (<div className='card' key={i}>
                                <div className='flex--2'>
                                    <h1>{root.name}</h1>
                                    <MdFavorite className={`icon--favorite ${root.isLike && 'icon--red'}`} onClick={() => handleFavorite(root)}/>
                                </div>
                                <p><span>Rotation Period:</span> {root.rotation_period}</p>
                                <p><span>Model: </span> {root.title}</p>
                                {/* <p className='ma'><span>manufacturer: </span> {root.manufacturer}</p>
                                <p><span>cost_in_credits: </span> {root.cost_in_credits}</p>
                                <p><span>length: </span> {root.length}</p>
                                <p><span>max_atmosphering_speed: </span> {root.max_atmosphering_speed}</p>
                                <p><span>Surface Water: </span>{root.surface_water}</p>
                                <p><span>crew: </span>{root.crew}</p>
                                <p><span>passengers: </span>{root.passengers}</p>
                                <p><span>cargo_capacity: </span>{root.cargo_capacity}</p>
                                <p><span>consumables: </span>{root.consumables}</p>
                                <p><span>hyperdrive_rating: </span>{root.hyperdrive_rating}</p>
                                <p><span>MGLT: </span>{root.MGLT}</p>
                                <p><span>starship_class: </span>{root.starship_class}</p> */}
                            </div>
                            )
                })
                }
            </section>
        </main>
    )
}

export default Starship