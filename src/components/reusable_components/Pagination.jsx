const Pagination = ({currentPage,cardsPerPage,totalCards,onPageChange}) => {
    const totalPages=Math.ceil(totalCards/cardsPerPage)
    const pageNumbers=[]

    for (let i=1;i<=totalPages;i++){
        pageNumbers.push(i)
    }
  return (
    <div>
        <div className="mt-4">
            <ul className=" flex items-center justify-center">
                {
                    pageNumbers.map((number)=>{
                        return <li key={number} onClick={()=>onPageChange(number)} className={`${number===currentPage?" bg-red-500":""} mr-5 py-2 px-5 bg-blue-950 text-white cursor-pointer hover:bg-blue-800`}>{number}</li>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Pagination