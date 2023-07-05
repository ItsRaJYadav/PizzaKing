import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaUtensils } from "react-icons/fa";
import { FcShipped, FcAlarmClock } from "react-icons/fc";
import { animated, useSpring } from "react-spring";
import './Hero.css'; // Import the CSS file

const Hero = () => {

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
  });

  const imageAnimation2 = useSpring({
    from: { opacity: 0, transform: "translateX(50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 1000 },
  });
  

  const fieldAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  const fieldAnimation2 = useSpring({
    from: { opacity: 0, transform: "translateY(20px)", color: "red", fontSize: "16px" },
    to: { opacity: 1, transform: "translateY(0)", color: "blue", fontSize: "20px" },
    config: { duration: 1000 },
  });
  

  return (
    <div className="relative mt-5">
      <div className="max-w-auto mx-auto px-4 sm:px-6">
        <div className="text-center">
          <animated.div style={fieldAnimation} className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Delicious food,</span>{" "}
            <span className="block text-blue-600 xl:inline">
              delivered to your doorstep
            </span>
          </animated.div>
          <animated.div style={imageAnimation2} className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Bringing the restaurant experience to your home
          </animated.div>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 ">
            <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-start sm:items-center">
              <div className="mr-5">
                <animated.div style={imageAnimation}>
                  <img
                    src="https://www.thetatva.in/wp-content/uploads/2022/03/pizza-5179939_960_720.jpg"
                    alt="RightImage"
                    className="object-cover w-20 h-20 rounded-full md: mb-2"
                  />
                </animated.div>
              </div>
              <animated.div style={fieldAnimation2} className="rounded-md shadow mr-5">
                <Link
                  to="/menu"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  <FiShoppingCart className="mr-2" />
                  Order Now
                </Link>
              </animated.div>
              <animated.div style={imageAnimation2}>
                <img
                  src="https://s30386.pcdn.co/wp-content/uploads/2020/02/p1droflv111ggm10p11634nlosi6.png"
                  alt="LeftImage"
                  className="object-cover w-20 h-20 rounded-full hidden sm:block"
                />
              </animated.div>
            </div>

          </div>
          <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card */}
            <animated.div style={imageAnimation} className='rounded-xl relative'>
              {/* Overlay */}
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <Link to='/menu' className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-md px-4 py-2 font-bold animate-blink'>
                  Order Now
                </Link>
              </div>
              <img
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
                alt='/'
              />
            </animated.div>
            {/* Card */}
            <animated.div style={imageAnimation} className='rounded-xl relative'>
              {/* Overlay */}
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                <p className='px-2'>Added Daily</p>
                <Link to ='/menu' className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-md px-4 py-2 font-bold animate-blink'>
                  Order Now
                </Link>

              </div>
              <img
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
                alt='/'
              />
            </animated.div>
            {/* Card */}
            <animated.div style={imageAnimation2} className='rounded-xl relative'>
              {/* Overlay */}
              <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
                <p className='px-2'>Tasty Treats</p>
                <Link to='/menu' className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-md px-4 py-2 font-bold animate-blink'>
                  Order Now
                </Link>
              </div>
              <img
                className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                alt='/'
              />
            </animated.div>
          </div>
          <animated.div style={fieldAnimation} className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-5xl font-bold mb-4">
              Delicious Food Delivered Fast
            </h1>

            <h2 className="text-xl text-gray-600 mb-8">
              Satisfy your cravings with our mouth-watering dishes
            </h2>
            <div className="flex justify-center items-center space-x-8 mb-16">
              <div className="flex flex-col justify-center items-center">
                <FaUtensils className="text-4xl mb-4 h-20 w-20" />
                <h3 className="text-lg font-bold">Quality Ingredients</h3>
                <p className="text-gray-600">
                  We use only the freshest and highest quality ingredients in our dishes
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FcShipped className="text-4xl mb-4 h-20 w-20" />
                <h3 className="text-lg font-bold">Fast Delivery</h3>
                <p className="text-gray-600">
                  Our speedy delivery service ensures your food arrives hot and fresh
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <FcAlarmClock className="text-4xl mb-4 h-20 w-20" />
                <h3 className="text-lg font-bold">Quick and Easy Ordering</h3>
                <p className="text-gray-600 ">
                  Ordering from our website is simple and hassle-free
                </p>
              </div>
            </div>
          </animated.div>
        </div>

      </div>
      <div className="relative flex justify-center items-center">
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="https://s30386.pcdn.co/wp-content/uploads/2020/02/p1droflv111ggm10p11634nlosi6.png"
            alt="BackgroundImage"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="w-full h-full bg-white bg-opacity-75 rounded-lg p-8">
            Pizza King web app is an online platform for ordering pizzas, Burger, Fries, Soft Drinks, & all types of fast food. It offers a range of pizzas, sides, drinks, and desserts with an easy-to-use ordering system and delivery options.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
