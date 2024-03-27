import { useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';




const SingleCard = () => {
    const cards = useLoaderData()
    const { id } = useParams()


    const getCard = cards?.find(card => card.id == id)
    const { picture, price, description, title, text_button_bg } = getCard
    console.log(picture);

    const handleDonate = () => {
        const cardToAdd = []

        const getStoredItems = JSON.parse(localStorage.getItem('donation'))
        if (!getStoredItems) {
            cardToAdd.push(getCard)
            localStorage.setItem('donation', JSON.stringify(cardToAdd))
            return swal(`${price} Donated!`, "You've donated successfully!", "success");
        }
        else {
            cardToAdd.push(...getStoredItems, getCard)
            localStorage.setItem('donation', JSON.stringify(cardToAdd))
            return swal(`${price} Donated!`, "You've donated successfully!", "success");
        }
    }
    return (
        <div className='mt-8 mx-auto px-5'>
            <div className='h-[80vh] '  style={{
                backgroundImage: `url(${picture})`,
                height: "80vh",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}>

                <button onClick={handleDonate} className={`  mt-[65vh] ml-16 px-4 rounded-lg text-xl font-semibold text-white py-3 bg-[${text_button_bg}]`}>Donate {price}</button>
            </div>
            {/* <div>
                <div>
                    <img className='w-full md:w-[70vw] mx-auto h-[70vh] rounded-lg' src={picture} alt="" />
                </div>
                <button onClick={handleDonate} className={`absolute left-[240px] bottom-[130px] px-3 rounded-lg text-xl font-semibold text-white py-3 bg-[${text_button_bg}]`}>Donate {price}</button>
            </div> */}
            <div className='mt-8 space-y-4'>
                <h1 className="text-3xl font-bold">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleCard;