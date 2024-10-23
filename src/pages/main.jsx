import {
  DiCss3Full,
  DiDart,
  DiHtml5,
  DiJavascript1,
  DiLaravel,
  DiPhp,
  DiReact,
} from "react-icons/di";
import {
  FaExternalLinkAlt,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { FaGithub, FaStarHalf, FaWhatsapp } from "react-icons/fa6";
import { GiElephant } from "react-icons/gi";

const MainPage = () => {
  return (
    <div className="flex justify-center items-center my-4 mx-4">
      <div className="container border border-slate-200 rounded-lg">
        {/* Header */}
        <img
          src="https://picsum.photos/1336/400"
          alt="Picture"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="flex justify-between items-center my-8 mx-8 relative">
          <div className="absolute left-0 -top-32">
            <img
              src="https://picsum.photos/300/300"
              alt=""
              className="rounded-full w-48 h-48 object-cover"
            />
          </div>
          <div className="flex flex-col items-start ml-56">
            <h1 className="text-2xl font-bold">Moch Diki Widianto</h1>
            <p className="text-md">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum, enim!
            </p>
          </div>
          <div className="flex justify-end items-center gap-1">
            <a
              href="#"
              className="flex justify-start items-center border border-green-600 text-green-600 shadow-md hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded"
            >
              <FaWhatsapp className="mr-2 w-6 h-6" />
              Whatsapp
            </a>
            <a
              href="#"
              className="flex justify-start items-center border border-slate-700 text-slate-700 shadow-md hover:bg-slate-700 hover:text-white font-bold py-2 px-4 rounded"
            >
              <FaGithub className="mr-2 w-6 h-6" />
              Github
            </a>
          </div>
        </div>
        {/* Profile */}
        <div className="flex justify-between items-start mx-8 mt-14 mb-8">
          <div className="flex flex-col justify-start w-2/3 pr-8">
            <h1 className="text-lg font-bold mb-2">Tentang Saya</h1>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              voluptatem, quasi similique, incidunt, voluptatum excepturi
              veritatis error quidem officiis voluptates tempora. Dignissimos
              quos consequatur, dolorum, deleniti accusamus autem exercitationem
              doloremque.
            </p>
          </div>
          <div className="flex justify-start items-start flex-wrap w-1/3 p">
            <div className="flex flex-col w-1/2 px-4 my-4">
              <h1 className="font-bold text-slate-600">Wilayah Negara</h1>
              <p className="text-md">Banten, Indonesia (ID)</p>
            </div>
            <div className="flex flex-col w-1/2 px-4 my-4">
              <h1 className="font-bold text-slate-600">Situs Web</h1>
              <a
                href="#"
                className="flex items-center text-md text-emerald-700 hover:text-emerald-800"
              >
                dikiwidia.github.com
                <FaExternalLinkAlt className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-col w-1/2 px-4 my-4">
              <h1 className="font-bold text-slate-600">Surat Elektronik</h1>
              <a
                href="mailto:diki.widianto@unilam.ac.id"
                className="flex items-center text-md text-emerald-700 hover:text-emerald-800"
              >
                diki.widianto@unilam.ac.id
                <FaExternalLinkAlt className="ml-2 w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-col w-1/2 px-4 my-4">
              <h1 className="font-bold text-slate-600">LinkedIn</h1>
              <a
                href="#"
                className="flex items-center text-md text-emerald-700 hover:text-emerald-800"
              >
                Moch Diki Widianto
                <FaExternalLinkAlt className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="flex flex-col justify-center items-center mx-8 my-8">
          <h1 className="text-lg font-bold text-emerald-600 mb-8">
            Bahasa Pemrograman / Framework
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-2 mb-8 w-full">
            <div className="flex justify-start items-center border border-emerald-300 rounded py-2 px-4">
              <DiHtml5 className="w-16 h-16 text-orange-500" />
              <div className="flex flex-col justify-center items-start ml-2">
                <p className="font-bold">HTML5</p>
                <p className="text-sm mb-1 italic">
                  Hypertext Markup Language 5
                </p>
                <p className="flex text-sm gap-1">
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  {/* <FaStarHalfAlt className="w-4 h-4 text-orange-600" /> */}
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center border border-emerald-300 rounded py-2 px-4">
              <DiPhp className="w-16 h-16 text-blue-500" />
              <div className="flex flex-col justify-center items-start ml-2">
                <p className="font-bold">PHP</p>
                <p className="text-sm mb-1 italic">
                  PHP: Hypertext Preprocessor
                </p>
                <p className="flex text-sm gap-1">
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  {/* <FaStarHalfAlt className="w-4 h-4 text-orange-600" /> */}
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center border border-emerald-300 rounded py-2 px-4">
              <DiCss3Full className="w-16 h-16 text-blue-700" />
              <div className="flex flex-col justify-center items-start ml-2">
                <p className="font-bold">CSS3</p>
                <p className="text-sm mb-1 italic">Cascading Style Sheets 3</p>
                <p className="flex text-sm gap-1">
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  {/* <FaStar className="w-4 h-4 text-orange-600" /> */}
                  <FaStarHalfAlt className="w-4 h-4 text-orange-600" />
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center border border-emerald-300 rounded py-2 px-4">
              <DiJavascript1 className="w-16 h-16 text-yellow-500" />
              <div className="flex flex-col justify-center items-start ml-2">
                <p className="font-bold">JS</p>
                <p className="text-sm mb-1 italic">JavaScript</p>
                <p className="flex text-sm gap-1">
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  {/* <FaStar className="w-4 h-4 text-orange-600" /> */}
                  <FaStarHalfAlt className="w-4 h-4 text-orange-600" />
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center border border-emerald-300 rounded py-2 px-4">
              <DiDart className="w-16 h-16 text-blue-400" />
              <div className="flex flex-col justify-center items-start ml-2">
                <p className="font-bold">Dart</p>
                <p className="text-sm mb-1 italic">Dart Framework</p>
                <p className="flex text-sm gap-1">
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  {/* <FaStar className="w-4 h-4 text-orange-600" /> */}
                  {/* <FaStar className="w-4 h-4 text-orange-600" /> */}
                  <FaStarHalfAlt className="w-4 h-4 text-orange-600" />
                  <FaRegStar className="w-4 h-4 text-orange-600" />
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center border border-emerald-300 rounded py-2 px-4">
              <DiReact className="w-16 h-16 text-blue-500" />
              <div className="flex flex-col justify-center items-start ml-2">
                <p className="font-bold">ReactJs</p>
                <p className="text-sm mb-1 italic">ReactJs</p>
                <p className="flex text-sm gap-1">
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  {/* <FaStar className="w-4 h-4 text-orange-600" /> */}
                  {/* <FaStar className="w-4 h-4 text-orange-600" /> */}
                  <FaStarHalfAlt className="w-4 h-4 text-orange-600" />
                  <FaRegStar className="w-4 h-4 text-orange-600" />
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center border border-emerald-300 rounded py-2 px-4">
              <DiLaravel className="w-16 h-16 text-orange-500" />
              <div className="flex flex-col justify-center items-start ml-2">
                <p className="font-bold">Laravel</p>
                <p className="text-sm mb-1 italic">Laravel Framework</p>
                <p className="flex text-sm gap-1">
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  <FaStar className="w-4 h-4 text-orange-600" />
                  {/* <FaStarHalfAlt className="w-4 h-4 text-orange-600" />
                  <FaRegStar className="w-4 h-4 text-orange-600" /> */}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex justify-center items-center mx-8 my-4 border-t-2 border-slate-100 py-4">
          <p className="text-sm text-slate-500">
            Hak Cipta &copy; {new Date().getFullYear()} Moch Diki Widianto
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
