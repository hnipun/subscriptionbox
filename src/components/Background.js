import React, {Component} from 'react';


class Background extends Component {
    constructor() {
        super();
        this.state = {
            pictures: []
        };
    }


    componentDidMount() {
        fetch('https://randomuser.me/api/?result=502')
            .then(result => {
                return result.json();
            }).then(data => {
            let pictures = data.results.map((pic) => {
                return (
                    <div key={pic.results}>
                        <img src={pic.picture.medium}/>
                        <h1>{pic.email}</h1>
                    </div>
                )

            })
            this.setState({pictures: pictures});
            console.log("state", data);
        })

    }


    render() {
        return (
            <div className={'container2'}>
                <div className={'container2'}>
                    {this.state.pictures}
                </div>
            </div>
        )
    }

}

export default Background;