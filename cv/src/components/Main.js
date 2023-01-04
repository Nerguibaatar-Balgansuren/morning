import Button from "./Button";

const Tech = ({techs}) => {
    return (
        <ul>
            {techs.map((e)=> (
                <li>{e}</li>
            ))}
        </ul>
    )
}

const UserCard = ({img, firstname, lastname}) => {
    return (
        <div>
            <img src={img ? img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVofE5ZM20-ja6V3Cwj3EFk4LsOzJd2FQww&usqp=CAU"} alt="user" width={150} style={{borderRadius: '50%', backgroundColor: "grey"}} />
            <h4>
                {firstname}
                {lastname}
            </h4>
        </div>
    );
};



export default function Main ({
    user, techs, greetPeople, showDate}) {

        const userInfo = {...user, img: "https://i.pinimg.com/originals/91/44/8b/91448b4b89b3bec0070da6bfd814a3c3.jpg",
    };


    let imgPa = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVhTXN0sEp0yPFwWVk1f_uJo2BE8bcd4OpA&usqp=CAU"
    
    const users = [
        {img: imgPa, firstname:"Dulam", lastname:"Bold",},
        {img: imgPa, firstname:"Lkhagva", lastname:"Gansukh",},
        {img: "", firstname:"Gonchigsumlai", lastname:"Khurelsukh",},
        {img: imgPa, firstname:"Khorolmaa", lastname:"Altansukh",},
        {img: imgPa, firstname:"Bat", lastname:"Mongonsukh",},
    ]

    return (
        <div>
            <div>
                <h4>Tech Stack</h4>
                <Tech techs={techs} />
                <UserCard {...userInfo}  />

                {users.map((userInfo) => {
                    return <UserCard {...userInfo} />
                })}
                <Button text="Greet People" status={true} func={greetPeople} />
                <Button text="Show Date" status={false} func={showDate} />
            </div>
        
        </div>
    )
}