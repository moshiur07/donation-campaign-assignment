import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard";

const Donation = () => {
    const [donatedItems, setDonatedItems] = useState([])
    const [isShow, setIsShow] = useState(false)
    const [noFound, setNoFound] = useState(false)

    useEffect(() => {
        const getStoredItems = JSON.parse(localStorage.getItem('donation'))
        if (getStoredItems) {
            setDonatedItems(getStoredItems)
        }
        else {
            setNoFound('Please Donate!!')
        }
    }, [])


    return (
        <div>
            { noFound? <p className="text-2xl font-medium flex justify-center items-center h-screen">{noFound}</p> :
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-16 ">
                {
                    isShow ? donatedItems.map(card => <DonatedCard key={card.id} card={card}></DonatedCard>)
                        :
                        donatedItems.slice(0, 4).map(card => <DonatedCard key={card.id} card={card}></DonatedCard>)
                }
            </div>
            <div className="flex justify-center">
                {
                    donatedItems.length>4 && <button onClick={() => setIsShow(!isShow)} className={isShow ? 'hidden' : 'btn bg-green-400 text-white'}>Show All</button>
                }
            </div>
            </div>
            }
        </div>

    );
};

export default Donation;