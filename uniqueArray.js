import React, { Component } from 'react';

export default class BrowserDetection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialArray: [],
            filterArray: [] 
        }

    }

    componentDidMount() {
        //on browser load call the removeDuplicateFrArray function to show the details
        this.removeDuplicateFrArray();
    }
    //function to remove duplicate from the array
    removeDuplicateFrArray = () => {

        var words = ['spray', 'limit', 'elite', 1, 2, 1, 1, '#', '#', 'elite', 'exuberant', 'destruction', 'present'];
        
        this.setState({initialArray:words})

        const result = words.filter(function (word, index) {

            if (words.indexOf(word) == index) {
                return true
            }
            else {
                return false
            }

        })
        this.setState({filterArray:result})

    }
    render() {


        return (
            <div style={{textAlign:'center'}}>
                <div style={{ fontWeight: 'bold', fontSize: '27px', marginTop: '25px', marginBottom: '40px' }}>Initial Array :</div>
                <div >
                   {this.state.initialArray.map((details,index)=>
                    <div key={index} style={{display:'inline-flex'}}>
                     <div  style={{ fontWeight: 'bold', fontSize: '17px'}}> {details} ,</div>
                    </div>
                   )}
                </div>
                 <div  style={{ fontWeight: 'bold', fontSize: '27px', marginTop: '25px', marginBottom: '40px'}}>Filtered Array :</div>
                <div>
                   {this.state.filterArray.map((details,index)=>
                    <div key={index}  style={{display:'inline-flex'}}>
                      <div  style={{ fontWeight: 'bold', fontSize: '17px'}}> {details} ,</div>
                    </div>
                   )}
                </div>
            </div>
        );
    }
}


