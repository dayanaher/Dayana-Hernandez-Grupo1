export default function Item({id, name, price, img}){

    return(
        <div className="flex flex-col items-center my-[20px]">
            <img src={img} alt="Imagen Productos" />
            <h3 className="text-[22px] font-bold my-[15px] tracking-[3px] uppercase text-[#2d3a4b] hover:text-[rgb(255,225,21)]">{name}</h3>
            <h4 className="text-[18px] font-bold mb-[20px]">{price}</h4>
        </div>
    )
}