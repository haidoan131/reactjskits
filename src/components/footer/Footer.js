function Footer(props){
    // viết kiểu này dễ quản lí
    const {nam1,age1}=props
    const x=5;
    const arr=[{name:"lê mèp",age:22},{name:"lê heo",age:25},{name:"lê thỏ",age:23}]
    return(
        <div>
            this is footer
            <h1>x= {x}</h1>
            <h1>props từ app xuống footer {nam1} tuổi là {age1}</h1>

            {
                //kiểm tra có dữ liêu mới in ra 
                arr&&arr.map((item,index)=>(<p key={index}>  {item.name}</p>))
            }

        </div>
    )
}

export default Footer