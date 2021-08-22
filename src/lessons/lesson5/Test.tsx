import React, { ButtonHTMLAttributes } from 'react';

export default class SuperTest extends React.Component{
    constructor(props: any) {
        super(props);
        this.state = {
            testParam: 'Hello',
        };
        //@ts-ignore
        this.bindedBTN = this.onClickBtn.bind(this);
    }

    onClickBtn (event: React.MouseEvent<HTMLButtonElement>) : void {
        //this.setState({testParam: 'Hello!!!!!!!'});
        let arr = document.querySelectorAll('.Test');
        let arr2 = document.getElementsByClassName('Test');
        console.log(arr);
        console.log(arr2);
        //@ts-ignore
        let result = Array.filter.call(arr2, (item) => item.innerText === '3');
        console.log(result);
    }

    render() {
        //@ts-ignore
        const view: any = this.state.testParam;
        return (
            <div>
                <h1>TestComponent</h1>
                <p>{view}</p>
                <div className='Test'>1</div>
                <div className='Test'>2</div>

                <div className='Test'>3</div>
                <div className='Test'>4</div>
                <button onClick={(e) => {
                    //@ts-ignore
                    this.bindedBTN(e);
                }}>Click Me</button>
            </div>
        );
    }
}