import '../styles/Section.css';
import {AutoAwesomeMosaicRounded, PersonOutlineOutlined} from '@mui/icons-material'
import { FaInstagram,FaTerminal,FaFigma,FaRegCommentDots} from 'react-icons/fa'
import { CiMobile1 } from "react-icons/ci";
import { PiCubeFocusLight } from "react-icons/pi";

export default function Section(){
    const myServices = [
        {   
            Services: "UI/UX Desinging"
        },
        {
            Services: "App UI/Ux"
        },
        {
            Services: "Web Developement"
        },
        {
            Services: "Graphic Desinging"
        },
        {
            Services: "Product Desinging"
        },
        {
            Services: "Social Media Posts"
        }
    ];
    const myPortfolios = [
        {
            Icon: <FaFigma className='PortfolioIcons'/>,
            Header: "UI/UX Desigining.",
            Details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nulla at inventore velit debitis tempora ratione corrupti maxime amet numquam, dignissimos odit sint alias necessitatibus ex tenetur eaque expedita fugit accusamus consequuntur vitae! Magni harum vero consectetur iste blanditiis natus."
        },
        {
            Icon: <PiCubeFocusLight className='PortfolioIcons'/>,
            Header: "Graphic Desigining.",
            Details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nulla at inventore velit debitis tempora ratione corrupti maxime amet numquam, dignissimos odit sint alias necessitatibus ex tenetur eaque expedita fugit accusamus consequuntur vitae! Magni harum vero consectetur iste blanditiis natus."
        },
        {
            Icon: <FaTerminal className='PortfolioIcons'/>,
            Header: "Web Developer",
            Details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nulla at inventore velit debitis tempora ratione corrupti maxime amet numquam, dignissimos odit sint alias necessitatibus ex tenetur eaque expedita fugit accusamus consequuntur vitae! Magni harum vero consectetur iste blanditiis natus."
        },
        {
            Icon: <FaInstagram className='PortfolioIcons'/>,
            Header: "Social Media Post Designing",
            Details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nulla at inventore velit debitis tempora ratione corrupti maxime amet numquam, dignissimos odit sint alias necessitatibus ex tenetur eaque expedita fugit accusamus consequuntur vitae! Magni harum vero consectetur iste blanditiis natus."
        },
        {
            Icon: <CiMobile1 className='PortfolioIcons'/>,
            Header: "Mobile App UI/UX",
            Details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nulla at inventore velit debitis tempora ratione corrupti maxime amet numquam, dignissimos odit sint alias necessitatibus ex tenetur eaque expedita fugit accusamus consequuntur vitae! Magni harum vero consectetur iste blanditiis natus."
        },
        {
            Icon: <FaRegCommentDots className='PortfolioIcons'/>,
            Header: "Want your stunning designs",
            Details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nulla at inventore velit debitis tempora ratione corrupti maxime amet numquam, dignissimos odit sint alias necessitatibus ex tenetur.",
            Button: <Button/>
        }
    ]
    return(
        <div className='ParentContainer'>
            <div className="ServicesContent">
                <MainHeader title="Services." details="Here are the services we are providing to you"/>
                <div className='servicesCards'>
                    {
                        myServices.map((service, index) => {
                            return <Services key={index} serviceName={service.Services}/>
                        })
                    }
                </div>
                <button>View All</button>
            </div>
            <div className="PortfolioContent">
                <MainHeader title="Portfolios." details="Here are the services we are providing to you"/>
                <div className='portfolioCards'>
                    {
                        myPortfolios.map((portfolio, index) => {
                            return <Portfolios key={index} icon={portfolio.Icon}header={portfolio.Header} details={portfolio.Details} btn={portfolio.Button} />
                        })
                    }
                </div>
            </div>
            <div className="">
                <MainHeader title="Testimonials." details="Here are some testimonials from our clients"/>
                <div className='testimonialCards'>
                    <Testimonials Comments="
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, itaque natus voluptatum porro illo eligendi iste, hic impedit nihil dolor soluta explicabo voluptatem blanditiis consequuntur! Asperiores, reprehenderit? Maiores, ea eum?"
                    Name="John Doe"
                    />
                    <Testimonials Comments="
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, itaque natus voluptatum porro illo eligendi iste, hic impedit nihil dolor soluta explicabo voluptatem blanditiis consequuntur! Asperiores, reprehenderit? Maiores, ea eum?"
                    Name="Jonathan David"
                    />
                    <Testimonials Comments="
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, itaque natus voluptatum porro illo eligendi iste, hic impedit nihil dolor soluta explicabo voluptatem blanditiis consequuntur! Asperiores, reprehenderit? Maiores, ea eum?"
                    Name="Jane Doe"
                    />
                </div>
            </div>
        </div>
    )
}
function Button(){
    return(
            <button className='buttonR'>Let's Talk</button>
    )
}
function MainHeader(props){
    return(
        <div className='CardsHeader'>
            <h1>{props.title}</h1>
            <p>{props.details}</p>
        </div>
    )
}
function Services(props){
    return(
        <div className='ServiceCard'>
            <AutoAwesomeMosaicRounded className='gridIcon'/>
            <h2>{props.serviceName}</h2>
        </div>
    )
}
function Portfolios(props){
    return(
        <div className='PortfolioCard'>
            <div>{props.icon}</div>
            <h2>{props.header}</h2>
            <p>{props.details}</p>
            <button>{props.btn}</button>
        </div>
    )
}
function Testimonials(props){
    return(
        <div className='TestimonialCard' >
            <div className='testimonialIconDiv'><PersonOutlineOutlined className='testimonialIcon'/></div>
            <div className='testimonialDetails'>
                <p>{props.Comments}</p>
                <h2>{props.Name}</h2>
            </div>
        </div>
    )
}