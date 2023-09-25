import { Link } from "react-router-dom";


const DonationAdd = ({ donation }) => {

    const { id, Picture, Title, Category, Colors, Description, Price } = donation || {};

    return (
        <div>

            <div className="flex flex-col  bg-red-300 border  rounded-lg shadow md:flex-row md:max-w-xl">
                <img className=" rounded-lg  h-96 md:h-auto md:w-48 " src={Picture} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="bg-slate-300 rounded-lg px-2">{Category}</p>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{Title}</h5>
                    <p className="mb-1 font-bold ">${Price}</p>
                    <Link to={`/donations/${id}`}>
                    <p className="p-2 bg-emerald-300 rounded-lg text-white">View Details</p>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default DonationAdd;