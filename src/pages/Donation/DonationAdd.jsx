import { Link } from "react-router-dom";


const DonationAdd = ({ donation }) => {

    const { id, Picture, Title, Category, color_text_button, color_card_bg, color_btn_bg , Price } = donation || {};

    return (
        <div>

            <div className="flex flex-col rounded-lg shadow md:flex-row md:max-w-xl" style={{background: color_card_bg}}>
                <img className=" rounded-lg  h-96 md:h-auto md:w-52 " src={Picture} alt="" />
                <div className="flex-col justify-between p-4 leading-normal">
                    <button className="bg-slate-300 rounded-lg px-2" style={{background: color_btn_bg, color: color_text_button }} >{Category}</button>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{Title}</h5>
                    <p className="mb-1 font-bold " style={{color: color_text_button }}>${Price}</p>
                    <Link to={`/donations/${id}`}>
                    <button className="p-2 rounded-lg text-white" style={{background: color_text_button}} >View Details</button>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default DonationAdd;