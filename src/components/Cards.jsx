
const Cards = ({icon , name , number , bgcolor ,text}) => {
    return (
        
            <div className='flex-1 min-w-55  flex items-center gap-3 px-4 py-3 rounded-xl relative bg-white shadow-lg border-0'>
                <div className={`h-12 w-12  rounded-full flex items-center justify-center text-2xl ${bgcolor} ${text}` }>
                  <i className={icon}></i>
                </div>
                <div className='font-semibold'>
                    <p className='text-xs'>{name}</p>
                    <h3 className='text-xl font-semibold'>{number}</h3>
                </div>
                <i className="ri-more-2-line absolute right-2 top-2"></i>
            </div>

    )
}

export default Cards