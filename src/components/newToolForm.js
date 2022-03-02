import react, { Component } from 'react';

class NewToolForm extends Component {

    state = {
        tool: {
            name: "",
            description: "",
            image_url: "",
            category: ""
        }
    }

    handleOnChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            tool: {...this.state.tool, [name]: value }
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        // debugger
        //find the Category that matches the selected Category name
        const selectedCategory = this.props.categories.find(category =>
            category.name === this.state.tool.category
        );
        //add category_id and owner_id to the new Tool
        let newToolData = {
            ...this.state.tool,
            category_id: selectedCategory.id,
            owner_id: this.props.currentUserId
        }
        //remove the category property
        delete newToolData.category;

        this.props.createNewTool({tool: newToolData});

        this.setState({
            tool: {
                name: "",
                description: "",
                image_url: "",
                category: ""
            }
        });
    }

    render() {
        const options = this.props.categories.map(category => {
            return <option key={category.id} value={category.name}>{category.name}</option>
        });

        return (
            <div className="newToolForm" >
                <h3>Add a Tool to Share</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <select name="category" placeholder="Select Category" value={this.state.category} onChange={this.handleOnChange}>
                        <option value="" disabled selected hidden>Select Category</option>
                        {options}
                    </select>
                    <br/>
                    <input type="text" size="30" name="name" placeholder="Name" value={this.state.tool.name} onChange={this.handleOnChange}/>
                    <br/>
                    <textarea rows="4" cols="30" style={{resize:"none"}} name="description" placeholder="Description" value={this.state.tool.description} onChange={this.handleOnChange}/>
                    <br/>
                    <input type="text" size="30" name="image_url" placeholder="Image (URL)" value={this.state.tool.image_url} onChange={this.handleOnChange}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default NewToolForm;