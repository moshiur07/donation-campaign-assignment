/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { id, title, category, picture, text_button_bg, card_bg, category_bg } = card;
    return (
        <div>
            <Link to={`/card/${id}`}>
                <div style={{ backgroundColor: card_bg }} className={`rounded-lg `}>
                    <figure><img src={picture} alt="Shoes" /></figure>
                    <div className="pl-5 py-4">
                        <div className={`font-medium  px-2 py-1 rounded-md w-max ]`} style={{
                            backgroundColor: category_bg,
                            color: text_button_bg
                        }} >{category}</div>
                        {/* <p className={`font-medium bg-[${category_bg}] px-2 py-1 rounded-md w-max text-[${text_button_bg}]`}>{category}</p> */}
                        <h2 style={{ color: text_button_bg }} className={`text-xl font-semibold ]`}>
                            {title}
                        </h2>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Card;