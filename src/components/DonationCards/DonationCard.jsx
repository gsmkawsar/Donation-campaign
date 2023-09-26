import { Link } from "react-router-dom";

const DonationCard = ({ donationCard }) => {


    const { id, Picture, Title, Category, color_text_button, color_card_bg, color_btn_bg } = donationCard || {};



    return (
        <Link to={`/donations/${id}`}>
            <div>
                <div className=" rounded-lg shadow " style={{ background: color_card_bg }} >
                    <img className="rounded-t-lg w-full" src={Picture} alt={Title} />
                    <div className="p-2">
                        <button className="font-bold rounded-lg  px-3 " style={{ color: color_text_button, background: color_btn_bg }} >{Category}</button >
                        <h5 className="text-1xl font-bold py-2 ml-1 " style={{ color: color_text_button }}>{Title}</h5>
                    </div>
                </div>
            </div>

        </Link>

    );
};

export default DonationCard;