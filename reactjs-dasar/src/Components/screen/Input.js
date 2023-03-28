import React from "react";

class Input extends React.Component{

    constructor(props){
        super(props)
        console.log(props);
    }

    render(){
        return(
            <div>
                <input type="text" value={this.props.alamat} id="nama" />
            </div>
        )
    }
}

export default Input;