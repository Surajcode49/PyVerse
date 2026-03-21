import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link, matchPath, useLocation } from "react-router-dom"

import logo from "../../assets/Logo/pyverse logo.png"
import { NavbarLinks } from "../../data/navbar-links"
import { apiConnector } from "../../services/apiconnector"
import { categories } from "../../services/apis"
import { ACCOUNT_TYPE } from "../../utils/constants"
import ProfileDropdown from "../core/Auth/ProfileDropdown"

function Navbar() {
  const [showDropDown, setShowDropDown] = useState(false)
  const [subLinks, setSubLinks] = useState([])
  const [loading, setLoading] = useState(false)

  // ✅ SAFE REDUX SELECTORS
  const { token = null } = useSelector((state) => state.auth || {})
  const { user = null } = useSelector((state) => state.profile || {})
  const { totalItems = 0 } = useSelector((state) => state.cart || {})

  const location = useLocation()

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API)
        setSubLinks(res?.data?.data || [])
      } catch (error) {
        console.log("Could not fetch categories", error)
        setSubLinks([])
      }
      setLoading(false)
    }
    fetchCategories()
  }, [])

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div
      className={`relative flex h-14 items-center justify-center border-b border-richblack-700 ${
        location.pathname !== "/" ? "bg-richblack-800" : ""
      }`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">

        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="Logo" width={60} height={25} loading="lazy" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks?.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="group relative flex cursor-pointer items-center gap-1">
                    <p>{link.title}</p>
                    <BsChevronDown />

                    <div className="invisible absolute left-1/2 top-8 z-50 w-56 -translate-x-1/2 rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : subLinks.length > 0 ? (
                        subLinks
                          .filter((item) => item?.courses?.length > 0)
                          .map((item, i) => (
                            <Link
                              key={i}
                              to={`/catalog/${item.name
                                .split(" ")
                                .join("-")
                                .toLowerCase()}`}
                              className="block rounded-md px-3 py-2 hover:bg-richblack-50"
                            >
                              {item.name}
                            </Link>
                          ))
                      ) : (
                        <p className="text-center">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={
                      matchRoute(link.path)
                        ? "text-yellow-25"
                        : "text-richblack-25"
                    }
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-x-4">

          {user && user.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
              {totalItems > 0 && (
                <span className="absolute -bottom-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
                  {totalItems}
                </span>
              )}
            </Link>
          )}

          {!token && (
            <>
              <Link to="/login">Log in</Link>
              <Link to="/signup">Sign up</Link>
            </>
          )}

          {token && <ProfileDropdown />}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden">
          <AiOutlineMenu
            color="white"
            fontSize={24}
            onClick={() => setShowDropDown(!showDropDown)}
          />
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {showDropDown && (
        <div className="absolute top-14 z-40 w-full bg-richblack-800 p-4 md:hidden">
          <ul className="flex flex-col items-center gap-y-4 text-richblack-25">
            {NavbarLinks?.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.title}</Link>
              </li>
            ))}

            {!token && (
              <>
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign up</Link>
              </>
            )}

            {token && <ProfileDropdown />}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
