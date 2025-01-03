import {  useState } from 'react'
import Profile from "../../assets/profile.jpg"
import img1 from "../../assets/Post Images/img1.jpg"
import img2 from "../../assets/Post Images/img2.jpg"
import img3 from "../../assets/Post Images/img3.jpg"
import img4 from "../../assets/Post Images/img4.jpg"
import img5 from "../../assets/Post Images/img5.jpg"
import img6 from "../../assets/Post Images/img6.jpg"


import DPimg1 from "../../assets/DP/DPimg1.jpg"
import DPimg2 from "../../assets/DP/DPimg2.jpg"
import DPimg3 from "../../assets/DP/DPimg3.jpg"
import DPimg4 from "../../assets/DP/img4.jpg"
import DPimg5 from "../../assets/DP/img5.jpg"
import DPimg6 from "../../assets/DP/img6.jpg"

import cover from "../../assets/Info-Dp/img-3.jpg"

import Cover1 from "../../assets/Friends-Cover/cover-1.jpg"
import Cover2 from "../../assets/Friends-Cover/cover-2.jpg"
import Cover3 from "../../assets/Friends-Cover/cover-3.jpg"
import Cover5 from "../../assets/Friends-Cover/cover-5.jpg"
import Cover7 from "../../assets/Friends-Cover/cover-7.jpg"
import Cover8 from "../../assets/Friends-Cover/cover-8.jpg"
import Cover9 from "../../assets/Friends-Cover/cover-9.jpg"

import Uimg1 from "../../assets/User-post/img1.jpg"
import Uimg2 from "../../assets/User-post/img2.jpg"
import Uimg3 from "../../assets/User-post/img3.jpg"


import "../Home/Home.css"

import Left from "../../Components/LeftSide/Left"
import Middle from "../../Components/MiddleSide/Middle"
import Right from '../../Components/RightSide/Right'
import Nav from '../../Components/Navigation/Nav'
import moment from 'moment/moment'

const Home = ({setFriendsProfile}) => {
  
    const [posts,setPosts] = useState(
        [
          {
            id:1,
            username:"Aron Caslib",
            profilepicture:DPimg1,
            img:img1,
            mapLink: 'https://tinyurl.com/msbptwmz',
            datetime:moment("20230131", "YYYYMMDD").fromNow(),
            body:"CCIS Shot...",
            like: 44,
            comment:3,
            unFilledLike:true,
            coverpicture:Cover1,
            userid:"@AronCaslib",
            ModelCountryName:"Switzerland",
            ModelJobName:"Web Developer",
            ModelJoinedDate:"Joined in 2019-02-28",
            followers:1478
          },
          {
            id:2,
            username:"Roland Hontalba",
            profilepicture:DPimg2,
            img:img2,
            mapLink: 'https://tinyurl.com/2nyfymrn',
            datetime:moment("20230605", "YYYYMMDD").fromNow(),
            body:"Evening Dinner...",
            like: 84,
            comment:3,
            coverpicture:Cover2,
            userid:"@rolandhon",
            ModelCountryName:"Australia",
            ModelJobName:"Japan",
            ModelJoinedDate:"Joined in 2018-01-17",
            followers:1730
          },
          {
            id:3,
            username:"Food Site.ph",
            profilepicture:DPimg3,
            img:img3,
            mapLink: 'https://tinyurl.com/3846tnnz',
            datetime:moment("20230813", "YYYYMMDD").fromNow(),
            body:"Check out the new product from...",
            like: 340,
            comment:76,
            coverpicture:Cover3,
            userid:"@Foodsiteph",
            ModelCountryName:"Philippines",
            ModelJobName:"Cafe",
            ModelJoinedDate:"Joined in 2022-03-01",
            followers:426
          },
        ]
      )

      const [body,setBody] =useState("")
      const [importFile,setImportFile] =useState("")
      

      const handleSubmit =(e)=>{
        e.preventDefault()
        
        
        const id =posts.length ? posts[posts.length -1].id +1 :1
        const username="User"
        const profilepicture=Profile
        const datetime=moment.utc(new Date(), 'yyyy/MM/dd kk:mm:ss').local().startOf('seconds').fromNow()
        const img =images ? {img:URL.createObjectURL(images)} : null
        
        const obj ={id:id,
                   profilepicture:profilepicture,
                   username:username,
                   datetime:datetime,
                   img:img && (img.img),
                   body:body,
                   like:0,
                   comment:0
                  }

        

        const insert =[...posts,obj]
        setPosts(insert)
        setBody("")
        setImages(null)

      }
   
   const [search,setSearch] =useState("")

    
  const [following,setFollowing] =useState("")
        
  const [showMenu,setShowMenu] =useState(false)
  const [images,setImages] =  useState(null)

  return (
    <div className='interface'>
        <Nav 
        search={search}
        setSearch={setSearch}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        />

    <div className="home">
   
        <Left />

        <Middle 
        handleSubmit={handleSubmit}
        body ={body}
        setBody ={setBody}
        importFile ={importFile}
        setImportFile ={setImportFile}
        posts={posts}
        setPosts={setPosts}
        search={search}
        setFriendsProfile={setFriendsProfile}
        images={images}
        setImages={setImages}

        />

        <Right
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        following={following}
        setFollowing={setFollowing}
        />
    </div>

    </div>
  )
}

export default Home