/* eslint-disable react/prop-types */


const DonatedCard = ({ card }) => {
    const { price, title, category, picture, text_button_bg, card_bg, category_bg } = card
    return (
        <div>
            <div className={`rounded-lg flex gap-2 card-side bg-[${card_bg}] w-[600px] h-[200px] shadow-xl`}>
                
                <div className="w-[40%] h-full"><img className=" h-full" src={picture} alt="Movie" /></div>
                <div className="w-[60%]  p-4 space-y-3">
                    <p className={`font-medium bg-[${category_bg}] px-2 py-1 rounded-md w-max text-[${text_button_bg}]`}>{category}</p>
                    <h2 className="card-title">{title}</h2>
                    <h2 className={`font-semibold text-[${text_button_bg}]`}>{price}</h2>
                    <div className="card-actions ">
                        <button className={`p-3 rounded-lg text-white font-semibold bg-[${text_button_bg}]`}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonatedCard;