const Section = ({children, title, description, id}) => {
  return (
    <section id={id} className='mt-10'>
        <h3 className="text-center font-titleFont text-primary -rotate-3 text-xl">{title}</h3>
        <p className='mb-5 md:w-96 text-center mx-auto font-semibold text-2xl capitalize'>{description}</p>
        {children}
    </section>
  )
}

export default Section