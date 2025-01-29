import LeafIcon  from "/leaf.png"

function Navbar() {
    const navData = [
        {id:1, link: '#', title: 'Home'},
        {id:2, link: '#about', title: 'About'},
        {id:3, link: '#services', title: 'Services'},
        {id:4, link: '#contact', title: 'Contact'}
    ]
    
   
  return (
    <nav className="bg-gray-200 p-2 shadow-md sticky top-0">
      <div className="flex justify-between items-center m-2 lg:mx-10">
        <a href="index.html">
          <img src={LeafIcon}  alt="logo" className="w-12 h-12" />
        </a>
        <ul className="flex flex-row gap-4">
          {
            navData.map((item)=>
              <li key={item.id}><a className="text-base lg:text-xl" href={item.link}>{item.title}</a></li>
            )
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar