

let kepek=["sovereign.png", "magyarszentek.png",
		   "magyarszabadsag.png","aranymeteorit.jpg",
		   "aranyerme.jpg","aranydukat.png"];

let aktualis = 0;

ReactDOM.render(
    React.createElement(App),
    document.getElementById("app-container")
);

function App(){
    const [kep, setKep] = React.useState(aktualis);
    console.log(aktualis);
    return React.createElement(
        "div",
        {
            className: "border"
        },
        
        React.createElement(ImgComponent, {kep}),
        React.createElement(ButtonComponent, {setKep})
    );
}

function ImgComponent(props){
    return React.createElement(
        "div",
        {
            style:{
                textAlign: "center"
            },
        },
        React.createElement(
            "img",
            {
                src: kepek[props.kep],
                style:{
                    width: "600px",
                    height: "300px"
                }
            }
        )
    )
}

function ButtonComponent(props){
    return React.createElement(
        "div",
        {
            style:{
                textAlign: "center"
            },
        },
        React.createElement(
            "button",
            {
                className: "btn btn-primary m-4",
                style:{
                    width: "95px"
                },
                onClick: ()=>{
                    if(aktualis > 0){
                        aktualis--;
                        props.setKep(aktualis);
                    }
                    console.log(aktualis);
                }
            },
            "Előző"
        ),
        
        React.createElement(
            "button",
            {
                className: "btn btn-primary m-4",
                style:{
                    //float: "right",
                    width: "95px"
                },
                onClick: ()=>{
                    if(aktualis < 5){
                        aktualis++;
                        props.setKep(aktualis);
                    }
                    console.log(aktualis);
                }
            },
            "Következő"
        ),
    )
}
