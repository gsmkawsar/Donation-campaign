

const DonationItemCard = ({ donation }) => {

    const {id, Picture, Title, Category, Colors, Description, Price  } = donation || {};

    return (




  


        <div>
            <div>
            <div>
            <img className="w-full" src={Picture} alt="" />
            <div className="bg-blend-overlay bg-cover bg-fixed ">
            <button onClick={y} className="bg-red-600 p-2 text-white font-bold rounded-lg">Donate ${Price}</button>
            </div>
           
            </div>
            <h1 className=" text-3xl py-5">{Title}</h1>
            <p className="py-5">{Description}</p>
            </div>


        </div>
    );
};

export default DonationItemCard;