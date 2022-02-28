import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ToolsList extends Component {

    render() {
        // debugger
        const toolList = this.props.tools.map(tool => {
            let availability;
            if(tool.borrower) {
                availability = <span className="available">Unavailable</span>;
            } else {
                availability = <span className="unavailable">Available</span>;
            }
            return(
                <li key={tool.id} >
                    <Link key={tool.id} to={`${this.props.parentUrl}/${tool.id}`}>
                        {tool.name} - {availability}
                    </Link>
                </li>
            )
        })

        return (
            <div className="tools-list">
                {toolList}
            </div>
        )
    }

    // render() {
        // debugger
        // const category = this.props.category;
        // const filteredTools = this.props.tools.filter(tool => tool.category.name === category);
        
        // const toolsList = filteredTools.map(tool => {
        //     // return (
        //         // <Link key={tool.id} to={`{this.props.parentPath}/${tool.id}`}>
        //         //     {tool.name} - {tool.borrower.id ? <span className="available">Available</span> : <span className="unavailable">Unavailable</span>}
        //         // </Link>
        //         <p >
        //             {tool.name} - {tool.borrower.id ? <span className="available">Available</span> : <span className="unavailable">Unavailable</span>}
        //         </p>
        //     // )
        // })
        // return (
        //     <div className="tools-list">
        //         {toolsList}   
        //     </div>
        // )
        // return <div>{this.toolsList()}</div>
        // return (
        //     <ToolsList tools={/>
        // )
    // }

}

export default ToolsList;