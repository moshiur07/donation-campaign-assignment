import DonatedCard from "./DonatedCard";

const Donation = () => {
    const getStoredItems= JSON.parse(localStorage.getItem('donation'))
    const check =getStoredItems?.length
    
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-16 ">
            {
               getStoredItems?.map(card => <DonatedCard key={card.id} card={card}></DonatedCard>  )
            }
        </div>
        <button className={`text-center flex mx-auto ${check>4 ? 'btn bg-green-400 text-white':'hidden'}`}>Show All</button>
        </div>
        
    );
};

export default Donation;