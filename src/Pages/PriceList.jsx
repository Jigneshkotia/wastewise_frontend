import React from 'react'
import ItemCard from '../Components/ItemCard'
import Navbar from '../Components/Navbar'
import "../Styles/pages/PriceList.css"

const PriceList = () => {
  return <div className='pricelistpage'>
        <Navbar />
        {/* <ItemCard name="Paper" price="11"/> */}
        <div className="pricelistpageheading">Scrap Prices</div>
        <div className="pricelistframe">
            <div className="pricelistsubframe" id='paperframe'>
                <div className="subframeheading">Paper</div>
                <div className="papersubframelist" id='papersubframelistfirst'>
                    <ItemCard className="card" image="https://images.unsplash.com/photo-1505063366573-38928ae5567e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Copies/Books" price="Rs 11/kg"/>
                    <ItemCard className="card" image="https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Newspapers" price="Rs 13/kg"/>
                    <ItemCard className="card" image="https://images.unsplash.com/photo-1507560461415-997cd00bfd45?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Cardboard" price="Rs 7/kg"/>
                    <ItemCard className="card" image="https://plus.unsplash.com/premium_photo-1681364360636-8c070bc52c10?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="A3/A4 Papers" price="Rs 13/kg"/>
                </div>
            </div>
            <div className="pricelistsubframe" id='metalsframe'>
            <div className="subframeheading">Metal</div>
                <div className="papersubframelist" id='metalsubframelistfirst'>
                    <ItemCard className="card" image="https://images.unsplash.com/photo-1536842409491-b3bbde0e3b66?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Iron" price="Rs 20/kg"/>
                    <ItemCard className="card" image="https://images.unsplash.com/photo-1633504785850-018cae02cb47?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Stainless Steel" price="Rs 35/kg"/>
                    <ItemCard className="card" image="https://images.unsplash.com/photo-1605780084250-d83bd844dfb5?q=80&w=2803&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Aluminium" price="Rs 50/kg"/>
                    <ItemCard className="card" image="https://images.unsplash.com/photo-1516134394958-6b824e9566f5?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name="Copper" price="Rs 400/kg"/>
                </div>
            </div>
            <div className="pricelistsubframe" id='plasticframe'>
            <div className="subframeheading">E-Waste</div>
                <div className="papersubframelist" id='plasticsubframelistfirst'>
                    <ItemCard className="card" image="https://recyclebaba.com/wp-content/uploads/elementor/thumbs/desktop-cpu-qa14a4kwmnvo5p8xciz89wuqc5igiuyoti52ifn3rk.jpg" name="CPU" price="Rs 250/piece"/>
                    <ItemCard className="card" image="https://recyclebaba.com/wp-content/uploads/elementor/thumbs/Keyboard-1-qa111c4tgq03lww4bjkzyvtx7n5n4qbbrg26vqt2vk.png" name="keyboard" price="Rs 5/Piece"/>
                    <ItemCard className="card" image="https://m.media-amazon.com/images/I/31hMUba-PVL._SX300_SY300_QL70_FMwebp_.jpg" name="Printer" price="Rs 200/piece"/>
                    <ItemCard className="card" image="https://recyclebaba.com/wp-content/uploads/elementor/thumbs/CRT-MONITOR-qa172t2kntpbq305g1onci84xx9szqnnztpd1ed1ao.jpg" name="Monitor" price="Rs 100/piece"/>
                </div>
            </div>
        </div>
    </div>
  
}

export default PriceList