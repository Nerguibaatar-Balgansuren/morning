export default function Header ({headtitle, firstname, lastname}) {
    


    return (
        <div>
            <div>
                {headtitle.welcome} <br></br>
                {headtitle.title} <br></br>
                {headtitle.subtitle} <br></br>

                {firstname}
                &nbsp;
                {lastname}

            </div>
        
        

        </div>
       

    );
}