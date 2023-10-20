const HeadTitle = ({title,icon}) => {
  return (
    <div>
        <p className="relative text-4xl font-medium mb-5">
            {title}
            <span className="absolute text-2xl top-0 text-yellow-500">{icon}</span>
        </p>

    </div>
  )
}

export default HeadTitle